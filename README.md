# svelte-simple-nav

Simple responsive navigation bar, with sliding sidepanel, for Svelte.

## Features

- Reactive with single break point for mobile/desktop
- Comes with pre-packaged layouts and anchoring styles
- Allows customisation of colours, height, the break point and other key parameters
- Uses slots for cleaner implementation (no need to pass through an array of data objects)

It is *simple* in the sense that:
- It does not handle nested lists / large navigation menus
- It is fairly opinionated so that it can be setup easily without many (or any) required properties

## Installation

```shell
npm install svelte-simple-nav
```

## Quick Start

```js
<script>
    import { Nav } from "svelte-simple-nav"
</script>

<Nav>
    <a href="/" slot="logo">Logo</a>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</Nav>
```

## TODO
- Make sidepanel min-width a directly tuneable parameter
- Clarify and implement optimal markup for accessibilty
- Expose desktop media query to allow more external customisation