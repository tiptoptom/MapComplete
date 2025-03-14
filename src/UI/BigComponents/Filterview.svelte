<script lang="ts">
  /**
   * The FilterView shows the various options to enable/disable a single layer or to only show a subset of the data.
   */
  import type FilteredLayer from "../../Models/FilteredLayer"
  import LayerConfig from "../../Models/ThemeConfig/LayerConfig"
  import ToSvelte from "../Base/ToSvelte.svelte"
  import Checkbox from "../Base/Checkbox.svelte"
  import FilterConfig from "../../Models/ThemeConfig/FilterConfig"
  import Dropdown from "../Base/Dropdown.svelte"
  import { ImmutableStore, Store, UIEventSource } from "../../Logic/UIEventSource"
  import FilterviewWithFields from "./FilterviewWithFields.svelte"
  import Tr from "../Base/Tr.svelte"
  import Translations from "../i18n/Translations"
  import type { SpecialVisualizationState } from "../SpecialVisualization"
  import Constants from "../../Models/Constants"

  export let state: SpecialVisualizationState
  export let filteredLayer: FilteredLayer
  export let highlightedLayer: Store<string | undefined> = new ImmutableStore(undefined)
  export let zoomlevel: Store<number> = new ImmutableStore(22)
  let layer: LayerConfig = filteredLayer.layerDef
  let isDisplayed: UIEventSource<boolean> = filteredLayer.isDisplayed

  let isDebugging = state?.featureSwitches?.featureSwitchIsDebugging ?? new ImmutableStore(false)
  let showTags = state?.userRelatedState?.showTags?.map(
    (s) =>
      (s === "yes" &&
        state?.userRelatedState?.osmConnection?.userDetails?.data?.csCount >=
          Constants.userJourney.tagsVisibleAt) ||
      s === "always" ||
      s === "full"
  )

  /**
   * Gets a UIEventSource as boolean for the given option, to be used with a checkbox
   */
  function getBooleanStateFor(option: FilterConfig): UIEventSource<boolean> {
    const state = filteredLayer.appliedFilters.get(option.id)
    return state.sync(
      (f) => f === 0,
      [],
      (b) => (b ? 0 : undefined)
    )
  }

  /**
   * Gets a UIEventSource as number for the given option, to be used with a dropdown or radiobutton
   */
  function getStateFor(option: FilterConfig): UIEventSource<number | string> {
    return filteredLayer.appliedFilters.get(option.id)
  }
</script>

{#if filteredLayer.layerDef.name}
  <div class:focus={$highlightedLayer === filteredLayer.layerDef.id} class="mb-1.5">
    <Checkbox selected={isDisplayed}>
      <div class="no-image-background block h-6 w-6" class:opacity-50={!$isDisplayed}>
        <ToSvelte construct={() => layer.defaultIcon()} />
      </div>

      <Tr t={filteredLayer.layerDef.name} />

      {#if $zoomlevel < layer.minzoom}
        <span class="alert">
          <Tr t={Translations.t.general.layerSelection.zoomInToSeeThisLayer} />
        </span>
      {/if}
    </Checkbox>

    {#if $isDisplayed && filteredLayer.layerDef.filters?.length > 0}
      <div id="subfilters" class="ml-4 flex flex-col gap-y-1">
        {#each filteredLayer.layerDef.filters as filter}
          <div>
            <!-- There are three (and a half) modes of filters: a single checkbox, a radio button/dropdown or with searchable fields -->
            {#if filter.options.length === 1 && filter.options[0].fields.length === 0}
              <Checkbox selected={getBooleanStateFor(filter)}>
                <Tr t={filter.options[0].question} />
                <span class="subtle">
                  {filter.options[0].osmTags.asHumanString()}
                </span>
              </Checkbox>
            {/if}

            {#if filter.options.length === 1 && filter.options[0].fields.length > 0}
              <FilterviewWithFields id={filter.id} {filteredLayer} option={filter.options[0]} />
            {/if}

            {#if filter.options.length > 1}
              <Dropdown value={getStateFor(filter)}>
                {#each filter.options as option, i}
                  <option value={i}>
                    {#if option.emoji}
                      {option.emoji}
                    {/if}
                    <Tr t={option.question} />
                    {#if $showTags && option.osmTags !== undefined}
                      &nbsp;({option.osmTags.asHumanString()})
                    {/if}
                  </option>
                {/each}
              </Dropdown>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
{:else if $isDebugging}
  <div class="code">
    {layer.id} (no name)
  </div>
{/if}
