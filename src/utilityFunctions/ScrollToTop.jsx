
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPath = useRef({ pathname: '', hash: '' });

  useEffect(() => {
    const cameFromFaq = prevPath.current.pathname === '/' && prevPath.current.hash === '#faq';
    const isNowFaq = pathname === '/' && hash === '#faq';

    const shouldScrollToTop =
      !hash && !(pathname === '/' && cameFromFaq); // Prevent scroll top when coming from /#faq

    if (shouldScrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Update previous path
    prevPath.current = { pathname, hash };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
