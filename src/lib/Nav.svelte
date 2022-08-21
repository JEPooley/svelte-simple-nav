<script lang="ts">
	// Imports
	import { getAnchorStyle } from './anchor.js';
	import { getLayoutStyle } from './layout.js';
	import type { Anchor } from './anchor.js';
	import type { Layout } from './layout.js';
	import { useMediaQuery } from './useMediaQuery';
	import { onMount } from 'svelte';
	import type { Readable } from 'svelte/store';
	import OpenMenuIcon from './OpenMenuIcon.svelte';
	import CloseMenuIcon from './CloseMenuIcon.svelte';

	// Props
	export let minHeight: string = '50px';
	export let maxWidth: string = '1366px';
	export let background: string = 'linear-gradient(90deg, #FF3E00 0%, #FF4D00 100%);';
	export let color: string = '#ffffff';
	export let anchor: Anchor = 'absolute';
	export let layout: Layout = 'spaced';
	export let shadow: boolean = true;
	export let mobileBreak: string = '400px';

	// Init
	let open = false;
	const anchorStyle: string = getAnchorStyle(anchor);
	const layoutStyle: string = getLayoutStyle(layout);
	const shadowStyle: string = shadow ? '0 2px 4px rgba(0, 0, 0, 0.25);' : '';

	// Construct Styles
	const navbarOuterStyle: string =
		`min-height: ${minHeight};` +
		`background: ${background};` +
		`color: ${color};` +
		anchorStyle +
		`box-shadow: ${shadowStyle};`;
	const navbarInnerStyle: string = `max-width: ${maxWidth};` + layoutStyle;

	// Media Query
	let desktop: boolean = true;

	onMount(() => {
		const desktopQuery: Readable<boolean> = useMediaQuery(`(min-width: ${mobileBreak})`);
		desktopQuery.subscribe((value: boolean) => {
			desktop = value;
		});
	});
</script>

<div class="navbar-outer" style={navbarOuterStyle} class:desktop>
	<div class="navbar-inner" style={navbarInnerStyle}>
		<div class="logo">
			<slot name="logo" />
		</div>
		<nav
			aria-label="Main Navigation"
			role="menu"
			class:open
			class={desktop ? 'desktop-nav' : 'mobile-nav'}
		>
			<button
				style="width: 40px; height: 40px;"
				id="menu-close"
				on:click={() => {
					open = false;
				}}><CloseMenuIcon /></button
			>
			<slot />
		</nav>
		<button
			on:click={() => {
				open = true;
			}}
			aria-haspopup="menu"
			type="button"
			aria-pressed={open}
		>
			<OpenMenuIcon {color} />
		</button>
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

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.mobile-nav {
		width: 90vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: -90vw;
		background: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		transition: left 0.4s ease-in-out;
	}

	.mobile-nav.open {
		left: 0;
	}

	.navbar-outer :global(a) {
		color: inherit;
	}

	.logo {
		margin: 0 10px;
	}

	.desktop {
		background: yellowgreen !important;
	}

	button {
		background: transparent;
		border: none;
	}
</style>
