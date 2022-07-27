<script context="module">
  import yaml from "js-yaml"

  import { Sections } from '../sections/Sections.svelte' 

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
  import SectionsLoop from '../components/Sections.svelte'
  export let page
</script>

<SectionsLoop page={page} Sections={Sections} />