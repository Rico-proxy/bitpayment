import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // make sure you have react-router-dom installed

function PreventBackNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    const handlePopState = (event) => {
      event.preventDefault();
      // Replace the current entry in the history stack with '/website'
      navigate('/website');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  // No modal is rendered
  return null;
}

export default PreventBackNavigation;
