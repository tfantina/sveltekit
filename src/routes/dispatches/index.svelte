<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`/dispatches/dispatches.json`);
		console.log(res);
		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Small problem')
		};
	}
</script>

<script>
	export let posts;

	const altText = (post) => {
		if(post.metadata.alt_text) {
			return post.metadata.alt_text
		} else {
			return `Blog Photo for ${post.metadata.title}`;
		}
	}
</script>

<svelte:head>
	<title>test</title>
</svelte:head>

<div class="container">
	{#each posts as post}
		<div class="row d-flex">
			<div class="col-9">
				<h2>{post.metadata.title}</h2>
			</div>
			<div class="col-3 d-flex justify-content-end align-items-end">
				<div class="meta">{post.metadata.date}</div>
			</div>
		</div>
		<div class="row post-content">
			{#if post.metadata.lead_image }
				<div class="post-photo">
					<img src="{post.metadata.lead_image}" alt="{altText(post)}" />
				</div>
				{@html post.content}
			{:else}
				{@html post.content}
			{/if}
		</div>
	{/each}
</div>
