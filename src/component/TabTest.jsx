import React from "react";
import Tab from "./Tab";
import RandomComponet from "./RandomComponet";

function TabTest() {
  const tabsContent = [
    {
      label: "Tab 1",
      content: (
        <div>
          <h1>This is the content of Tab 1</h1>{" "}
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div>
          {" "}
          <h1>This is the content of Tab 2</h1>{" "}
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: <RandomComponet />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return (
    <div>
      <Tab tabsContent={tabsContent} onChange={handleChange} />
    </div>
  );
}

export default TabTest;
