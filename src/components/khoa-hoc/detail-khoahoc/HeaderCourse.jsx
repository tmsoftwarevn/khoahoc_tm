
import Breadcrum2 from "@/components/breadcrum/Breadcrum2"
import { useState } from "react";

const HeaderCourse = () => {
    const [string, setString] = useState(['khóa học'])
    return (
        <div className="text-white">
           <Breadcrum2 listBread = {string} />
        </div>
    );
}

export default HeaderCourse;