<script context="module">
  import yaml from "js-yaml"

  import { Sections } from '../sections/Sections.svelte' 

  export const load = async ({fetch}) => {
    const res = await fetch('/data/pages/home.yml')
    const yml = await res.text()


    const page = yaml.load(yml)
    const bloglist = await fetch(`/api/posts.json`).then(res => res.json())


    return {
      props: {
        page,
        bloglist
      }
    }
  }
</script>

<script>
  import SectionsLoop from '../components/Sections.svelte'
  export let page
  export let bloglist
</script>


<SectionsLoop page={page} Sections={Sections} bloglist={bloglist} />