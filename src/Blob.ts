import { task } from 'fp-ts';

export const text =
  (downloadResult: Blob): task.Task<string> =>
  () =>
    downloadResult.text();

export const fromString = (string: string) => new Blob([string]);
