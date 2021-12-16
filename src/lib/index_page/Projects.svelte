<script>
	export let projects;
	console.log(projects)
</script>

<div class="container">
	<div class="row">
		<h2>Projects</h2>
	</div>
	<div class="row">
		{#each projects as project}
		<div class="img-card">
			<div class="img-card--content">
				<h5>{project.metadata.title}</h5>
				{#each project.metadata.tags as tag}
				<button class="btn btn-primary">{tag}</button>
				{/each}
			</div>
			<img src="{project.metadata.lead_image}" alt="{project.metadata.title} project cover" />
		</div>
		{/each}
	</div>
</div>
