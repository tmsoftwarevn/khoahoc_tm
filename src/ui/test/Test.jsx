import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ReactPlayer from "react-player";

const CustomDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to Open Dialog */}
      <button
        onClick={handleOpen}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF4500",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Open Video
      </button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
        fullWidth
      >
        {/* Title Section */}
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#FFFAF0",
            borderBottom: "1px solid #ddd",
          }}
          id="customized-dialog-title"
        >
          <LocalFireDepartmentIcon className="mr-2 text-orange-600" />
          <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Giới thiệu
          </span>
          <LocalFireDepartmentIcon className="ml-2 text-orange-600" />
        </DialogTitle>

        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Content Section */}
        <DialogContent
          dividers
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF5E1",
            padding: 0, // Remove extra padding for proper alignment
          }}
        >
          <Box
            sx={{
              //maxWidth: "800px",
              width: "100%",
              aspectRatio: "16/9", // Maintain 16:9 aspect ratio
              position: "relative", // Needed for ReactPlayer alignment
              backgroundColor: "#000", // Black background for a video player feel
            }}
          >
            <ReactPlayer
              className="modal-video"
              url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
              playIcon={true}
              playing={true}
              width="100%"
              height="100%"
              style={{
                position: "absolute", // Positioning the player inside the box
                top: 0,
                left: 0,
              }}
            />
            
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
