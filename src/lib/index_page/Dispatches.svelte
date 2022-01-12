<script>
	export let posts;
</script>

<div class="container vh-90">
	<h2 class="mb-3">Dispatches</h2>
	<div class="row">
		<div class="col-6">
			{#each posts.slice(0, 2) as post, i}
				<a href="dispatches/{post.slug}">
				<div class="row d-flex justify-content-between">
					<div class="col-8">
						<h3>{post.metadata.title}</h3>
					</div>
					<div class="col-4 meta d-flex justify-content-end">
						{post.metadata.date}
					</div>
					{#if i == 0 }
						<div>
							{@html post.content + "..."}
						</div>
					{:else}
						<div>
							{@html post.content.slice(0, 200)}
						</div>
					{/if}
				</div>
				</a>
			{/each}
		</div>
		<div class="col-6">
		{#each posts.slice(2, 5) as post}
			<div class="row d-flex justify-content-between">
				<div class="col-8">
					<h3>{post.metadata.title}</h3>
				</div>
				<div class="col-4 meta d-flex justify-content-end">
					{post.metadata.date}
				</div>
				<div>
					{@html post.content.slice(0, 200) + "..."}
				</div>
			</div>
		{/each}
		</div>

	</div>
</div>
