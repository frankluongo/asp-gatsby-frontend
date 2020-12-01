import { useEffect, useRef } from 'react';
export function useHorizontalScroll() {
  const el = useRef(null)

  useEffect(addListeners, []);


  return { el };

  function addListeners() {
    document.addEventListener("wheel", scrollContent);
    return () => document.removeEventListener('wheel', scrollContent);
  }

  function scrollContent(e) {
    const increment = e.deltaY;
    el.current.scrollLeft += increment;
  }
}
