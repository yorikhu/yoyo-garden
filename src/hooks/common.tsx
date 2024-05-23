import {
  DependencyList,
  EffectCallback,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react';

type Destructor = () => void;

/** reactStrictMode：受限于 destructor 的表现, 仅限于开发环境调试使用 */
export const useOneceEffect = (
  effect: EffectCallback,
  deps?: DependencyList | undefined,
) => {
  const executed = useRef(false);
  const destructor: MutableRefObject<Destructor | void> = useRef(() => {});

  useEffect(() => {
    if (executed.current) {
      destructor.current = effect();
    }

    executed.current = true;

    return destructor.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const useMounted = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
