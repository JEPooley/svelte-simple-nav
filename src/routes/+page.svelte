<script lang="ts">
	import Nav from '$lib/Nav.svelte';
</script>

<Nav anchor="fixed-top" layout="spaced">
	<h4 slot="logo" style="margin: 0;">Logo</h4>
	<a href="#" aria-current="page">Home</a>
	<a href="#">Login</a>
	<a href="#">Register</a>
</Nav>

<main>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	:global(body) {
		box-sizing: border-box;
		padding: 40px 20px;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
