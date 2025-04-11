import React from "react";
import CreateTuwueet from "./CreateTuwueet";
import Tuwueet from "./Tuwueet";

function Feed() {
  return (
    <main className="flex-1 flex flex-col border-x border-gray-800 h-full">
      <div className="p-4 border-b border-gray-800 font-bold text-xl sticky top-0 z-10 bg-[#15202b]">
        Home
      </div>

      <div className="flex-1 overflow-y-auto">
        <CreateTuwueet />

        {[...Array(30)].map((_, i) => (
          <Tuwueet key={i} test={i} />
        ))}
      </div>
    </main>
  );
}

export default Feed;
