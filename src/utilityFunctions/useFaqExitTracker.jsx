// import { useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const useFaqScrollTracker = () => {
//   const navigate = useNavigate();
//   const { pathname, hash } = useLocation();
//   const wasFaqInView = useRef(false);

//   useEffect(() => {
//     const faqSection = document.getElementById('faq');
//     if (!faqSection) return;

//     const observer = new Intersectio
//     Observer(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           if (pathname === '/' && hash !== '#faq') {
//             // Scroll entered FAQ: navigate to /#faq
//             navigate('/#faq', { replace: true });
//             wasFaqInView.current = true;
//           }
//         } else {
//           // Scroll left FAQ: only go back to / if previous state was /#faq
//           if (pathname === '/' && hash === '#faq' && wasFaqInView.current) {
//             navigate('/', { replace: true });
//             wasFaqInView.current = false;
//           }
//         }
//       },
//       {
//         root: null,
//         threshold: 0.6, // Adjust this to control sensitivity
//       }
//     );

//     observer.observe(faqSection);

//     return () => {
//       observer.disconnect();
//     };
//   }, [navigate, pathname, hash]);
// };

// export default useFaqScrollTracker;



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
