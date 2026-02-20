import { useEffect, useRef, useState } from "react";

interface UseSectionNavigationOptions<T> {
  sections: T[];
  initial?: T;
  debounceMs?: number;
  touchThreshold?: number;
}

interface UseSectionNavigationResult<T> {
  active: T;
  setActive: (section: T) => void;
  navigate: (direction: 1 | -1) => void;
}

export function useSectionNavigation<T>({
  sections,
  initial,
  debounceMs = 800,
  touchThreshold = 50,
}: UseSectionNavigationOptions<T>): UseSectionNavigationResult<T> {
  const [active, setActiveState] = useState<T>(initial ?? sections[0]);
  const locked = useRef(false);
  const touchStartY = useRef(0);

  const lock = () => {
    locked.current = true;
    setTimeout(() => { locked.current = false; }, debounceMs);
  };

  const navigate = (direction: 1 | -1) => {
    if (locked.current) return;
    const idx = sections.indexOf(active);
    const next = sections[idx + direction];
    if (next === undefined) return;
    lock();
    setActiveState(next);
  };

  const setActive = (section: T) => {
    if (locked.current) return;
    lock();
    setActiveState(section);
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      navigate(e.deltaY > 0 ? 1 : -1);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") navigate(1);
      if (e.key === "ArrowUp" || e.key === "PageUp") navigate(-1);
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > touchThreshold) navigate(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active]);

  return { active, setActive, navigate };
}
