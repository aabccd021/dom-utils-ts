import { pipe } from 'fp-ts/function';
import { fail, pass, runTests, Tests } from 'unit-test-ts';
import { expect, it } from 'vitest';

import * as blob from '../src/Blob';

const tests: Tests = {
  'fromString then text returns original string': pass({
    expect: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'masumoto',
  }),
  'fromString then text does not return another string': fail({
    expect: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'nazuna',
  }),
};

runTests(tests, expect, it);
