import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const AlertErr = (props) => {
  const { open, setOpen, err } = props;
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
         
          {err}
        </Alert>
      </Snackbar>
      
    </>
  );
};

export default AlertErr;
