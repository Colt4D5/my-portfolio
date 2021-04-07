import { useEffect, useState } from 'react';

const useIntersect = ({root = null, rootMargin, threshold = 0}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = usestate(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
}

export default useIntersect;