<script lang="ts">
	// Imports
	import { getAnchorStyle } from './anchor.js';
	import { getLayoutStyle } from './layout.js';
	import type { Anchor } from './anchor.js';
	import type { Layout } from './layout.js';

	// Props
	export let minHeight: string = '50px';
	export let maxWidth: string = '1366px';
	export let background: string = '#ff3e00';
	export let color: string = '#ffffff';
	export let anchor: Anchor = 'absolute';
	export let layout: Layout = 'spaced';
	export let shadow: boolean = true;

	// Init
	$: anchorStyle = getAnchorStyle(anchor);
	$: layoutStyle = getLayoutStyle(layout);
	$: shadowStyle = shadow ? 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);' : '';
</script>

<div
	class="navbar-outer"
	style="min-height: {minHeight}; background: {background}; color: {color}; {anchorStyle}; {shadowStyle}"
>
	<div class="navbar-inner" style="max-width: {maxWidth}; {layoutStyle}">
		<div class="logo">
			<slot name="logo" />
		</div>
		<nav aria-label="Main Navigation">
			<slot />
		</nav>
	</div>
</div>

<style>
	.navbar-outer {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar-inner {
		display: flex;
		width: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.navbar-outer :global(a) {
		color: inherit;
	}

	.logo {
		margin: 0 10px;
	}
</style>
