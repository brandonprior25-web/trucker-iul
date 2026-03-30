'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      // Reset visibility on page change
      document.querySelectorAll('.reveal, .reveal-group').forEach((el) => {
        el.classList.remove('visible');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
      );

      document.querySelectorAll('.reveal, .reveal-group').forEach((el) => {
        observer.observe(el);
      });

      return observer;
    };

    // Delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      const observer = init();
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
