import { DependencyList, EffectCallback, useEffect, useRef } from "react";

type Destructor = () => void;

/** 受限于 destructor 的表现, 仅限于开发环境调试使用 */
export const useOneceEffect = (
  effect: EffectCallback,
  deps?: DependencyList | undefined
) => {
  const executed = useRef(false);
  useEffect(() => {
    let destructor: void | Destructor = () => {};

    if (executed.current) {
      destructor = effect();
    }

    executed.current = true;

    return destructor;
  }, deps);
};
