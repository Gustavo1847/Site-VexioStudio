import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Utilitário para animações GSAP comuns
export function useGsapFadeIn(ref: RefObject<HTMLElement>, options: gsap.TweenVars = {}) {
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ...options,
        }
      );
    }
  }, [ref, options]);
}

export function useGsapStaggerFadeIn(refs: RefObject<HTMLElement>[], options: gsap.TweenVars = {}) {
  useEffect(() => {
    const elements = refs.map(r => r.current).filter(Boolean);
    if (elements.length) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elements[0],
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ...options,
        }
      );
    }
  }, [refs, options]);
}

export function useGsapParallax(ref: RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, [ref, speed]);
}

// Outros utilitários podem ser adicionados conforme necessário
