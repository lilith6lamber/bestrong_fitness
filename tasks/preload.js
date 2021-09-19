const {
    src,
    dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function preload() {
    return src('src/preload/**.*')
        .pipe(dest('build/preload'))
        .pipe(bs.stream())
}