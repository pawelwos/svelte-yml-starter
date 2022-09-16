<script>
  import SectionsLoop from '$lib/components/Sections.svelte'
  export let data
  let {bloglist, page, Sections} = data
</script>

<SectionsLoop page={page} Sections={Sections} bloglist={bloglist} />
