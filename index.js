'use strict';

const __Generator__ = Object.getPrototypeOf(function*(){});
const __qkeys__ = Object.keys;
const __qhop__ = Object.prototype.hasOwnProperty;

function qcompare(a, b) {
    if(a === b)return true;
    if(typeof a === 'object' && typeof b === 'object' && a !== null && b !== null){
      let c = a.constructor;
      if(c !== b.constructor)return false;
      switch(c){
        case Object:
          let t,i,x,p =__qkeys__(b), g = 0;
          for(i in a){
            if(__qhop__.call(a, i)){
              x = a[i];
              t = b[i];
              if(x !== t){
                if(!qcompare(x, t))return false;
              }else if(i === p[g] || __qhop__.call(b, i)){}else return false;
              g++;
            }
          }
          if(g === p.length)return true;
          return false;
        case Array:
          let q = a.length;
          if(q !== b.length)return false;
          while(q--){
            if(a[q] === b[q])continue;
            if(qcompare(a[q], b[q]) === false)return false;
          }
          return true;
        case Date:
          a = a.getTime();
          b = b.getTime();
          return a === b || a !== a && b !== b;
        case Map:
          if(a.size !== b.size)return false;
          let c,m,e = b.entries();
          for(c of a){
            m = e.next().value;
            if(m[0] !== c[0]) if(m[0] !== m[0] && c[0] !== c[0]){}else return false;
            if(m[1] !== c[1]) if(!qcompare(c[1], m[1]))return false;
          }
          return true;
        case Set:
          if(a.size !== b.size)return false;
          let v,h,r = b.values();
          for(v of a){
            h = r.next().value;
            if(h !== v) if(!qcompare(v, h))return false;
          }
          return true;
        case RegExp:
          return a.source === b.source && a.flags === b.flags;
        case BigInt:
        case String:
        case Number:
          return a.valueOf() === b.valueOf();
        case Promise:
        case Symbol:
        case WeakMap:
        case WeakSet:
          return a === b;
        case undefined:
          let u,y = 0;
          for(u in a){
            if(!(u in b))return false;
            if(!qcompare(a[u], b[u]))return false;
            y++;
          }
          if(y === __qkeys__(b).length)return true;
          return false;
        case DataView:
          a = a.buffer;
          b = a.buffer;
        case ArrayBuffer:
        //case SharedArrayBuffer:
          let o = a.byteLength;
          if(o !== b.byteLength)return false;
          a = new Uint8Array(a);
          b = new Uint8Array(b);
          while(o--){if(a[o] !== b[o])return false;}
          return true;
        case Int8Array:
        case Uint8Array:
        case Uint8ClampedArray:
        case Int16Array:
        case Uint16Array:
        case Int32Array:
        case Uint32Array:
        case Float32Array:
        case Float64Array:
        case BigInt64Array:
        case BigUint64Array:
          let s = a.length;
          if(s !== b.length)return false;
          while(s--){if(a[s] !== b[s])return false;}
          return true;
        case Error:
        case RangeError:
        case EvalError:
        case ReferenceError:
        case SyntaxError:
        case TypeError:
        case URIError:
        case InternalError:
        //case AggregateError:
          return a.message === b.message && a.name === b.name && a.code === b.code;
        case __Generator__:
          let d = a.next();
          let f = b.next();
          while(d.done === false && f.done === false){
            if(d.value !== f.value) if(!qcompare(d.value, f.value)) return false;
            d = a.next();
            f = b.next();
          }
          if(d.done !== f.done)return false;
          return true;
        default:
          let k,z,l,n = __qkeys__(b), j = 0;
          for(z in a){
            if(__qhop__.call(a, z)){
              l = a[z];
              k = b[z];
              if(l !== k){
                if(!qcompare(l, k))return false;
              }else if(z === n[j] || __qhop__.call(b, z)){}else return false;
              j++;
            }
          }
          if(j === n.length)return true;
          return false;
      }
      return false;
    }
    return a !== a && b !== b;
  }