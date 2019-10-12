# freezeframe-lite

A version of `freezeframe.js` with fewer features, in a 75% smaller bundle (16 KB vs 66 KB).

### Supported

- Animate a single GIF when it is hovered over.
  - Achieves this by overlaying the GIF with a canvas populated an image of the first frame.
- A hooks-based React wrapper
  - TODO: tear down event listeners when component is unmounted

### Not Supported

Features intentionally removed from the main `freezeframe.js` library for more simplicity/smaller size

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

## Development

1. Clone repository
2. `yarn install`
3. Modify contents of `src/` folder

## TODO

- If this ends up being a project I update, use `np` or `auto` for versioning
  - https://zellwk.com/blog/publish-to-npm/
  - https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/
- Would like to use pika-pack, but it doesn't work because of CSS modules.
  - https://spectrum.chat/pika/general/importing-css-images~1702ebb9-85b5-4f47-8806-ad0480ee752c
