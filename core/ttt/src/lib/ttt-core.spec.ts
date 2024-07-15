import { tttCore } from './ttt-core';

describe('tttCore ', () => {
  it(' the core of tic tac toe should work', () => {
    expect(tttCore()).toBeTruthy();
  });
});
