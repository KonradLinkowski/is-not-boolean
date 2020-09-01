# is-not-boolean <sup>[![Version Badge][2]][1]</sup>

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][3]][1]

Is this value not a JS Boolean? This module works cross-realm/iframe, and despite ES6 @@toStringTag.

I made this just for fun. Don't be mad.

## Example

```js
// with jasmine
expect(isNotBoolean(new Boolean(42))).toBeFalsy()
expect(isNotBoolean(false)).toBeFalsy()
expect(isNotBoolean(Object(false))).toBeFalsy()
expect(isNotBoolean(true)).toBeFalsy()
expect(isNotBoolean(Object(true))).toBeFalsy()

expect(isNotBoolean(undefined)).toBeTruthy()
expect(isNotBoolean(null)).toBeTruthy()
expect(isNotBoolean('foo')).toBeTruthy()
expect(isNotBoolean(function () {})).toBeTruthy()
expect(isNotBoolean([])).toBeTruthy()
expect(isNotBoolean({})).toBeTruthy()
expect(isNotBoolean(/a/g)).toBeTruthy()
expect(isNotBoolean(new RegExp('a', 'g'))).toBeTruthy()
expect(isNotBoolean(new Date())).toBeTruthy()
expect(isNotBoolean(42)).toBeTruthy()
expect(isNotBoolean(NaN)).toBeTruthy()
expect(isNotBoolean(Infinity)).toBeTruthy()
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-not-boolean
[2]: http://versionbadg.es/KonradLinkowski/is-not-boolean.svg
[3]: https://nodei.co/npm/is-not-boolean.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/is-not-boolean.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/is-not-boolean.svg
[downloads-url]: http://npm-stat.com/charts.html?package=is-not-boolean