export type Anchor = 'fixed-top' | 'fixed-bottom' | 'absolute' | 'static';

export function getAnchorStyle(anchor: Anchor): string {
    let anchorStyle = '';
    switch (anchor) {
        case 'absolute':
            anchorStyle = 'position: absolute; top: 0; left: 0;';
            break;
        case 'fixed-top':
            anchorStyle = 'position: fixed; top: 0; left: 0;';
            break;
        case 'fixed-bottom':
            anchorStyle = 'position: fixed; bottom: 0; left: 0;';
    }
    return anchorStyle
}
