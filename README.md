# freezeframe-lite

A version of `freezeframe.js` with fewer features, wrapped in a smaller bundle (X vs 66 KB).

### Supported

- Animate a single GIF when it is hovered over.
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
yarn add freezeframe-lite
```

## Development

1. Clone repository
2. `yarn install`
3. Modify contents of `src/` folder

## TODO

- Add bundler
- Add license
- Publish to NPM
- If this ends up being a project I update, use `np` or `auto` for versioning
  - https://zellwk.com/blog/publish-to-npm/
  - https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/
