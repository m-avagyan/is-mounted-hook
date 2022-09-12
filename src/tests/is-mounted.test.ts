import { renderHook } from '@testing-library/react-hooks';

import useIsMounted from '../is-mounted.hook';

describe('Use is mounted hook.', () => {
  it('Should be defined:', () => {
    expect(useIsMounted).toBeDefined();
  });

  it('Should return true if component is mounted:', () => {
    const { result } = renderHook(useIsMounted);

    const isMounted = result.current;
    expect(isMounted).toBe(false);
  });

  it('Should return false if component is unmounted:', () => {
    const { result, unmount } = renderHook(useIsMounted);

    unmount();

    const isMounted = result.current;
    expect(isMounted).toBe(false);
  });
});
