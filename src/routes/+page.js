import yaml from "js-yaml"

import { Sections } from '$lib/sections/Sections.svelte' 

export const load = async ({fetch}) => {
  const res = await fetch('/data/pages/home.yml')
  const yml = await res.text()

  const page = yaml.load(yml)
  const bloglist = await fetch(`/api/posts.json`).then(res => res.json())

  return {
    page,
    bloglist,
    Sections
  }
}
