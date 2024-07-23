import React, { useState } from "react";
import "./Tab.css";

function Tab({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="Heading">
        {tabsContent &&
          tabsContent.map((tabItem, index) => (
            <div onClick={() => handleOnClick(index)} key={tabItem.label}>
              <button>
                {" "}
                <span className="label "> {tabItem.label}</span>
              </button>
            </div>
          ))}
      </div>
      <div className="content ">
        {tabsContent &&
          tabsContent[currentTabIndex] &&
          tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tab;
