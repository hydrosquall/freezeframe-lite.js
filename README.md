# freezeframe-lite

A smaller version of `freezeframe.js`, wrapped in a smaller bundle (X vs 66 KB).

## TODO

- Add bundler
- Add license
- Publish to NPM

### Supported

- Only animate a single GIF when it is being hovered over.
  - Achieves this by overlaying the GIF with a canvas populated an image of the first frame.
- A hooks-based React wrapper
  - TODO: tear down event listeners when component is unmounted

### Not Supported

Features intentionally removed from the main `freezeframe.js` library for more simplicity/smaller size reasons

- Support putting multiple images inside a parent
- Validate that all pictures are GIFs
- Manually triggering image start/stop without actual hovering
- Trigger animation via click instead of hover
- No overlays or play icons

## Installation

```bash
yarn add @hydrosquall/freezeframe-lite
```

## Development

1. Clone this repository
2. `yarn install`
3. Profit!
