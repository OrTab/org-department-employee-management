import { debounce } from '../utils';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should debounce function calls', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });
});
