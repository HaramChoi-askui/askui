import { createArgsWithDefaults, createCliFlagsFromArgs } from './control-ui-server-args';

describe('createCliFlagsFromArgs()', () => {
  test('test createCliFlagsFromArgs should return -d 0 as default output', () => {
    const expected = ['-d 0'];
    const argsWithDefaults = createArgsWithDefaults();
    const actual = createCliFlagsFromArgs(argsWithDefaults);
    expect(actual).toEqual(expected);
  });

  test('test createCliFlagsFromArgs  output should include -d 0 when no display was selected', () => {
    const expected = ['-d 0', '-p 6777', '--host 0.0.0.0'];
    const argsWithDefaults = createArgsWithDefaults({ port: 6777, host: '0.0.0.0' });
    const actual = createCliFlagsFromArgs(argsWithDefaults);

    expect(actual).toEqual(expected);
  });

  test('test createCliFlagsFromArgs  output should include the display that was selected ', () => {
    const expected = ['-d 99', '-p 6777', '--host 0.0.0.0'];
    const argsWithDefaults = createArgsWithDefaults({ port: 6777, host: '0.0.0.0', display: 99 });
    const actual = createCliFlagsFromArgs(argsWithDefaults);
    expect(actual).toEqual(expected);
  });
});
