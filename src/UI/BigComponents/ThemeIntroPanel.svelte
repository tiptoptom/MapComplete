<script lang="ts">
  import Translations from "../i18n/Translations"
  import Tr from "../Base/Tr.svelte"
  import NextButton from "../Base/NextButton.svelte"
  import ThemeViewState from "../../Models/ThemeViewState"
  import { Store } from "../../Logic/UIEventSource"
  import type { GeolocationPermissionState } from "../../Logic/State/GeoLocationState"
  import { GeoLocationState } from "../../Logic/State/GeoLocationState"
  import If from "../Base/If.svelte"
  import { ExclamationTriangleIcon } from "@babeard/svelte-heroicons/mini"
  import GeolocationIndicator from "./GeolocationIndicator.svelte"

  /**
   * The theme introduction panel
   */
  export let state: ThemeViewState
  let theme = state.theme

  let geolocation = state.geolocation.geolocationState
  let geopermission: Store<GeolocationPermissionState> = geolocation.permission
  let currentGPSLocation = geolocation.currentGPSLocation
  let gpsExplanation = geolocation.gpsStateExplanation
  let gpsAvailable = geolocation.gpsAvailable

  function jumpToCurrentLocation() {
    state.geolocationControl.handleClick()
    const glstate = state.geolocation.geolocationState
    if (glstate.currentGPSLocation.data !== undefined) {
      const c = glstate.currentGPSLocation.data
      state.guistate.pageStates.about_theme.setData(false)
      const coor = { lon: c.longitude, lat: c.latitude }
      state.mapProperties.location.setData(coor)
    }
    if (glstate.permission.data !== "granted") {
      glstate.requestPermission()
      return
    }
  }
</script>

<div class="flex h-full flex-col justify-between">
  <div>
    <!-- Intro, description, ... -->

    <Tr t={theme.description} />

    <If condition={state.featureSwitches.featureSwitchEnableLogin}>
      <Tr t={Translations.t.general.welcomeExplanation.general} />
      {#if theme.layers.some((l) => l.presets?.length > 0)}
        <Tr t={Translations.t.general.welcomeExplanation.addNew} />
      {/if}
    </If>

    <Tr t={theme.descriptionTail} />

    <!-- Buttons: open map, go to location, search -->
    <NextButton
      clss="primary w-full"
      on:click={() => state.guistate.pageStates.about_theme.setData(false)}
    >
      <div class="flex w-full flex-col items-center">
        <div class="flex w-full justify-center text-2xl">
          <Tr t={Translations.t.general.openTheMap} />
        </div>
        <If condition={state.featureSwitches.featureSwitchEnableLogin}>
          <Tr t={Translations.t.general.openTheMapReason} />
        </If>
      </div>
    </NextButton>

    <div class="flex w-full flex-wrap sm:flex-nowrap">
      <If condition={state.featureSwitches.featureSwitchGeolocation}>
        <button
          disabled={!$gpsAvailable}
          class:disabled={!$gpsAvailable}
          class="flex w-full items-center gap-x-2"
          on:click={jumpToCurrentLocation}
        >
          <GeolocationIndicator {state} />
          <Tr t={$gpsExplanation} />
        </button>
      </If>
    </div>

    {#if $currentGPSLocation === undefined && $geopermission === "requested" && GeoLocationState.isSafari()}
      <a
        href="https://support.apple.com/en-us/HT207092"
        class="button w-full"
        target="_blank"
        rel="noopener"
      >
        <div class="link-underline m-1 flex w-full">
          <ExclamationTriangleIcon class="w-12 pr-2" />
          <div class="flex w-full flex-col">
            <Tr cls="font-normal" t={Translations.t.general.enableGeolocationForSafari} />
            <Tr t={Translations.t.general.enableGeolocationForSafariLink} />
          </div>
        </div>
      </a>
    {/if}
  </div>

  <div class="link-underline mt-8 flex justify-end text-sm">
    <a href="https://mapcomplete.org" target="_blank">
      <Tr t={Translations.t.general.poweredByMapComplete} />
    </a>
  </div>
</div>
