import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box, Typography } from '@mui/material';

const ProductModal = () => {
  const [open, setOpen] = useState(false);
  
  // Product details
  const product = {
    title: "Product Name",
    description: "This is a short description of the product. It's a great product that you'll love!",
    imageUrl: "https://via.placeholder.com/400" // Replace with the actual image URL
  };

  // Show modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Open the modal after 10 seconds
    }, 10000); // 10000ms = 10 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleClose = () => {
    setOpen(false); // Close modal
  };

  const handleBuyNow = () => {
    window.location.href = "/buy-product"; // Redirect to the product buying page
  };

  return (
    <div>
      test
    </div>
  );
};

export default ProductModal;
