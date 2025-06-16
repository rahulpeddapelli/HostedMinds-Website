import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToHash = ({ offset = 0 }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const scrollToElement = () => {
        const el = document.querySelector(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      const timeout = setTimeout(scrollToElement, 300);
      return () => clearTimeout(timeout);
    }
  }, [pathname, hash, offset]);

  return null;
};

export default ScrollToHash;
