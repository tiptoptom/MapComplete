import { Feature, Polygon } from "geojson"
import * as globallayers from "../assets/global-raster-layers.json"
import * as globallayersEli from "../assets/generated/editor-layer-index-global.json"

import * as bingJson from "../assets/bing.json"

import { BBox } from "../Logic/BBox"
import { Store, Stores, UIEventSource } from "../Logic/UIEventSource"
import { GeoOperations } from "../Logic/GeoOperations"
import { EliCategory, RasterLayerProperties } from "./RasterLayerProperties"
import { Utils } from "../Utils"

export type EditorLayerIndex = (Feature<Polygon, EditorLayerIndexProperties> & RasterLayerPolygon)[]

export class AvailableRasterLayers {
    private static _editorLayerIndex: EditorLayerIndex = undefined
    private static _editorLayerIndexStore: UIEventSource<EditorLayerIndex> =
        new UIEventSource<EditorLayerIndex>(undefined)

    public static async editorLayerIndex(): Promise<EditorLayerIndex> {
        if (AvailableRasterLayers._editorLayerIndex !== undefined) {
            return AvailableRasterLayers._editorLayerIndex
        }
        console.debug("Downloading ELI")
        const eli = await Utils.downloadJson<{ features: EditorLayerIndex }>(
            "./assets/data/editor-layer-index.json"
        )
        this._editorLayerIndex = eli.features?.filter((l) => l.properties.id !== "Bing") ?? []
        this._editorLayerIndexStore.set(this._editorLayerIndex)
        return this._editorLayerIndex
    }

    public static readonly globalLayers: ReadonlyArray<RasterLayerPolygon> =
        AvailableRasterLayers.initGlobalLayers()

    private static initGlobalLayers(): RasterLayerPolygon[] {
        const gl: RasterLayerProperties[] = (globallayers["default"] ?? globallayers).layers.filter(
            (properties) =>
                properties.id !== "osm.carto" && properties.id !== "Bing" /*Added separately*/
        )
        const glEli: RasterLayerProperties[] = globallayersEli["default"] ?? globallayersEli
        const joined = gl.concat(glEli)
        if (joined.some((j) => !j.id)) {
            console.log("Invalid layers:", JSON.stringify(joined.filter((l) => !l.id)))
            throw "Detected invalid global layer with invalid id"
        }
        return joined.map(
            (properties) =>
                <RasterLayerPolygon>{
                    type: "Feature",
                    properties,
                    geometry: BBox.global.asGeometry(),
                }
        )
    }

    public static bing = <RasterLayerPolygon>bingJson
    public static readonly osmCartoProperties: RasterLayerProperties = {
        id: "osm",
        name: "OpenStreetMap",
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: {
            text: "OpenStreetMap",
            url: "https://openStreetMap.org/copyright",
        },
        best: true,
        max_zoom: 19,
        min_zoom: 0,
        category: "osmbasedmap",
    }

    public static readonly osmCarto: RasterLayerPolygon = {
        type: "Feature",
        properties: AvailableRasterLayers.osmCartoProperties,
        geometry: BBox.global.asGeometry(),
    }

    /**
     * The default background layer that any theme uses which does not explicitly define a background
     */
    public static readonly defaultBackgroundLayer: RasterLayerPolygon =
        AvailableRasterLayers.globalLayers.find((l) => {
            return l.properties.id === "protomaps.sunny"
        })

    public static layersAvailableAt(
        location: Store<{ lon: number; lat: number }>,
        enableBing?: Store<boolean>
    ): { store: Store<RasterLayerPolygon[]> } {
        const store = { store: undefined }
        Utils.AddLazyProperty(store, "store", () =>
            AvailableRasterLayers._layersAvailableAt(location, enableBing)
        )
        return store
    }

