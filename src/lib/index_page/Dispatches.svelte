<script>
	export let posts;
</script>

<div class="container">
	<div class="row">
		<div class="col-6">
			<h2>Dispatches</h2>
			{#each posts as post}
				<div class="row d-flex justify-content-between">
					<div class="">
						<h3>{post.metadata.title}</h3>
					</div>
					<div>{post.metadata.date}</div>
				</div>
			{/each}
		</div>
		<div class="col-6" />
	</div>
</div>
