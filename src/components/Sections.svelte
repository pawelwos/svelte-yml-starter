<script>
  export let Sections
	export let page
  export let preview = false
</script>
{#each page.sections as section}
  {#if Sections[section.type]}
    <svelte:component this={Sections[section.type]} section={section} page={page} preview={preview} />
  {:else}
     <p>{section.type} component deosn't exist</p>
  {/if}
{/each}