    private static _layersAvailableAt(
        location: Store<{ lon: number; lat: number }>,
        enableBing?: Store<boolean>
    ): Store<RasterLayerPolygon[]> {
        this.editorLayerIndex() // start the download
        const availableLayersBboxes = Stores.ListStabilized(
            location.mapD(
                (loc) => {
                    const eli = AvailableRasterLayers._editorLayerIndexStore.data
                    if (!eli) {
                        return []
                    }
                    const lonlat: [number, number] = [loc.lon, loc.lat]
                    return eli.filter((eliPolygon) => BBox.get(eliPolygon).contains(lonlat))
                },
                [AvailableRasterLayers._editorLayerIndexStore]
            )
        )
        return Stores.ListStabilized(
            availableLayersBboxes.map(
                (eliPolygons) => {
                    const loc = location.data
                    const lonlat: [number, number] = [loc.lon, loc.lat]
                    const matching: RasterLayerPolygon[] = eliPolygons.filter((eliPolygon) => {
                        if (eliPolygon.geometry === null) {
                            return true // global ELI-layer
                        }
                        return GeoOperations.inside(lonlat, eliPolygon)
                    })
                    matching.unshift(AvailableRasterLayers.osmCarto)

                    if (enableBing?.data) {
                        matching.push(AvailableRasterLayers.bing)
                    }
                    matching.push(...AvailableRasterLayers.globalLayers)
                    if (
                        !matching.some(
                            (l) =>
                                l.id === AvailableRasterLayers.defaultBackgroundLayer.properties.id
                        )
                    ) {
                        matching.push(AvailableRasterLayers.defaultBackgroundLayer)
                    }
                    return matching
                },
                [enableBing]
            )
        )
    }
}

export class RasterLayerUtils {
    /**
     * Selects, from the given list of available rasterLayerPolygons, a rasterLayer.
     * This rasterlayer will be of type 'preferredCategory' and will be of the 'best'-layer (if available).
     * Returns 'undefined' if no such layer is available
     * @param available
     * @param preferredCategory
     * @param ignoreLayer
     * @param skipLayers Skip the first N layers
     */
    public static SelectBestLayerAccordingTo(
        available: RasterLayerPolygon[],
        preferredCategory: string,
        ignoreLayer?: RasterLayerPolygon,
        skipLayers: number = 0
    ): RasterLayerPolygon {
        const inCategory = available.filter((l) => l.properties.category === preferredCategory)
        const best: RasterLayerPolygon[] = inCategory.filter((l) => l.properties.best)
        const others: RasterLayerPolygon[] = inCategory.filter((l) => !l.properties.best)
        let all = best.concat(others)
        console.log(
            "Selected layers are:",
            all.map((l) => l.properties.id)
        )
        if (others.length > skipLayers) {
            all = all.slice(skipLayers)
        }

        return all.find((l) => l !== ignoreLayer)
    }
}

export type RasterLayerPolygon = Feature<Polygon, RasterLayerProperties>

/**
 * Information about a raster tile layer
 *
 * Based on the spec here https://github.com/osmlab/editor-layer-index/blob/gh-pages/schema.json
 * which was then converted with http://borischerny.com/json-schema-to-typescript-browser/
 */
export interface EditorLayerIndexProperties extends RasterLayerProperties {
    /**
     * The name of the imagery source
     */
    readonly name: string
    /**
     * Whether the imagery name should be translated
     */
    readonly i18n?: boolean
    readonly type:
        | "tms"
        | "wms"
        | "bing"
        | "scanex"
        | "wms_endpoint"
        | "wmts"
        | "vector" /* Vector is not actually part of the ELI-spec, we add it for vector layers */
    /**
     * A rough categorisation of different types of layers. See https://github.com/osmlab/editor-layer-index/blob/gh-pages/CONTRIBUTING.md#categories for a description of the individual categories.
     */
    readonly category?: EliCategory

