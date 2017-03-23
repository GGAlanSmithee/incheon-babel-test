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