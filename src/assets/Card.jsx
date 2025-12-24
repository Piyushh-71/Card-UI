import { Ellipsis } from "lucide-react";
import { UserRoundMinus } from "lucide-react";

import { UserRoundPlus } from "lucide-react";

import { users } from "../App.jsx";

const abc = () => {
  if (users.isFollowing === "true") {
    users.isFollowing = "false";
  } else {
    users.isFollowing = "true";
  }
};

const card = ({ user }) => {
  return (
    <div className="relative h-[400px] select-none w-[300px]  flex flex-col gap-[15px] bg-white rounded-[10px]">
      <img
        className="object-cover h-[180px]  w-full rounded "
        src={user.coverImg}
        alt=""
      />
      <h1
        onClick={abc}
        className="h1 active:scale-90 transition-discrete duration-500 cursor-pointer absolute top-[5%] right-[4%] bg-gray-300 opacity-80 w-fit backdrop-blur-xl rounded-2xl p-[10px] inline-flex gap-1.5 items-center text-[10px]"
      >
        {user.isFollowing ? "Unfollow" : "Follow"}
        {user.isFollowing ? (
          <UserRoundMinus size={13} strokeWidth={2} />
        ) : (
          <UserRoundPlus size={13} strokeWidth={2} />
        )}
      </h1>

      <div className="flex gap-[5px] select-none flex-col items-center">
        <img
          className="object-cover absolute h-[70px] w-[70px] object-center top-[34%] rounded-full"
          src={user.profileImg}
          alt=""
        />
        <h1 className="text-[20px] mt-[10px] capitalize text-black">
          {user.nickname}
        </h1>
        <h2 className="text-[15px] font-semibold  text-gray-600">
          {user.fullName}
        </h2>
        <span className="mt-[10px] ">
          <p className="text-[10px]   capitalize text-gray-800">
            {user.description}
          </p>
          <hr className="mt-[10px] w-[90px] h-[2px] opacity-15 ml-13 " />
        </span>
      </div>
      <div className="flex gap-6 text-center justify-center select-none  w-full items-center ">
        <span>
          <p className="text-[10px] font-semibold text-gray-800">Post</p>
          <h1 className="text-[14px]">{user.postsCount}</h1>
        </span>
        <span>
          <p className="text-[10px] font-semibold text-gray-800">Follwers</p>
          <h1 className="text-[14px]">{user.followersCount}k</h1>
        </span>
        <span>
          <p className="text-[10px] font-semibold text-gray-800">Following</p>
          <h1 className="text-[14px]">{user.followingCount}</h1>
        </span>
        <h1 className=" cursor-pointer active:scale-90 transition-discrete duration-500 text-gray-700 absolute top-[48%] right-[5%]">
          <Ellipsis />
        </h1>
      </div>
    </div>
  );
};

export default card;
