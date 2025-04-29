import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProfileQuery } from "../slices/usersApiSlice";
import { editProfile } from "../slices/userProfileSlice";

function Profile() {
  const { userInfo } = useSelector((state) => state.userProfile);
  const { username } = useSelector((state) => state.auth.userInfo);

  const dispatch = useDispatch();

  const { data, isLoading } = useProfileQuery(undefined, {
    skip: !!userInfo,
  });

  useEffect(() => {
    if (data && !userInfo) {
      dispatch(editProfile(data));
    }
  }, [data, userInfo]);

  return (
    <aside className="w-[300px] p-4 hidden lg:flex flex-col h-full overflow-y-auto">
      <div className="bg-[#192734] p-4 rounded-xl">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-4" />

        <h2 className="text-xl font-bold text-center mb-1">
          {username || "Guest"}
        </h2>

        <p className="text-sm text-gray-300 mb-2">{userInfo?.bio}</p>

        <div className="text-sm text-gray-400 mb-2">
          📍 {userInfo?.location}
        </div>
        <div className="text-sm text-blue-400 mb-2">
          🔗{" "}
          <a
            href="https://www.google.com"
            className="hover:underline"
            target="#"
          >
            {userInfo?.website}
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-4">
          📅 Joined {userInfo?.joined}
        </div>

        {/* Edit Profile Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-1 rounded-full font-semibold cursor-pointer">
          Edit profile
        </button>
      </div>
    </aside>
  );
}

export default Profile;
