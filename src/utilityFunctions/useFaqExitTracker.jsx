
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useFaqExitTracker = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/' || hash !== '#faq') return;

    const faqSection = document.getElementById('faq');
    if (!faqSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // If user scrolled out of FAQ, remove the #faq from URL
          navigate('/', { replace: true });
        }
      },
      {
        threshold: 0.1, // Adjust based on when you want it to trigger
      }
    );

    observer.observe(faqSection);

    return () => observer.disconnect();
  }, [pathname, hash, navigate]);
};

export default useFaqExitTracker;
