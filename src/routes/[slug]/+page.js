import yaml from "js-yaml"

import { Sections } from '$lib/sections/Sections.svelte' 

export const load = async ({fetch, params}) => {
  const res = await fetch('/data/pages/'+params.slug+'.yml')
  const yml = await res.text()

  const page = yaml.load(yml)
  return {
    page,
    Sections
  }
}
