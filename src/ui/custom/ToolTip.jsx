import React from "react";
import "./tooltip.scss";
import Image from "next/image";

const Tooltip = (props) => {
  const { name } = props;

  return (
    <div className="item-hints hidden lg:flex">
      <div className="hint" data-position={4}>
        <span className="hint-radius" />
        <span className="hint-dot">
          <Image
            src="/feature.gif"
            alt="sd"
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[60px] h-auto object-cover text-blue-600"
          />
        </span>
        <div className="hint-content do--split-children">
          <p>Thực chiến làm nội dung bài viết trên: Fanpage, Website.</p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
