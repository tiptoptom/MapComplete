<script lang="ts">
  import { Utils } from "../../Utils"

  export let text: string
  export let href: string

  export let classnames: string = undefined
  export let download: string = undefined
  export let ariaLabel: string = undefined

  export let newTab: boolean = false
</script>

<a
  href={Utils.prepareHref(href)}
  aria-label={ariaLabel}
  title={ariaLabel}
  target={newTab ? "_blank" : undefined}
  {download}
  class={classnames}
>
  {@html text}
</a>
