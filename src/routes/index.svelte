<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import Scroller from '@sveltejs/svelte-scroller';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>{index}</h1>
{offset}
{progress}
<div class="page" />
<h1>{index}</h1>
{offset}
{progress}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.page {
		height: 200vh;
	}

	.photo {
		object-fit: cover;
		top: 10;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 100vh;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
