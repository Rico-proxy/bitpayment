import { useEffect, useState } from 'react';
import Modal from './Modal';
function PreventBackNavigation() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    const handlePopState = (event) => {
      event.preventDefault();
      window.history.pushState(null, document.title, window.location.href);
      setModalOpen(true);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    // Handle the confirmation action here
    console.log("Confirmed");
    closeModal();
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal} onConfirm={handleConfirm} />
  );
}

export default PreventBackNavigation;
