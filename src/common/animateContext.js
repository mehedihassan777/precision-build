'use client'

import { usePathname } from "next/navigation";
import { createContext, useEffect } from "react";

const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // Chạy lại useEffect khi pathname thay đổi

  return <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>;
};

export { AnimationContext, AnimationProvider };
