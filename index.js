'use strict';

// https://github.com/gajus/react-css-modules/issues/196
// https://github.com/facebookincubator/create-react-app/issues/1751#issuecomment-284759056
// https://github.com/facebookincubator/create-react-app/issues/1751#issuecomment-284763003
// https://github.com/gajus/react-css-modules/blob/master/src/extendReactClass.js#L16
// https://github.com/cloverfield-tools/universal-react-boilerplate/issues/41

const useLocal = process.env.NODE_ENV === 'local';

const GameEngine = useLocal ? require('./incheon').GameEngine : require('incheon').GameEngine;

class A extends GameEngine {
    
}

const a = new A();