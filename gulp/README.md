# GPQuery-Livery `gulp/`

### Test
### Build

## Plugins

 - [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) - creates SVG/TTF/EOT/WOFF/WOFF2 fonts from SVG icons
 - [gulp-iconfont-css](https://github.com/backflip/gulp-iconfont-css) - creates CSS/Sass/Scss file for icon font

 - [gulp-svgicons2svgfont][svgicons2svgfont] - create `svg` font from `svg` icons
 - [gulp-svg2ttf][svg2ttf] - create `ttf` font from `svg` font
 - [gulp-ttf2eot][ttf2eot] - create `eot` font from `ttf` font
 - [gulp-ttf2woff][ttf2woff] - create `woff` font from `ttf` font
 - [gulp-ttf2woff2][ttf2woff2] - create `woff2` font from `ttf` font
 
 - [gulp-svgmin][svgmin] - minify `svg` files with [SVGO](https://github.com/svg/svgo)
 - [gulp-svgstore][svgstore] - combines multiple `svg` into one with `<symbol>` elements (see [CSS Tricks article](https://css-tricks.com/svg-symbol-good-choice-icons/))
 - [gulp-svg-sprite][svgsprite] - generates `svg` sprites?

[svgicons2svgfont]:https://github.com/nfroidure/gulp-svgicons2svgfont
[svg2ttf]:https://github.com/nfroidure/gulp-svg2ttf
[ttf2eot]:https://github.com/nfroidure/gulp-ttf2eot
[ttf2woff]:https://github.com/nfroidure/gulp-ttf2woff
[ttf2woff2]:https://github.com/nfroidure/gulp-ttf2woff2
[svgmin]:https://github.com/ben-eb/gulp-svgmin
[svgstore]:https://github.com/w0rm/gulp-svgstore
[svgsprite]:https://github.com/jkphl/gulp-svg-sprite

## SVG Icon Best Practices

 - [✨A Gulp-Based External SVG Symbol Sprite Icon System | Una Kravets Online✨](https://una.im/svg-icons/#💁)
 - [Creating SVG Sprites using Gulp and Sass - Liquid Light](https://www.liquidlight.co.uk/blog/article/creating-svg-sprites-using-gulp-and-sass/)



## Tasks

### `build-fonts`

Build the font in the following file formats:
 - `eot`
 - `svg`
 - `ttf`
 - `woff`
 - `woff2`

### `build-scss`

Generate an `scss` file 
