Example
===========
All loaders may be previewed at:

http://samherbert.net/svg-loaders

**NOTE:** These loaders were originally built to only use SMIL animations; however, all animations have been updated with CSS animations. Since Chrome 45, the use of SMIL animations have been [deprecated](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/5o0yiO440LM/59rZqirUQNwJ) in Chrome browsers.

The SMIL versions are still in included in this repo, but it is recommended to use the CSS version of a loader if you're planning on using it in a web browser.

Usage
===========
[Download](https://github.com/SamHerbert/SVG-Loaders/archive/master.zip) or `bower install svg-loaders`

```html
<img src="svg-css-loaders/puff.svg" />
```

An icon's color can be manipulated by changing the `fill` or `stroke` value in the CSS block of the SVG file.

```
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <style type="text/css">
  <![CDATA[
    circle {
      stroke: #fff;
      stroke-width: 3;
    }
  ]]>
  </style>
[...]
```

**Note:** Not all browsers support SVG, or more specifically, animated SVGs. Check (http://caniuse.com/#feat=svg-smil) to make sure you're good to go. If not, you may want to implement a fallback.

Minify
===========
All SVG files are fairly small in size, but you can make them even smaller by minifying with something like [SVGO](https://github.com/svg/svgo).
