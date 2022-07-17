<script>
  import "../css/app.css";
</script>

<header class="bg-blue-900 p-8">
	<div class="container mx-auto">
		<h1 class="text-white text-2xl font-bold">SvelteKit YAML Starter</h1>
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