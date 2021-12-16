<script context="module">
	export const prerender = true;
	export async function load({ fetch, page }) {
		const res = await fetch(`/blog/blog.json?length=5`);
		const projects = await fetch('/projects/projects.json');

		console.log(projects);
		if (res.ok && projects.ok) {
			return {
				props: {
					posts: await res.json(),
					projects: await projects.json()
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
	import About from '$lib/index_page/About.svelte';
	import Projects from '$lib/index_page/Projects.svelte';
	import Dispatches from '$lib/index_page/Dispatches.svelte';
	import Scroller from '@sveltejs/svelte-scroller';

	let count, index, offset, progress;

	export let posts, projects;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="page">
	<Scroller top={0.0} bottom={0.3} threshold={0} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			PROGRESS: {progress}
			offset: {offset}
			index: {index}
		</div>
		<div slot="foreground">
			<section />
		</div>
	</Scroller>
	<div class="intro">
		<h1 style="opacity: {1 - progress}; transform: scale({1 * 1.1 + offset})">Travis Fantina</h1>
		<h2 class="intro-heading" style="opacity: {1 - progress}; transform: scale({1 * 1.1 + offset})">
			development & designs
			<br />
			a repository of projects and writings
		</h2>
		<div class="image" style="opacity: {1 - progress}; transform: scale({1 * 1 + offset})" />
	</div>
</div>

<div class="bg-page" />
<About />
<Projects  {projects} />
<Dispatches {posts} />

<style>
	[slot='background'] {
		height: 100vh;
	}

	section {
		height: 100vh;
		margin-bottom: 100vh;
	}

	.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		margin-bottom: 100vh;
		color: var(--main-heading);
	}

	h1 {
		position: fixed;
		z-index: 100;
		height: 240px;
	}

	h2.intro-heading {
		position: fixed;
		font-size: 1rem;
		color: var(--main-heading);
		text-align: center;
		line-height: 3rem;
		z-index: 100;
	}

	.image {
		background-image: url('/images/fern-bg.png');
		background-size: cover;
		height: 100vh;
		width: 100vw;
		margin-bottom: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}

	h1 {
		width: 100%;
	}

	h2 {
		color: var(--secondary-color);
	}

	.page {
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
	}

	.bg-page {
		height: 100vh;
	}
</style>
