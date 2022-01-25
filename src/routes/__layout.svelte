<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	import FooterIndex from '$lib/footers/FooterIndex.svelte';
	import FooterOther from '$lib/footers/FooterOther.svelte';

	import {page} from '$app/stores';
</script>

<div class="page-holder">
	<div class="height">
<main>
	<slot />
</main>
</div>
<footer>
	{#if $page.path == "/"}
	<FooterIndex />
	{:else}
	<FooterOther />
	{/if}
</footer>
</div>

<style>

	.page-holder {
		display:  grid;
		grid-template-rows: max-content;
	}

	.height {
		height: 440vh;
	}

	footer {
		grid-row: 5;
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
