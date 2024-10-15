import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const AlertSuccess = (props) => {
  const {open, setOpen, mess } = props;

  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {/* Tài khoản hoặc mật khẩu không chính xác ! */}
          {mess}
        </Alert>
      </Snackbar>
      
    </>
  );
};

export default AlertSuccess;
