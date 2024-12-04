import React, { useState } from "react";
import "./test.scss"; // Make sure to include the CSS for styling

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button onClick={openModal} className="show-modal-btn">
        Show Sale
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <img
              src="https://via.placeholder.com/300" // Replace with your image URL
              alt="Sale"
              className="sale-image"
            />
            <h2 className="sale-title">Month 12 Sale</h2>
            <p className="sale-description">
              Get 50% OFF on all products this December!
            </p>
            <button
              className="shop-now-btn"
              onClick={() =>
                (window.location.href = "https://your-sale-page-url.com")
              }
            >
              Shop Now
            </button>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
