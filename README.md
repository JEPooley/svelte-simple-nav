# svelte-simple-nav

Simple responsive navigation bar, with sliding sidepanel, for Svelte.

## Features

- Reactive with single break point for mobile/desktop
- Comes with pre-packaged layouts and anchoring styles
- Allows customisation of colours, height, the break point and other key parameters
- Uses slots for cleaner implementation (no need to pass through an array of data objects)

It is simple in the sense that:
- It does not handle nested lists / large navigation menus
- It is fairly opinionated so that it can be setup easily without many (or any) required properties

## Installation

```shell
npm install svelte-simple-nav
```

## Quick Start

```svelte
<script>
    import Nav from "svelte-simple-nav"
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

- `background` (string): sets the background of the nav bar (takes the same input as css background)

- `color` (string): sets the default color of `<a></a>` tags (which are also exposed to the user if additional styling is required)

- `minHeight` (string): sets the min-height of the nav bar, which will otherwise grow to fit whatever you put in it

- `maxWidth` (string): sets the width of the content within the nav bar (defaults to `960px`)

<br> 

- `anchor` (string): sets where the nav bar is positioned on the page and how it interacts with other elements. The options are:
    - `"absolute"` - placed at the top of the page
    - `"fixed-top"` - fixed to the top of the browser window, even on scroll
    - `"fixed-bottom"` - fixed to the bottom of the browser window, even on scroll
    - `"static"` - fits into its parent element

<br> 

- `layout` (string): sets how the elements within the navbar are positioned. The options are:
    - `"center"` - Logo and links are all centered
    - `"spaced"` - Logo snaps to the left hand side, nav links snap to the right
    - `"spaced-reverse"` - Logo snaps to the right hand side, nav links snap to the left
    - `"left"` - Logo and links all snap to the left
    - `"right"` - Logo and links all snap to the right

<br> 

- `shadow` (bool): sets whether to add shadow to nav bar (set to `false`, for example, if the nav background is transparent)

- `mobileBreak` (string): sets the breakpoint for displaying the desktop or mobile nav bar. If you have lots of links, you might need to make the break point earlier. Conversely, if you only have a couple of links, you might be able to avoid the dreaded hamburger altogether :smile: 

- `sidepanelBackground` (string): sets the background colour for the sliding sidepanel (in mobile view)

- `sidepanelColor` (string): sets the text colour for the sliding sidepanel (in mobile view)

## TODO
- Make sidepanel min-width a directly tuneable parameter
- Clarify and implement optimal markup for accessibilty
- Expose desktop media query to allow more external customisation