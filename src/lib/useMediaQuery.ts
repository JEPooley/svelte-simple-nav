// Credit: https://medium.com/@ricciutipaolo/how-to-check-for-media-queries-in-svelte-with-usemediaquery-604f14190035
import { readable, type Readable } from 'svelte/store';

export const useMediaQuery = (mediaQueryString: string): Readable<boolean> => {
    const matches = readable(true, (set) => {
        const mql = window.matchMedia(mediaQueryString);
        set(mql.matches);
        const el = (e: MediaQueryListEvent) => set(e.matches);
        mql.addEventListener("change", el);
        return () => { mql.removeEventListener("change", el) };
    });
    return matches;
}
