<script lang="ts">
  /**
   * THe panel containing all filter- and layerselection options
   */

  import OverlayToggle from "./OverlayToggle.svelte"
  import Filterview from "./Filterview.svelte"
  import ThemeViewState from "../../Models/ThemeViewState"
  import Translations from "../i18n/Translations"
  import Tr from "../Base/Tr.svelte"
  import Filter from "../../assets/svg/Filter.svelte"
  import Page from "../Base/Page.svelte"

  export let state: ThemeViewState
  export let onlyLink: boolean

  let theme = state.theme

  let allEnabled: boolean
  let allDisabled: boolean

  function updateEnableState() {
    allEnabled = true
    allDisabled = true
    state.layerState.filteredLayers.forEach((v) => {
      if (!v.layerDef.name) {
        return
      }
      allEnabled &&= v.isDisplayed.data
      allDisabled &&= !v.isDisplayed.data
    })
  }

  updateEnableState()
  state.layerState.filteredLayers.forEach((v) => {
    if (!v.layerDef.name) {
      return
    }
    v.isDisplayed.addCallbackD((_) => updateEnableState())
  })

  function enableAll(doEnable: boolean) {
    state.layerState.filteredLayers.forEach((v) => {
      if (!v.layerDef.name) {
        return
      }
      v.isDisplayed.setData(doEnable)
    })
  }
</script>

<Page {onlyLink} shown={state.guistate.pageStates.filter}>
  <div class="flex" slot="link">
    <Filter class="h-6 w-6" />
    <Tr t={Translations.t.general.menu.filter} />
  </div>
  <div class="mr-16 flex w-full flex-wrap items-center justify-between" slot="header">
    <div class="flex">
      <Filter class="h-6 w-6 pr-2" />
      <Tr t={Translations.t.general.menu.filter} />
    </div>

    <div class="ml-2 flex gap-x-2 text-sm">
      <button class="small as-link" class:disabled={allEnabled} on:click={() => enableAll(true)}>
        <Tr t={Translations.t.general.filterPanel.enableAll} />
      </button>
      <button class="small as-link" class:disabled={allDisabled} on:click={() => enableAll(false)}>
        <Tr t={Translations.t.general.filterPanel.disableAll} />
      </button>
    </div>
  </div>

  {#each theme.layers as layer}
    <Filterview
      {state}
      zoomlevel={state.mapProperties.zoom}
      filteredLayer={state.layerState.filteredLayers.get(layer.id)}
      highlightedLayer={state.guistate.highlightedLayerInFilters}
    />
  {/each}

  {#each theme.tileLayerSources as tilesource}
    <OverlayToggle
      layerproperties={tilesource}
      state={state.overlayLayerStates.get(tilesource.id)}
      highlightedLayer={state.guistate.highlightedLayerInFilters}
      zoomlevel={state.mapProperties.zoom}
    />
  {/each}
</Page>
