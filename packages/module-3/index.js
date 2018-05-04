import _ from 'lodash';

export const testFunc3 = () => {
  console.log('module 1', _.defaults({ a: 3 }, { a: 3, b: 3 }));
};
