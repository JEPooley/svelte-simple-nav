export type Layout = 'center' | 'spaced' | 'spaced-reverse' | 'left' | 'right';

export function getLayoutStyle(layout: Layout): string {
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
    return layoutStyle
}
