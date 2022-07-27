<script>
  export let Sections
	export let page
  export let bloglist
</script>
{#each page.sections as section}
  {#if Sections[section.type]}
    <svelte:component this={Sections[section.type]} section={section} page={page} bloglist={bloglist} />
  {:else}
     <p>{section.type} component deosn't exist</p>
  {/if}
{/each}