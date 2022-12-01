<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Expand Contractions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Expand all contractions to their formal equivalents.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import expandContractions from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-expand-contractions@esm/index.mjs';
```

#### expandContractions( str )

Expands all contractions to their formal equivalents.

```javascript
var str = 'I won\'t be able to get y\'all out of this one.';
var out = expandContractions( str );
// returns 'I will not be able to get you all out of this one.'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This expansion is done via a simple table look-up. Hence, it will not correctly replace contractions for which there are multiple possible expansions such as `"She'd"`, which can be expanded to both `"She would"` or `"She had"`. In such cases, the package expands to a chosen default, in the given example `"She would"`. Should you desire higher accuracy, consider using a fully-fledged NLP disambiguation algorithm for English contractions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import expandContractions from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-expand-contractions@esm/index.mjs';

var str = 'I won\'t be able to, sorry.';
var out = expandContractions( str );
// returns 'I will not be able to, sorry.'

str = 'She\'ll be coming around the mountain...';
out = expandContractions( str );
// returns 'She will be coming around the mountain...'

str = 'Y\'all\'d be surprised if you know what I\'ll do.';
out = expandContractions( str );
// returns 'You all would be surprised if you know what I will do.'

str = 'Y\'all\'d\'ve come to the park if y\'all could\'ve, right?';
out = expandContractions( str );
// returns 'You all would have come to the park if you all could have, right?'

str = 'If Parker hadn\'t been sent off for a foul, they\'d\'ve won.';
out = expandContractions( str );
// returns 'If Parker had not been sent off for a foul, they would have won.'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/nlp-expand-contractions.svg
[npm-url]: https://npmjs.org/package/@stdlib/nlp-expand-contractions

[test-image]: https://github.com/stdlib-js/nlp-expand-contractions/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/nlp-expand-contractions/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/nlp-expand-contractions/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/nlp-expand-contractions?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/nlp-expand-contractions.svg
[dependencies-url]: https://david-dm.org/stdlib-js/nlp-expand-contractions/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/nlp-expand-contractions/tree/deno
[umd-url]: https://github.com/stdlib-js/nlp-expand-contractions/tree/umd
[esm-url]: https://github.com/stdlib-js/nlp-expand-contractions/tree/esm
[branches-url]: https://github.com/stdlib-js/nlp-expand-contractions/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/nlp-expand-contractions/main/LICENSE

</section>

<!-- /.links -->
