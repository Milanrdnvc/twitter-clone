import React from "react";
import Profile from "../components/Profile";

function MobileProfilePage() {
  return (
    <div className="max-w-sm mx-auto p-4 text-white">
      <Profile alwaysVisible={true} />
    </div>
  );
}

export default MobileProfilePage;
