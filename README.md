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

## Options

Here is a list of the parameters that you can use to change the look and feel of the `<Nav />` component:

- `background`: sets the background of the nav bar (takes the same input as css background)

- `color`: sets the default color of `<a></a>` tags (which are also exposed to the user if additional styling is required)

- `minHeight`: sets the min-height of the nav bar, which will otherwise grow to fit whatever you put in it

- `maxWidth`: sets the width of the content within the nav bar (defaults to `960px`)

- `anchor`: sets where the nav bar is positioned on the page and how it interacts with other elements. The options are:
    - `"absolute"` - placed at the top of the page
    - `"fixed-top"` - fixed to the top of the browser window, even on scroll
    - `"fixed-bottom"` - fixed to the bottom of the browser window, even on scroll
    - `"static"` - fits into its parent element

- `layout`: sets how the elements within the navbar are positioned. The options are:
    - `"absolute"` - placed at the top of the page
    - `"fixed-top"` - fixed to the top of the browser window, even on scroll
    - `"fixed-bottom"` - fixed to the bottom of the browser window, even on scroll
    - `"static"` - fits into its parent element


## TODO
- Make sidepanel min-width a directly tuneable parameter
- Clarify and implement optimal markup for accessibilty
- Expose desktop media query to allow more external customisation