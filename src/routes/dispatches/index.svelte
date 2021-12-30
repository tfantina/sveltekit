<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`/blog/blog.json`);
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
</script>

<svelte:head>
	<title>test</title>
</svelte:head>
