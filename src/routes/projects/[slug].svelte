<script context="module">
	export const prerender = true;
	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		const project = await fetch(`/projects/${slug}.json`).then((r) => r.json());
		return {
			props: { project }
		};
	}
</script>

<script>
	export let project;

		const altText = () => {
			if(project.metadata.alt_text) {
				return project.metadata.alt_text
			} else {
				return `Blog Photo for ${project.metadata.title}`;
			}

		}
</script>

<!--show the project html with @html-->
<div class="container gx-5">
	<div class="row d-flex">
		<h1>{project.metadata.title}</h1>
	</div>
</div>

	<div class="container d-flex post-content">
		{#each project.metadata.image_bank as image}
			<div class="post-photo">
				<img src="{image}" alt="{altText()}" />
			</div>
		{/each}
	</div>

			{@html project.content}
