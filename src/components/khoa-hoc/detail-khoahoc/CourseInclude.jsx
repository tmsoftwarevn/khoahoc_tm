import React from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";

function ThisCourseIncludes({ course,listVideo }) {
 
  return (
    <main className="mt-4">
      <List className=" divide-y divide-gray-200">
        {[
          // {
          //   icon: <IoPersonOutline />,
          //   label: "Học viên",
          //   value: "99",
          //   color: "text-blue-500",
          // },
          {
            icon: <FaRegClock />,
            label: "Thời lượng",
            value: course?.duration,
            color: "text-green-500",
          },
          {
            icon: <HiSpeakerphone />,
            label: "Bài giảng",
            //value: listVideo?.lectures_count,
            value: listVideo?.videos_count,
            color: "text-yellow-500",
          },
          {
            icon: <FaVideo />,
            label: "Video",
            //value: listVideo?.videos_count,
            value: listVideo?.lectures_count,
            color: "text-red-500",
          },
        ].map(({ icon, label, value, color }, index) => (
          <ListItem
            key={`kkk${index}`}
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
