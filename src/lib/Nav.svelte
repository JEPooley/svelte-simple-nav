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
	export let sidepanelBackground: string = 'white';
	export let sidepanelColor: string = 'rgb(20, 20, 20)';

	// Init
	let open = false;
	const anchorStyle: string = getAnchorStyle(anchor);
	const layoutStyle: string = getLayoutStyle(layout);
	const shadowStyle: string = shadow ? '0 2px 4px rgba(0, 0, 0, 0.25);' : '';
	let navbarInnerStyle: string;
	const navbarOuterStyle: string =
		`min-height: ${minHeight};` +
		`background: ${background};` +
		`color: ${color};` +
		anchorStyle +
		`box-shadow: ${shadowStyle};`;

	// Media Query
	let desktop: boolean = true;

	onMount(() => {
		if (mobileBreak) {
			const desktopQuery: Readable<boolean> = useMediaQuery(`(min-width: ${mobileBreak})`);
			desktopQuery.subscribe((value: boolean) => {
				desktop = value;
				open = false;
			});
		}
	});

	$: if (desktop) {
		navbarInnerStyle = `max-width: ${maxWidth};` + layoutStyle;
	} else {
		navbarInnerStyle = `max-width: ${maxWidth};` + 'justify-content: space-between;';
	}
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
			style="--background: {sidepanelBackground}; --color: {sidepanelColor}"
		>
			{#if !desktop}
				<button
					style="width: 40px; height: 40px;"
					id="menu-close"
					on:click={() => {
						open = false;
					}}><CloseMenuIcon color={sidepanelColor} /></button
				>
			{/if}
			<div>
				<slot />
			</div>
		</nav>
		{#if !desktop}
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
		{/if}
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
		width: 230px;
		height: 100vh;
		position: fixed;
		top: 0;
		left: -270px;
		background: var(--background);
		color: var(--color);
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
		transition: left 0.4s ease-in-out;
	}

	.mobile-nav.open {
		left: 0;
	}

	.mobile-nav > div {
		display: flex;
		flex-direction: column;
	}

	.mobile-nav :global(a) {
		width: 100%;
		text-align: center;
		padding: 10px 0;
	}

	.navbar-outer :global(a) {
		color: inherit;
	}

	.logo {
		margin: 0 10px;
	}

	button {
		background: transparent;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
