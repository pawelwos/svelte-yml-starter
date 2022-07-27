<script>
	export let section
</script>
<section class='twocols grid grid-cols-1 md:grid-cols-2 justify-center items-center auto-rows-auto gap-4 mb-6' style="background-color: {section.bgcolor}">
	<div class={`p-8 ${section.imagePosition === 'right' ? 'order-2' : 'order-1'} ${section.textColor}`}>
		{@html section.content}
	</div>
	<div class={`relative min-h-[400px] h-full ${section.imagePosition === 'right' ? 'order-1' : 'order-2'}`}>
		<img class="absolute inset-0 block w-full h-full object-cover" src={section.image} alt={section.imageAlt}>
	</div>
</section>