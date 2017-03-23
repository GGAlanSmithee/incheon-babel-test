## Incheon babel compatability test

### first

* es6 compatible node version
* `npm i`

### tests

#### `npm run start`
    runs index.js (using es6 compatible version of node)
    
#### `npm run start:babel`
    runs index.js with babel, requiring incheon from node_modules (ignored by babel)
    
#### `npm run start:babel:local`
    runs index.js with babel, requiring incheon locally (transpiled by babel)
    
### Additional reading
* https://github.com/gajus/react-css-modules/issues/196
* https://github.com/facebookincubator/create-react-app/issues/1751#issuecomment-284759056
* https://github.com/facebookincubator/create-react-app/issues/1751#issuecomment-284763003
* https://github.com/gajus/react-css-modules/blob/master/src/extendReactClass.js#L16
* https://github.com/cloverfield-tools/universal-react-boilerplate/issues/41