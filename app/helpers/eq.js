import { helper } from '@ember/component/helper';

export default helper(function eq([a, b]/*, hash*/) {
  return a === b;
});
