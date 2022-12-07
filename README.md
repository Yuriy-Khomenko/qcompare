## qcompare
the fastest function for comparing two js objects compatible with es6

*according to the author, this comparison script is the fastest in the industry(watch benchmarks)

### Install

npm install --save qcompare


### Usage

const qcompare = require( 'qcompare');

```javascript
qcompare( { foo: 1 }, { foo: 1 } ); // true
qcompare( { bar: 1 }, { bar: 2 } ); // false
```

### Features

- support for all new classes ES6;
- very quickly compares;
- correctly compares:
  - for Promise, Symbol, WeakMap, WeakSet, function - compared by reference;
  - for [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Description) and [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Description) - takes into account the insertion order;
  - for Map supported NaN for keys;
  - for Date supported NaN for return value;
- does not support circular objects;
- object-keys for the Map are compared by reference;

### Benchmarks

For more balanced testing of performance, tests of other projects were used

```
Nodejs - v16.8.0
Date - 07.12.2022
```

[fast-deep-equal v3.1.3](https://github.com/epoberezkin/fast-deep-equal) project test result

```
qcompare x 328,360 ops/sec ±0.27% (92 runs sampled)
fast-deep-equal x 275,325 ops/sec ±0.54% (92 runs sampled)
fast-deep-equal/es6 x 229,257 ops/sec ±0.43% (97 runs sampled)
fast-equals x 257,231 ops/sec ±0.31% (94 runs sampled)
nano-equal x 173,235 ops/sec ±0.29% (96 runs sampled)
shallow-equal-fuzzy x 119,923 ops/sec ±0.45% (94 runs sampled)
underscore.isEqual x 79,648 ops/sec ±0.77% (93 runs sampled)
lodash.isEqual x 36,797 ops/sec ±0.65% (96 runs sampled)
deep-equal x 87.99 ops/sec ±4.44% (42 runs sampled)
deep-eql x 23,791 ops/sec ±0.78% (93 runs sampled)
ramda.equals x 10,551 ops/sec ±1.65% (95 runs sampled)
util.isDeepStrictEqual x 49,437 ops/sec ±0.58% (96 runs sampled)
assert.deepStrictEqual x 579 ops/sec ±0.40% (93 runs sampled)
The fastest is qcompare
```

[fast-equals v4.0.3](https://github.com/planttheidea/fast-equals) project test result

|                        | Ops / sec |
| ---------------------- | --------- |
| qcompare               | 5 492,983 |
| fast-equals            | 3 495,332 |
| deep-eql               | 1 880,796 |
| fast-equals (circular) | 1 859,143 |
| fast-deep-equal        | 1 783,733 |
| react-fast-compare     | 1 556,482 |
| nano-equal             |   652,388 |
| underscore.isEqual     |   445,516 |
| lodash.isEqual         |   219,295 |
| assert.deepStrictEqual |    10,583 |
| deep-equal             |     0,671 |

[dequal v2.0.3](https://github.com/lukeed/dequal) project test result

```
(basic) Benchmark:
  assert.deepStrictEqual x 242,497 ops/sec ±0.90% (92 runs sampled)
  util.isDeepStrictEqual x 243,227 ops/sec ±0.88% (95 runs sampled)
  fast-deep-equal        x 1,283,468 ops/sec ±0.44% (95 runs sampled)
  lodash.isEqual         x 265,328 ops/sec ±0.86% (94 runs sampled)
  nano-equal             x 969,216 ops/sec ±1.06% (95 runs sampled)
  dequal/lite            x 1,350,907 ops/sec ±2.40% (93 runs sampled)
  dequal                 x 1,360,938 ops/sec ±0.87% (94 runs sampled)
  qcompare               x 2,216,972 ops/sec ±0.70% (95 runs sampled)

(complex) Benchmark(excluding object-keys for the Map):
  assert.deepStrictEqual x 112,922 ops/sec ±0.95% (93 runs sampled)
  util.isDeepStrictEqual x 113,051 ops/sec ±1.08% (95 runs sampled)
  lodash.isEqual         x 52,685 ops/sec ±1.18% (89 runs sampled)
  dequal                 x 467,948 ops/sec ±0.51% (95 runs sampled)
  qcompare               x 1,158,099 ops/sec ±1.43% (92 runs sampled)
```

### License

MIT Yuriy Khomenko