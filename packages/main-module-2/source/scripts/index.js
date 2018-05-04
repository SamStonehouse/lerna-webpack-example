import _ from 'lodash';

import { testFunc } from 'module-1';
import { testFunc2 } from 'module-2';
import { testFunc3 } from 'module-3';

import '../styles/main.scss';

console.log('main module', _.defaults({ a: 3 }, { a: 3, b: 3 }));

testFunc();
testFunc2();
testFunc3();

console.log('done main 2');
