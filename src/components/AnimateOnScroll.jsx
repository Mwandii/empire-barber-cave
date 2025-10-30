import { useRef } from "react";
import useInView from "../hooks/UseInView";

/**
 * props:
 *  - children
 *  - enter (Tailwind classes applied when in view) default: "opacity-100 translate-y-0 scale-100"
 *  - exit  (Tailwind classes when out of view) default: "opacity-0 translate-y-6 scale-95"
 *  - className (outer container classes)
 *  - duration (ms) default 700
 *  - delay (ms) optional
 */
export default function AnimateOnScroll({
  children,
  enter = "opacity-100 translate-y-0 scale-100",
  exit = "opacity-0 translate-y-6 scale-95",
  className = "",
  duration = 700,
  delay = 0,
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { root: null, rootMargin: "0px", threshold });

  const baseTransition = `transition-transform transition-opacity duration-[${duration}ms] ease-out`;
  // can't interpolate tailwind duration from variable; we'll use inline style for duration & delay
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? enter : exit}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
