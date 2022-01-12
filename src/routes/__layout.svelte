<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import FooterIndex from '$lib/footers/FooterIndex.svelte';
	import FooterOther from '$lib/footers/FooterOther.svelte';

	import {page} from '$app/stores';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	{#if $page.path == "/"}
	<FooterIndex />
	{:else}
	<FooterOther />
	{/if}
</footer>

<style>
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
