import { useEffect, useState } from "react";

export default function useInView(ref, options = { root: null, rootMargin: "0px", threshold: 0.12 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      options
    );

    observer.observe(node);
    return () => observer.unobserve(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return inView;
}
