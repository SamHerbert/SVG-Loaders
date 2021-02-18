Example
===========
All loaders may be previewed at:

http://samherbert.net/svg-loaders

_Notes:_\
_Chrome 45 intended to deprecate SMIL icons but has since [suspended](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5o0yiO440LM%5B126-150%5D) that deprecation.\
As of Jan 15, 2020, all web browsers[*](http://caniuse.com/#feat=svg-smil) support SVG, or more specifically, animated SVGs._

Usage
===========
[Download](https://github.com/SamHerbert/SVG-Loaders/archive/master.zip) or `bower install svg-loaders`

```html
<img src="svg-loaders/puff.svg" />
```

An icon's color can be manipulated by changing the `fill` attribute in the SVG file.

```html
<svg fill="#fff" width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg">
```

Minify
===========
All SVG files are fairly small in size, but you can make them even smaller by minifying with something like [SVGO](https://github.com/svg/svgo).

Adaptations
===========

```bash
npm install react-loading-icons
```
[React components by dkress (ES5 & TypeScript)](https://github.com/dkress59/react-loading-icons)
