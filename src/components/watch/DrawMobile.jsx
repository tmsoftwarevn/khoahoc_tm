"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import ContentCourse from "./ContentCourse";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function MobileDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [width, setWidth] = React.useState("100vw");

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth > 576 ? "50vw" : "100vw");
    };

    // Set initial width
    updateWidth();

    // Update width on resize
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const router = useRouter();
  const { setTitle, openDraw, setOpenDraw, setLink } = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="box shadow-md p-2">
        <div
          className="flex items-center cursor-pointer hover:text-blue-600"
          onClick={() => router.push("/")}
        >
          <IoIosArrowBack className="text-xs" />
          <p className="py-2">Về trang chủ</p>
        </div>
        <p className="text-3xl py-2">Content Marketing | Digital Marketing</p>
      </div>

      <ContentCourse
        setTitle={setTitle}
        setOpenDraw={setOpenDraw}
        setLink={setLink}
      />
    </Box>
  );
  // const useStyles = makeStyles({
  //   drawerPaper: {
      
  //     paddingTop: "65px",
  //   },
  // });
  // const classes = useStyles();
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={openDraw}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
