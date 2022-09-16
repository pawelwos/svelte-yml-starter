import yaml from "js-yaml"
import { Sections } from '$lib/sections/Sections.svelte' 

export const load = async ({fetch, params}) => {
  const res = await fetch('/data/blog/'+params.slug+'.yml')
  const yml = await res.text()
  const page = yaml.load(yml)
  const bloglist = await fetch(`/api/posts.json`).then(res => res.json())

  return {
    page,
    bloglist,
    Sections
  }
}
