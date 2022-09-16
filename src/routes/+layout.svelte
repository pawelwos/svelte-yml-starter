<script>
  import "../css/app.css";
</script>

<header class="bg-blue-900 p-8">
	<div class="container mx-auto text-center">
		<h1 class="text-white text-2xl font-bold"><a href="/">SvelteKit YAML Starter</a></h1>
	</div>
  <div class="py-4 md:flex justify-center text-white space-x-4">
    <a href="/second-page" data-sveltekit-prefetch>Second Page</a>
    <a href="/another-page" data-sveltekit-prefetch>Another Page</a>
  </div>
</header>
<div class="p-8">
	<div class="container mx-auto">
		<slot />
	</div>
</div>
<footer class="p-8">
	<div class="container mx-auto border-t border-gray-400 pt-4">
		<p>© { new Date().getFullYear() }, Built with <a href="https://kit.svelte.dev/" class="underline">SvelteKit</a>	</p>
	</div>
</footer>