import { helper } from '@ember/component/helper';

export default helper(function didUpdate(params /*, hash*/) {
  let [fn, ...args] = params;

  return fn(...args);
});
