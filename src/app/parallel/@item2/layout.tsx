import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>@item2 레이아웃</p>
      {children}
    </div>
  );
};

export default layout;
