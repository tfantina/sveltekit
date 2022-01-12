<script context="module">
	export const prerender = true;
	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		const post = await fetch(`/dispatches/${slug}.json`).then((r) => r.json());
		return {
			props: { post }
		};
	}
</script>

<script>
	export let post;

		const altText = () => {
			if(post.metadata.alt_text) {
				return post.metadata.alt_text
			} else {
				return `Blog Photo for ${post.metadata.title}`;
			}

		}
</script>

<!--show the post html with @html-->
<div class="container gx-5">
	<div class="row d-flex">
		<div class="col-9">
			<h1>{post.metadata.title}</h1>
		</div>
		<div class="col-3 d-flex justify-content-end align-items-end">
			<div class="meta">{post.metadata.date}</div>
		</div>
	</div>
	<div class="row post-content">
		{#if post.metadata.lead_image }
			<div class="post-photo">
				<img src="{post.metadata.lead_image}" alt="{altText()}" />
			</div>
			{@html post.content}
		{:else}
			{@html post.content}
		{/if}
	</div>
</div>
