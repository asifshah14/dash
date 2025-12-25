import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', staggerDelay = 100 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.scroll-reveal');
            reveals.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * staggerDelay);
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);

      // Immediately check if elements are already in view
      const reveals = ref.current.querySelectorAll('.scroll-reveal');
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        reveals.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('revealed');
          }, index * staggerDelay);
        });
      }
    }

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, staggerDelay]);
}
