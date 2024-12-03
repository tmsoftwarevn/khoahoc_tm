import React from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";

function ThisCourseIncludes({ details }) {
  const icons = [
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
  ];

  const itemsText = [
    `199 học viên`,
    "10 giờ",
    `20 bài học`,
    "Ebook Chiến lược phát triển Social Media",
    "Ebook Chiến lược Free Traffic Facebook",
  ];

  return (
    <main className="mt-4">
      <List className=" divide-y divide-gray-200">
        {[
          {
            icon: <IoPersonOutline />,
            label: "Học viên",
            value: "99",
            color: "text-blue-500",
          },
          {
            icon: <FaRegClock />,
            label: "Thời lượng",
            value: "10h",
            color: "text-green-500",
          },
          {
            icon: <HiSpeakerphone />,
            label: "Bài giảng",
            value: "15",
            color: "text-yellow-500",
          },
          {
            icon: <FaVideo />,
            label: "Video",
            value: "20",
            color: "text-red-500",
          },
        ].map(({ icon, label, value, color }, index) => (
          <ListItem
            key={index}
            disablePadding
            className="flex items-center py-3"
          >
            <div className={`mr-4 text-lg ${color}`}>{icon}</div>
            <div className="flex justify-between w-full text-sm">
              <span className="font-medium md:text-lg text-gray-800">{label}</span>
              <span className=" md:text-lg ">{value}</span>
            </div>
          </ListItem>
        ))}
      </List>
    </main>
  );
}

export default ThisCourseIncludes;
