## qcompare

### Install

npm install --save qcompare


### Usage

import qcompare from 'qcompare';

```javascript
qcompare( { foo: 1 }, { foo: 1 } ); // true
qcompare( { bar: 1 }, { bar: 2 } ); // false
```

### Features

- support for all new classes ES6;
- very quickly compares;
- correctly compares:
  - for Promise, Symbol, WeakMap, WeakSet, function - compared by reference;
  - for Map and Set - takes into account the insertion order;
  - for Map supported NaN for keys;
  - for Date supported NaN for return value;
- does not support circular objects;

### Benchmarks

For more balanced testing of performance, tests of other projects were used

Nodejs - v13.3.0
Date - 09.12.2019

[fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) project test result

```
qcompare x 260,753 ops/sec ±0.20% (91 runs sampled)
fast-deep-equal x 189,710 ops/sec ±0.57% (91 runs sampled)
fast-deep-equal/es6 x 169,133 ops/sec ±0.22% (91 runs sampled)
fast-equals x 176,720 ops/sec ±0.29% (89 runs sampled)
nano-equal x 136,845 ops/sec ±0.17% (92 runs sampled)
shallow-equal-fuzzy x 127,262 ops/sec ±0.18% (93 runs sampled)
underscore.isEqual x 81,972 ops/sec ±0.49% (95 runs sampled)
lodash.isEqual x 29,343 ops/sec ±0.80% (92 runs sampled)
deep-equal x 3,182 ops/sec ±0.40% (93 runs sampled)
deep-eql x 29,602 ops/sec ±0.95% (95 runs sampled)
ramda.equals x 9,123 ops/sec ±0.50% (94 runs sampled)
util.isDeepStrictEqual x 48,067 ops/sec ±0.52% (94 runs sampled)
assert.deepStrictEqual x 1,129 ops/sec ±0.30% (88 runs sampled)

The fastest is qcompare
```

[fast-equals](https://github.com/planttheidea/fast-equals) project test result

|                        | Ops / sec |
| ---------------------- | --------- |
| qcompare               | 6 626,798 |
| fast-equals            | 4 500,993 |
| fast-equals (circular) | 2 985,654 |
| deep-eql               | 2 282,853 |
| react-fast-compare     | 764,074   |
| nano-equal             | 716,619   |
| fast-deep-equal        | 707,519   |
| deep-equal             | 426,977   |
| underscore.isEqual     | 381,921   |
| lodash.isEqual         | 263,044   |
| assert.deepStrictEqual | 9,504     |


### License

MIT Yuriy Khomenko