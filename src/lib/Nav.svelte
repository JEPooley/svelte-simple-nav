<script lang="ts">
	// Types
	type Anchor = 'fixed-top' | 'fixed-bottom' | 'absolute' | 'static';
	type Layout = 'center' | 'spaced' | 'spaced-reverse' | 'left' | 'right';

	// Props
	export let minHeight: string = '50px';
	export let maxWidth: string = '960px';
	export let background: string = '#ff3e00';
	export let color: string = '#ffffff';
	export let anchor: Anchor = 'absolute';
	export let layout: Layout = 'spaced';

	// Init
	let anchorStyle: string = '';
	$: switch (anchor) {
		case 'absolute':
			anchorStyle = 'position: absolute; top: 0; left: 0;';
			break;
		case 'fixed-top':
			anchorStyle = 'position: fixed; top: 0; left: 0;';
			break;
		case 'fixed-bottom':
			anchorStyle = 'position: fixed; bottom: 0; left: 0;';
	}

	let layoutStyle: string = '';
	$: switch (layout) {
		case 'center':
			layoutStyle = 'justify-content: center;';
			break;
		case 'spaced':
			layoutStyle = 'justify-content: space-between;';
			break;
		case 'spaced-reverse':
			layoutStyle = 'justify-content: space-between; flex-direction: row-reverse;';
			break;
		case 'left':
			layoutStyle = 'justify-content: left;';
			break;
		case 'right':
			layoutStyle = 'justify-content: right;';
			break;
	}
</script>

<div
	class="navbar-outer"
	style="min-height: {minHeight}; background: {background}; color: {color}; {anchorStyle}"
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
		max-width: 800px;
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
