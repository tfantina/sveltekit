<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import 'bootstrap/dist/css/bootstrap.css';

	import Scroller from '@sveltejs/svelte-scroller';

	let index, offset, progress;
</script>

<Scroller top={0.2} bottom={5} bind:index bind:offset bind:progress>
	<div slot="background">
		<Header />

		<main>
			<slot />
		</main>

		<footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer>
	</div>

	<div slot="foreground">
		<img src="/images/fern-bg.png" class="photo" />
	</div>
</Scroller>

<style>
	.photo {
		object-fit: cover;
		top: 10;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
