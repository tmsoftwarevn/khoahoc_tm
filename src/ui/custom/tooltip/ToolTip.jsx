import React from "react";
import "./tooltip.scss";

const Tooltip = (props) => {
  const { name } = props;

  return (
    <div className="item-hints">
      <div className="hint" data-position={4}>
        <span className="hint-radius" />
        <span className="hint-dot">1</span>
        <div className="hint-content do--split-children">
          <p>Use Navbar to navigate the website quickly and easily.</p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;


