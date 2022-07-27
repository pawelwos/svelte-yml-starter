<script>
	export let section
</script>

<section class="features">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
			{#each section.features as feat}
				 <div class="">
					<div class="mb-4 relative pt-[70%]">
						<img class="absolute inset-0 object-cover" src={feat.image} alt={feat.imageAlt}>
					</div>
					<h2>{feat.title}</h2>
					<p>{@html feat.intro}</p>
					{#if feat.link}
						<p><a href={feat.link}>Read more &gt;</a></p>
					{/if}
				 </div>
			{/each}
		</div>
	</div>
</section>