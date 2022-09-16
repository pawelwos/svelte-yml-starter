
<script>
  import SectionsLoop from '$lib/components/Sections.svelte'
  export let data
  let {page, Sections} = data
</script>

<SectionsLoop page={page} Sections={Sections} />