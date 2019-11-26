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



### License

MIT Yuriy Khomenko