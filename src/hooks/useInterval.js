import { useRef, useEffect } from 'react';

export default function useInterval(cb, delay) {
  let callbackRef = useRef();
  let intervalID = useRef(null);

  function resetInterval() {
    return () => clearInterval(intervalID.current);
  }

  function createInterval() {
    intervalID.current = setInterval(() => {
      callbackRef.current();
    }, delay);
  }

  //on mount
  useEffect(() => {
    return () => clearInterval(intervalID.current);
  }, []);

  //delay changes
  useEffect(() => {
    if (delay == null) resetInterval();

    resetInterval();
    createInterval();
  }, [delay]);

  //callback changes
  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);
}
