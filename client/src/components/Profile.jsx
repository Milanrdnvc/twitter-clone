import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useEditProfileMutation,
  useProfileQuery,
} from "../slices/usersApiSlice";
import { editProfile } from "../slices/userProfileSlice";
import { toast } from "react-toastify";

function Profile({ alwaysVisible = false }) {
  const { userInfo } = useSelector((state) => state.userProfile);
  const { username } = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : { username: "Guest" }
  );
  const loggedIn = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const { data, isLoading } = useProfileQuery(undefined, {
    skip: !!userInfo,
  });
  const [editProfileM, { isLoadingEdit, error }] = useEditProfileMutation();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    bio: userInfo?.bio,
    location: userInfo?.location,
    website: userInfo?.website,
  });

  const handleEditProfile = async () => {
    if (editMode) {
      try {
        const res = await editProfileM({
          bio: profile.bio,
          location: profile.location,
          website: profile.website,
        }).unwrap();

        dispatch(
          editProfile({
            ...res,
          })
        );
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }

    setEditMode((prev) => !prev);
  };

  useEffect(() => {
    if (data && !userInfo && loggedIn) {
      setProfile({
        bio: data.bio,
        location: data.location,
        website: data.website,
      });
      dispatch(editProfile(data));
    }
  }, [data, userInfo]);

  return (
    <aside
      className={`w-[300px] p-4 ${
        alwaysVisible ? "flex" : "hidden lg:flex"
      } flex-col h-full overflow-y-auto`}
    >
      <div className="bg-gray-900 p-4 rounded-xl">
        <div className="w-20 h-20 rounded-full bg-gray-700 mx-auto mb-4" />

        <h2 className="text-xl font-bold text-center mb-1">{username}</h2>

        {editMode ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={(e) =>
              setProfile({ ...profile, [e.target.name]: e.target.value })
            }
            rows="3"
            className="text-sm text-gray-300 mb-2 bg-gray-800 rounded p-1 w-full"
          />
        ) : (
          <p className="text-sm text-gray-300 mb-2">{userInfo?.bio}</p>
        )}

        {editMode ? (
          <input
            name="location"
            value={profile.location}
            onChange={(e) =>
              setProfile({ ...profile, [e.target.name]: e.target.value })
            }
            className="text-sm text-gray-400 mb-2 bg-gray-800 rounded p-1 w-full"
          />
        ) : (
          <div className="text-sm text-gray-400 mb-2">
            📍 {userInfo?.location}
          </div>
        )}

        {editMode ? (
          <input
            name="website"
            value={profile.website}
            onChange={(e) =>
              setProfile({ ...profile, [e.target.name]: e.target.value })
            }
            className="text-sm text-blue-400 mb-2 bg-gray-800 rounded p-1 w-full"
          />
        ) : (
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
        )}

        <div className="text-sm text-gray-400 mb-4">
          📅 Joined{" "}
          {userInfo &&
            new Date(userInfo.joined).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </div>

        {!!loggedIn && (
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-1 rounded-full font-semibold cursor-pointer"
            onClick={handleEditProfile}
          >
            {editMode ? "Save" : "Edit Profile"}
          </button>
        )}
      </div>
    </aside>
  );
}

export default Profile;
