<script lang="ts">
  import Icon from "./Icon.svelte"
  import { twMerge } from "tailwind-merge"

  /**
   * Renders a 'marker', which consists of multiple 'icons'
   */
  export let icons: string | { icon: string; color: string }[]

  let iconsParsed: { icon: string; color: string }[]
  if (typeof icons === "string") {
    iconsParsed = icons.split(";").map((subspec) => {
      if (subspec.startsWith("http://") || subspec.startsWith("https://")) {
        return {
          icon: subspec,
          color: "black",
        }
      }
      const [icon, color] = subspec.split(":")
      return {
        icon,
        color: color ?? "black",
      }
    })
  } else {
    iconsParsed = icons
  }

  /**
   * Class which is applied onto the individual icons
   */
  export let clss = ""
  export let emojiHeight: string = "40px"

  /**
   * Class applied onto the entire element
   */
  export let size = "w-full h-full"
</script>

{#if iconsParsed !== undefined && iconsParsed.length > 0}
  <div class={twMerge("relative", size)}>
    {#each iconsParsed as icon}
      <div class="absolute top-0 left-0 flex h-full w-full items-center">
        <Icon icon={icon.icon} color={icon.color} {clss} {emojiHeight} />
      </div>
    {/each}
  </div>
{/if}
