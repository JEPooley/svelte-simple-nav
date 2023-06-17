<script lang="ts">
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</svelte:head>

<Nav maxWidth="800px" anchor="fixed-bottom">
	<a slot="logo" href="/">Logo</a>
	<a href="#" aria-current="page">Home</a>
	<a href="#">Login</a>
	<a href="#">Register</a>
</Nav>

<main>
	<h1>svelte-simple-nav</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>

<style>
	:global(html),
	:global(body) {
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	:global(body) {
		box-sizing: border-box;
		padding: 45px 20px;
		max-width: 800px;
		margin: 0 auto;
	}
</style>
