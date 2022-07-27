<script>
	export let section
</script>

<section class="simple relative bg-cover bg-center bg-no-repeat {section.bgimg ? 'p-24' : ''}" style="background-image: url('{section.bgimg}')">
	{#if section.bgimg}
		<div class="fade inset-0 absolute bg-black bg-opacity-75 z-0"></div>
	{/if}
	<div class="relative z-20 {section.textColor}">{@html section.content}</div>
</section>