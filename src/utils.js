// Modified from
// https://github.com/ctrl-freaks/freezeframe.js/tree/master/packages/freezeframe/src

export const isTouch = () => {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

// Create div with
export const htmlToNode = html => {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html;
  const $content = $wrap.childNodes;
  return $content.length > 1 ? $content : $content[0];
};

// Adds "wrapper" to the dom, with "element" as its child.
export const wrapNode = ($el, $wrapper) => {
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};
