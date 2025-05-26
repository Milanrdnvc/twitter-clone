import React, { useEffect, useState } from "react";
import socket, { connectSocket, emitTuwueet } from "../utils/socket";
import CreateTuwueet from "./CreateTuwueet";
import Tuwueet from "./Tuwueet";
import { useGetAllQuery } from "../slices/tuwueetsApiSlice";

function Feed() {
  const { data, isLoading, refetch } = useGetAllQuery();

  useEffect(() => {
    const handleTuwueetUpdates = (data) => {
      refetch();
    };

    socket.on("tuwueet", handleTuwueetUpdates);
    socket.on("like", handleTuwueetUpdates);

    return () => {
      socket.off("tuwueet", handleTuwueetUpdates);
      socket.off("like", handleTuwueetUpdates);
    };
  }, []);

  return (
    <main className="flex-1 flex flex-col border-x border-gray-800 h-full">
      <div className="p-4 border-b border-gray-800 font-bold text-xl sticky top-0 z-10 bg-[#15202b]">
        Home
      </div>

      <div className="flex-1 overflow-y-auto">
        <CreateTuwueet />

        {isLoading && <p>Loading...</p>}

        {data?.tuwueets
          .map((tuwueet) => (
            <Tuwueet
              key={tuwueet._id}
              text={tuwueet.text}
              created={tuwueet.createdAt}
              username={tuwueet.username}
              likes={tuwueet.likes}
              comments={tuwueet.comments}
              id={tuwueet._id}
            />
          ))
          .reverse()}
      </div>
    </main>
  );
}

export default Feed;
