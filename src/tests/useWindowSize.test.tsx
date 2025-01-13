import { renderHook, act } from '@testing-library/react';
import { useWindowSize } from '../hooks/useWindowSize';
import { breakpoints } from '../style/breakpoints';

describe('useWindowSize', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  beforeEach(() => {
    window.innerWidth = originalInnerWidth;
    window.innerHeight = originalInnerHeight;
  });

  it('should return correct initial window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.windowSize.width).toBe(window.innerWidth);
    expect(result.current.windowSize.height).toBe(window.innerHeight);
  });

  it('should update on window resize', async () => {
    const { result } = renderHook(() => useWindowSize());

    await act(() => {
      window.innerWidth = breakpoints.small;
      window.innerHeight = breakpoints.small;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.windowSize.width).toBe(breakpoints.small);
    expect(result.current.windowSize.height).toBe(breakpoints.small);
    expect(result.current.isUpToSmall).toBe(true);
  });
});
