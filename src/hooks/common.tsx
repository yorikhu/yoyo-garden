import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useOneceEffect = (
  effect: EffectCallback,
  deps?: DependencyList | undefined
) => {
  const executed = useRef(false);
  useEffect(() => {
    if (!executed.current) {
      executed.current = true;
      effect();
    }
  }, deps);
};
