<script context="module">
  import Header from './Header.svelte'
  import Simple from './Simple.svelte'
  import TwoCols from './TwoCols.svelte'
  import BlogList from './BlogList.svelte'
  import Features from './Features.svelte'

  export const Sections = {
    'simple': Simple,
    'header': Header,
    'blog-list': BlogList,
    'twocols' : TwoCols,
    'features' : Features
  }
</script>