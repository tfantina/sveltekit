<script context="module">
	export const prerender = true;
	export async function load({ fetch, page }) {
		const res = await fetch(`/dispatches/dispatches.json?length=5`);
		const projects = await fetch('/projects/projects.json');
		console.log(res);
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

	let scrolly, height, background_scroll;
	const ONE = 1;
	let opacity = ONE;
	let scroller_value = .5;

	export let posts, projects;

	const scroller = () => {
		scroller_value = scrolly/height
		opacity = (ONE) - scroller_value
		if(scrolly > height - 30){
			background_scroll = "overflow: absolute"

		} else {
			background_scroll =  "position: fixed"
		}
	}

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<svelte:window bind:scrollY={scrolly} bind:innerHeight={height} on:scroll={scroller}/>


<div class="intro-container">
	<div class="intro">
		<h1 class="d-flex justify-content-center" style="opacity: {opacity}; transform: scale({1 * 1.8 + scroller_value})">Travis Fantina</h1>
		<h2 class="intro-heading" style="opacity: {opacity}; transform: scale({1 * 1.2 + scroller_value})">
			development & designs
			<br />
			a repository of projects and writings
		</h2>
		<div class="image" style="opacity: {opacity}; transform: scale({1 * 1 + scroller_value})" />
	</div>
</div>

<div class="bg-page" />
<div class="scroller" style={background_scroll}>
	<About />
	<Projects  {projects} />
	<Dispatches {posts} />
</div>

<style>
	section {
		height: 100vh;
		margin-bottom: 100vh;
	}

	.intro-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		color: var(--main-heading);
	}

	.intro {
		position: relative;
		height: 200vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

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
		position: absolute;
		height: 200vh;
		width: 100vw;
		left: 0;
		top: 0;
		bottom: 0;

	}

	.scroller {
	}
</style>
