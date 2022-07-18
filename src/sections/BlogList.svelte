<script>
  import { onMount } from 'svelte';

  export let section
  export let posts = []

	onMount(async () => {
		const res = await fetch(`/api/posts.json`);
		posts = await res.json();
	});
</script>

<section class="blog-list">
  <div>{@html section.intro}</div>
  <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {#each posts as post}
        <div>
          <div class="mb-4"><a href={post.url}><img width="100%" height="25%" class="object-cover w-full h-[25%]" src={post.thumbnail} loading="lazy" alt={post.title} /></a></div>
          <h2 class='mb-2'><a href={post.url}>{post.title}</a></h2>
          <h3 class='text-gray-400 text-xs'>{post.date}</h3>
          <p>{@html post.excerpt}</p>
          <p>
            <a href={post.url}>Read more</a>
          </p>
        </div>
    {/each}

  </div>
</section>