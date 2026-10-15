import React, { useEffect, useRef, useState } from 'react';

/**
 * Put this directly above a wide table or chart that sits in an overflow-x-auto box.
 * It shows a one-line hint only when that box really has to scroll sideways (a phone or a narrow window),
 * and shows nothing when the whole table fits.
 */
export const ScrollHint: React.FC = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [needed, setNeeded] = useState(false);

  useEffect(() => {
    const target = ref.current?.nextElementSibling as HTMLElement | null;
    if (!target) return;
    const check = () => setNeeded(target.scrollWidth > target.clientWidth + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(target);
    if (target.firstElementChild) observer.observe(target.firstElementChild);
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={ref} hidden={!needed} className="text-xs font-medium text-slate-600 mb-2">
      This is wider than the screen. Swipe or scroll sideways to see all of it.
    </p>
  );
};
