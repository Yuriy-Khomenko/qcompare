'use strict';
const G = Object.getPrototypeOf(function*(){});
const keys = Object.keys;
const hop = Object.prototype.hasOwnProperty;


function _(a, b) {
    if(typeof a === 'object' && typeof b === 'object' && a !== null && b !== null){
      let c = a.constructor;
      if(c !== b.constructor)return false;
      switch(c){
        case Object:
          let t,i,p=keys(b),g=0;
          for(i in a){
            if(hop.call(a,i)){
              t = b[i];
              if(a[i] !== t && !_(a[i],t)){
                return false;
              }else if(t === undefined && i !== p[g] && !hop.call(b,i))return false;
              g++;
            }
          }
          return g === p.length;
        case Array:
          let q = a.length;
          if(q !== b.length)return false;
          while(q-- && qcompare(a[q],b[q]));
          return !~q;
        case Date:
          a = a.getTime();
          b = b.getTime();
          return a === b || (a !== a && b !== b);
        case Map:
          if(a.size !== b.size || a.entries !== b.entries)return false;
          let c,m,e = b.entries();
          for(c of a){
            m = e.next().value;
            if(m[0] !== c[0]) if(m[0] !== m[0] && c[0] !== c[0]){}else return false;
            if(m[1] !== c[1] && !_(c[1],m[1]))return false;
          }
          return true;
        case Set:
          if(a.size !== b.size || a.values !== b.values)return false;
          let v,h,r = b.values();
          for(v of a){
            h = r.next().value;
            if(h !== v && !_(v,h))return false;
          }
          return true;
        case RegExp:
          return a.source === b.source && a.flags === b.flags;
        case undefined:
          let u,y = 0;
          for(u in a){
            if(!(u in b) || (a[u] !== b[u] && !_(a[u],b[u])))return false;
            y++;
          }
          return y === keys(b).length;
        case ArrayBuffer:
          let o = a.byteLength;
          if(o !== b.byteLength)return false;
          o = a.byteLength >> 3;
          let s=o*8,d=new Float64Array(a,0,o),f=new Float64Array(b,0,o);
          while(o-- && d[o] === f[o]);
          if(~o)return false;
          a = new Uint8Array(a,s);
          b = new Uint8Array(b,s);
          o = a.length;
          while(o-- && a[o] === b[o]);
          return !~o;          
        case DataView:
          if(a.buffer === b.buffer)return true;
          let w = a.byteLength;
          if(w !== b.byteLength)return false;
          while(w > 7){w -= 8; if(a.getFloat64(w) !== b.getFloat64(w))return false;};
          while(w-- && a.getInt8(w) === b.getInt8(w));
          return !~w;
        case Promise:
        case Symbol:
        case WeakMap:
        case WeakSet:
        case G:
          return a === b;
        default:
          if(a.BYTES_PER_ELEMENT){
            if(!b.BYTES_PER_ELEMENT)return false;
            let s = a.length;
            if(s !== b.length)return false;
            while(s-- && a[s] === b[s]);
            return !~s;
          }
          if(a.valueOf) return a.valueOf() === b.valueOf();
          if(a.toString) return a.toString() === b.toString();
          let k,z,n=keys(b),j=0;
          for(z in a){
            if(hop.call(a, z)){
              k = b[z];
              if(a[z] !== k && !_(a[z],k)){
                return false;
              }else if(l === undefined && z !== n[j] && !hop.call(b,z))return false;
              j++;
            }
          }
          return j === n.length;
      }
    }
    return a !== a && b !== b;
  }

function qcompare(a, b) {
    if(a === b)return true;
    if(typeof a === 'object' && typeof b === 'object' && a !== null && b !== null){
      let c = a.constructor;
      if(c !== b.constructor)return false;
      switch(c){
        case Object:
          let t,i,p=keys(b),g=0;
          for(i in a){
            if(hop.call(a,i)){
              t = b[i];
              if(a[i] !== t && !_(a[i],t)){
                return false;
              }else if(t === undefined && i !== p[g] && !hop.call(b,i))return false;
              g++;
            }
          }
          return g === p.length;
        case Array:
          let q = a.length;
          if(q !== b.length)return false;
          while(q-- && qcompare(a[q],b[q]));
          return !~q;
        case Date:
          a = a.getTime();
          b = b.getTime();
          return a === b || (a !== a && b !== b);
        case Map:
          if(a.size !== b.size || a.entries !== b.entries)return false;
          let c,m,e = b.entries();
          for(c of a){
            m = e.next().value;
            if(m[0] !== c[0]) if(m[0] !== m[0] && c[0] !== c[0]){}else return false;
            if(m[1] !== c[1] && !_(c[1],m[1]))return false;
          }
          return true;
        case Set:
          if(a.size !== b.size || a.values !== b.values)return false;
          let v,h,r = b.values();
          for(v of a){
            h = r.next().value;
            if(h !== v && !_(v,h))return false;
          }
          return true;
        case RegExp:
          return a.source === b.source && a.flags === b.flags;
        case undefined:
          let u,y = 0;
          for(u in a){
            if(!(u in b) || (a[u] !== b[u] && !_(a[u],b[u])))return false;
            y++;
          }
          return y === keys(b).length;
        case ArrayBuffer:
        //case SharedArrayBuffer:
          let o = a.byteLength;
          if(o !== b.byteLength)return false;
          o = a.byteLength >> 3;
          let s=o*8,d=new Float64Array(a,0,o),f=new Float64Array(b,0,o);
          while(o-- && d[o] === f[o]);
          if(~o)return false;
          a = new Uint8Array(a,s);
          b = new Uint8Array(b,s);
          o = a.length;
          while(o-- && a[o] === b[o]);
          return !~o;          
        case DataView:
          if(a.buffer === b.buffer)return true;
          let w = a.byteLength;
          if(w !== b.byteLength)return false;
          while(w > 7){w -= 8; if(a.getFloat64(w) !== b.getFloat64(w))return false;};
          while(w-- && a.getInt8(w) === b.getInt8(w));
          return !~w;
        case Promise:
        case Symbol:
        case WeakMap:
        case WeakSet:
        case G:
          return a === b;
        default:
          if(a.BYTES_PER_ELEMENT){
            if(!b.BYTES_PER_ELEMENT)return false;
            let s = a.length;
            if(s !== b.length)return false;
            while(s-- && a[s] === b[s]);
            return !~s;
          }
          if(a.valueOf) return qcompare(a.valueOf(),b.valueOf());
          if(a.toString) return a.toString() === b.toString();
          let k,z,n=keys(b),j=0;
          for(z in a){
            if(hop.call(a, z)){
              k = b[z];
              if(a[z] !== k && !_(a[z],k)){
                return false;
              }else if(l === undefined && z !== n[j] && !hop.call(b,z))return false;
              j++;
            }
          }
          return j === n.length;
      }
    }
    return a !== a && b !== b;
  }

  module.exports = qcompare;