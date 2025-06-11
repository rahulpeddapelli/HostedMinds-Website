import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to hash if we're on the homepage
    if (pathname === "/" && hash) {
      const scrollToElement = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Delay slightly to let React render the section
      const timeout = setTimeout(scrollToElement, 300);

      return () => clearTimeout(timeout);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;

