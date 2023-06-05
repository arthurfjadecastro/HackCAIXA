import {
  useState,
  useMemo,
  useEffect,
  EffectCallback,
  DependencyList,
} from "react";
// import { useDelayedEffect } from './useDelayedEffect.js';

const useSkippableEffect = (
  effect,
  dependencies,
  ignoredValues = [null],
  times = 1
) => {
  const [prevDependencies, setPrevDependencies] = useState(dependencies);
  const mergedDependencies = useMemo(
    () =>
      dependencies.map((dep, index) =>
        ignoredValues.includes(dep) ? prevDependencies[index] : dep
      ),
    [...dependencies, ...ignoredValues]
  );

  useEffect(() => {
    setPrevDependencies(mergedDependencies);
  }, [mergedDependencies]);

  // useDelayedEffect(
  //   () => {
  //     return effect();
  //   },
  //   mergedDependencies,
  //   times
  // );
};

export default useSkippableEffect;
