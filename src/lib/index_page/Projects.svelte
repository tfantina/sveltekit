<script>
	export let projects;
	console.log(projects)
</script>

<div class="container vh-90">
	<div class="row">
		<h2>Projects</h2>
	</div>
	<div class="row">
		{#each projects as project}
		<a href="/projects/{project.metadata.slug}">
			<div class="img-card">
				<div class="img-card--content">
					<div class="project-name">
						<h5>{project.metadata.title}</h5>
					</div>
					<div class="tags">
					{#each project.metadata.tags as tag}
					<a link class="btn btn-primary" href="/projects?tag={tag}">{tag}</a>
					{/each}
					</div>
				</div>
				<img src="{project.metadata.lead_image}" alt="{project.metadata.title} project cover" />
			</div>
		</a>
		{/each}
	</div>
</div>
