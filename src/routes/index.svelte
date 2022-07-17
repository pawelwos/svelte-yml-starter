<script context="module">
  import yaml from "js-yaml"

  export const load = async ({fetch}) => {
    const res = await fetch('/data/pages/home.yml')
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
	// This is just a simple array that converts Wordpress ACF naming convention to JS class names 
	import Sections from '../sections/Sections.js'
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