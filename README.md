# freezeframe-lite

[![NPM Install Size][install-size-image]][install-size-url]

A version of `freezeframe.js`, in a 75% smaller bundle (16 KB vs 66 KB) and with fewer features. Motivated by a [feature request](https://github.com/lbryio/lbry-desktop/pull/2986) during Hacktoberfest 2019.

[React Codesandbox Demo](https://codesandbox.io/s/peaceful-kapitsa-o0i6z?fontsize=14)

### Supported

- Animate a single GIF when hovered over.
  - Achieves this by overlaying the GIF with a canvas populated an image of the first frame.
- A hooks-based React wrapper
  - TODO: tear down event listeners when component is unmounted

### Not Supported

Features intentionally removed from the main `freezeframe.js` library for smaller size

- Support putting multiple images inside parent element
- Validate that all pictures are GIFs
- Manually triggering image start/stop without actual hovering
- Trigger animation via click instead of hover
- No overlays or play icons

## Installation

```bash
yarn add freezeframe-lite
npm install freezeframe-lite
```

By default, an ES6 module is exported.

```js
// import ES6 Module
import FreezeframeLite from 'freezeframe-lite';

// Import non-ES6 Module
import FreezeframeLite from 'freezeframe-lite/dist/freezeframe-lite.min';

// React Wrapper
import FreezeframeWrapper from 'freezeframe-lite/examples/FreezeframeWrapper';
```

## Development

1. Clone repository
2. `yarn install`
3. Modify contents of `src/` folder



[install-size-image]: https://img.shields.io/bundlephobia/min/freezeframe-lite
[install-size-url]: https://bundlephobia.com/result?p=freezeframe-lite
