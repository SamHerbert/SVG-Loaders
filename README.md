Example
===========
All loaders may be previewed at:

http://samherbert.net/svg-loaders

NOTE: Chrome 45 intended to deprecate SMIL icons but has since [suspended](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5o0yiO440LM%5B126-150%5D) that deprecation.

Usage
===========
[Download](https://github.com/SamHerbert/SVG-Loaders/archive/master.zip) or `bower install svg-loaders`

```html
<img src="svg-loaders/puff.svg" />
```

An icon's color can be manipulated by changing the `fill` attribute in the SVG file.

```
<svg fill="#fff" width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg">
```

Note: Not all browsers support SVG, or more specifically, animated SVGs. Check (http://caniuse.com/#feat=svg-smil) to make sure you're good to go. If not, you may want to implement a fallback.

Minify
===========
All SVG files are fairly small in size, but you can make them even smaller by minifying with something like [SVGO](https://github.com/svg/svgo).

Adaptations
===========

[React components by ajwann](https://github.com/ajwann/svg-loaders-react)

