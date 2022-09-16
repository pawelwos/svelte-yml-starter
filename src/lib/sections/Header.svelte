<script>
  export let section
</script>

<section class='relative bg-blue-800 white px-8 py-24 mb-6'>
  {#if section.bgimg}
     <img loading="lazy" src={section.bgimg} class="absolute z-0 inset-0 w-full h-full object-cover" alt={section.title} />
     <div class="absolute inset-0 z-10 bg-black bg-opacity-75"></div>
  {/if}
  <h1 class='relative z-10 mb-0 text-center text-white text-3xl lg:text-5xl'>{section.title}</h1>
</section>