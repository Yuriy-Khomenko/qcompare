const nano_equal = require('nano-equal');
const { dequal } = require('dequal');
const fast_deep_equal  = require('fast-deep-equal');
const { deepEqual } = require('fast-equals');
const react_fast_compare = require('react-fast-compare');
const lodash_isequal = require('lodash.isequal');
const qcompare = require('../index');

const {a, b} = require('./bigObject');

const iterations = 10000;

console.time('qcompare');
for (var i = 0; i < iterations; i++) {
    qcompare(a, b);
}
console.timeEnd('qcompare');

console.time('nano-equal');
for (var i = 0; i < iterations; i++) {
    nano_equal(a, b);
}
console.timeEnd('nano-equal')

console.time('dequal');
for (var i = 0; i < iterations; i++) {
    dequal(a, b);
}
console.timeEnd('dequal');

console.time('fast-deep-equal');
for (var i = 0; i < iterations; i++) {
    fast_deep_equal(a, b);
}
console.timeEnd('fast-deep-equal');

console.time('fast-equals');
for (var i = 0; i < iterations; i++) {
    deepEqual(a, b);
}
console.timeEnd('fast-equals');

console.time('react-fast-compare');
for (var i = 0; i < iterations; i++) {
    react_fast_compare(a, b);
}
console.timeEnd('react-fast-compare');

console.time('lodash.isequal');
for (var i = 0; i < iterations; i++) {
    lodash_isequal(a, b);
}
console.timeEnd('lodash.isequal');