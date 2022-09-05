import { pipe } from 'fp-ts/function';
import { executeTests, itExpect, itExpectFail, Tests } from 'unit-test-ts';
import * as vitest from 'vitest';

import * as blob from '../src/Blob';

const tests: Tests = {
  'fromString then text returns original string': itExpect({
    task: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'masumoto',
  }),
  'fromString then text does not return another string': itExpectFail({
    task: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'nazuna',
  }),
};

executeTests(tests, vitest);
