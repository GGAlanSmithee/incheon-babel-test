'use strict';

const useLocal = process.env.NODE_ENV === 'local';

const GameEngine = useLocal ? require('./incheon').GameEngine : require('incheon').GameEngine;

class A extends GameEngine {
    
}

const a = new A();

console.log(a);