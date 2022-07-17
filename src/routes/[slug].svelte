<script context="module">
  import yaml from "js-yaml"
  
  export const load = async ({fetch, params}) => {
    const res = await fetch('/data/pages/'+params.slug+'.yml')
    const yml = await res.text()
    const page = yaml.load(yml)

    return {
      props: {
        page
      }
    }
  }
</script>

<script>
  import Sections from '../sections/Sections.js'
  export let page
</script>


{#each page.sections as section, index}
  {#if Sections[section.type]}
    {#await import(`../sections/${Sections[section.type]}.svelte`) then Module}
      <Module.default id={`section_${index}`} section={section} page={page} />
    {/await}
  {:else}
     <p>{section.type} component deosn't exist</p>
  {/if}
{/each}