    /**
     * A URL template for imagery tiles
     */
    readonly url: string
    readonly min_zoom?: number
    readonly max_zoom?: number
    /**
     * explicit/implicit permission by the owner for use in OSM
     */
    readonly permission_osm?: "explicit" | "implicit" | "no"
    /**
     * A URL for the license or permissions for the imagery
     */
    readonly license_url?: string
    /**
     * A URL for the privacy policy of the operator or false if there is no existing privacy policy for tis imagery.
     */
    readonly privacy_policy_url?: string | boolean
    /**
     * A unique identifier for the source; used in imagery_used changeset tag
     */
    readonly id: string
    /**
     * A short English-language description of the source
     */
    readonly description?: string
    /**
     * The ISO 3166-1 alpha-2 two letter country code in upper case. Use ZZ for unknown or multiple.
     */
    readonly country_code?: string
    /**
     * Whether this imagery should be shown in the default world-wide menu
     */
    readonly default?: boolean
    /**
     * Whether this imagery is the best source for the region
     */
    readonly best?: boolean
    /**
     * The age of the oldest imagery or data in the source, as an RFC3339 date or leading portion of one
     */
    readonly start_date?: string
    /**
     * The age of the newest imagery or data in the source, as an RFC3339 date or leading portion of one
     */
    readonly end_date?: string
    /**
     * HTTP header to check for information if the tile is invalid
     */
    readonly no_tile_header?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.*$".
         */
        [k: string]: string[] | null
    }
    /**
     * 'true' if tiles are transparent and can be overlaid on another source
     */
    readonly overlay?: boolean & string
    readonly available_projections?: string[]
    readonly attribution?: {
        readonly url?: string
        readonly text?: string
        readonly html?: string
        readonly required?: boolean
    }
    /**
     * A URL for an image, that can be displayed in the list of imagery layers next to the name
     */
    readonly icon?: string
    /**
     * A link to an EULA text that has to be accepted by the user, before the imagery source is added. Can contain {lang} to be replaced by a current user language wiki code (like FR:) or an empty string for the default English text.
     */
    readonly eula?: string
    /**
     * A URL for an image, that is displayed in the mapview for attribution
     */
    readonly "logo-image"?: string
    /**
     * Customized text for the terms of use link (default is "Background Terms of Use")
     */
    readonly "terms-of-use-text"?: string
    /**
     * Specify a checksum for tiles, which aren't real tiles. `type` is the digest type and can be MD5, SHA-1, SHA-256, SHA-384 and SHA-512, value is the hex encoded checksum in lower case. To create a checksum save the tile as file and upload it to e.g. https://defuse.ca/checksums.htm.
     */
    readonly "no-tile-checksum"?: string
    /**
     * header-name attribute specifies a header returned by tile server, that will be shown as `metadata-key` attribute in Show Tile Info dialog
     */
    readonly "metadata-header"?: string
    /**
     * Set to `true` if imagery source is properly aligned and does not need imagery offset adjustments. This is used for OSM based sources too.
     */
    readonly "valid-georeference"?: boolean
    /**
     * Size of individual tiles delivered by a TMS service
     */
    readonly "tile-size"?: number
    /**
     * Whether tiles status can be accessed by appending /status to the tile URL and can be submitted for re-rendering by appending /dirty.
     */
    readonly "mod-tile-features"?: string
    /**
     * HTTP headers to be sent to server. It has two attributes header-name and header-value. May be specified multiple times.
     */
    readonly "custom-http-headers"?: {
        readonly "header-name"?: string
        readonly "header-value"?: string
    }
    /**
     * Default layer to open (when using WMS_ENDPOINT type). Contains list of layer tag with two attributes - name and style, e.g. `"default-layers": ["layer": { name="Basisdata_NP_Basiskart_JanMayen_WMTS_25829" "style":"default" } ]` (not allowed in `mirror` attribute)
     */
    readonly "default-layers"?: {
        layer?: {
            "layer-name"?: string
            "layer-style"?: string
            [k: string]: unknown
        }
        [k: string]: unknown
    }[]
    /**
     * format to use when connecting tile server (when using WMS_ENDPOINT type)
     */
    readonly format?: string
    /**
     * If `true` transparent tiles will be requested from WMS server
     */
    readonly transparent?: boolean & string
    /**
     * minimum expiry time for tiles in seconds. The larger the value, the longer entry in cache will be considered valid
     */
    readonly "minimum-tile-expire"?: number
}
