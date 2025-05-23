import React from "react";
import Profile from "../components/Profile";
import MobileMenu from "../components/MobileMenu";

function MobileProfilePage() {
  return (
    <div className="max-w-sm mx-auto p-4 text-white">
      <MobileMenu />
      <Profile alwaysVisible={true} />
    </div>
  );
}

export default MobileProfilePage;
