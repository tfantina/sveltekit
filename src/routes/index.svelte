<script context="module">
	export const ssr = false;
	export const prerender = true;
	export async function load({ fetch, page }) {
		const res = await fetch(`/dispatches/dispatches.json?length=5`);
		const projects = await fetch('/projects/projects.json');

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
	import { onMount } from 'svelte';
	import About from '$lib/index_page/About.svelte';
	import Projects from '$lib/index_page/Projects.svelte';
	import Dispatches from '$lib/index_page/Dispatches.svelte';
	import Contact from '$lib/index_page/Contact.svelte';
	import { gsap } from 'gsap';
	import ScrollMagic from 'scrollmagic';
	import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

	onMount(() => {
		const updatePercentage = () => {
			tl.progress();
		};

		ScrollMagicPluginGsap(ScrollMagic, gsap);
		let tl = gsap.timeline({ onUpdate: updatePercentage });
		let tl2 = gsap;

		tl.add('hero')
			.to('#fern', 1, { opacity: 0, scale: 1.5 }, 'hero')
			.to('h1', 1.2, { opacity: 0, scale: 1.2 }, 'hero')
			.to('.intro-heading', 1.5, { opacity: 0, scale: 1.3 }, 'hero');
		const controller = new ScrollMagic.Controller();

		const scene = new ScrollMagic.Scene({
			triggerElement: '.intro',
			triggerHook: 'onLeave',
			duration: '110%'
		})
			.setPin('.intro')
			.setTween(tl)
			.addTo(controller);
	});

	export let posts, projects;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="holder">
	<img src="images/jungle.jpg" id="fern" alt="Hero Background: Ferns" />
	<h1 class="d-flex justify-content-center" id="title">Travis Fantina</h1>
	<h2 class="intro-heading">
		development & designs
		<br />
		a repository of projects and writings
	</h2>
</div>

<div class="intro">
	<About />
	<Projects {projects} />

	<Dispatches {posts} />
	<Contact />
</div>

<style>
	.intro {
		min-height: 100vh;
		width: 100vw;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 50;
	}

	.holder {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 100;
	}

	.page {
		position: absolute;
	}

	h1 {
		position: fixed;
		z-index: 100;
		height: 240px;
		color: var(--main-heading);
	}

	h2.intro-heading {
		position: fixed;
		font-size: 1rem;
		color: var(--main-heading);
		text-align: center;
		line-height: 3rem;
		z-index: 100;
	}

	#fern {
		background-size: cover;
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
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
		top: 0;
		left: 0;
		min-height: 100vh;
	}

	.scroller {
	}
</style>
