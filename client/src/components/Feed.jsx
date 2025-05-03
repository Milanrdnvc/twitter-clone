import React from "react";
import CreateTuwueet from "./CreateTuwueet";
import Tuwueet from "./Tuwueet";
import { useGetAllQuery } from "../slices/tuwueetsApiSlice";

function Feed() {
  const { data, isLoading } = useGetAllQuery();

  console.log(data);

  return (
    <main className="flex-1 flex flex-col border-x border-gray-800 h-full">
      <div className="p-4 border-b border-gray-800 font-bold text-xl sticky top-0 z-10 bg-[#15202b]">
        Home
      </div>

      <div className="flex-1 overflow-y-auto">
        <CreateTuwueet />

        {data?.tuwueets.map((tuwueet) => (
          <Tuwueet
            key={tuwueet._id}
            text={tuwueet.text}
            created={tuwueet.createdAt}
            username={tuwueet.username}
            likes={tuwueet.likes}
            comments={tuwueet.comments}
          />
        ))}
      </div>
    </main>
  );
}

export default Feed;
