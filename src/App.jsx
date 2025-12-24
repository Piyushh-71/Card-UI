import Card from "./assets/Card.jsx";

export const users = [
  {
    fullName: "Aarav Sharma",
    nickname: "aarav.codes",
    coverImg: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    profileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    description: "Frontend dev & caffeine-powered React enjoyer.",
    postsCount: 87,
    followersCount: 12500,
    followingCount: 320,
    isFollowing: true,
  },
  {
    fullName: "Priya Verma",
    nickname: "priya.vibes",
    coverImg: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Travel, lifestyle & aesthetic content ✨",
    postsCount: 142,
    followersCount: 34200,
    followingCount: 410,
    isFollowing: false,
  },
  {
    fullName: "Rohan Patel",
    nickname: "rohannn.tech",
    coverImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    profileImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    description: "Backend engineer | API machine | Debugging pro 😭",
    postsCount: 110,
    followersCount: 9900,
    followingCount: 380,
    isFollowing: true,
  },
  {
    fullName: "Ananya Gupta",
    nickname: "ananya.g",
    coverImg: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Skincare, wellness & calm aesthetic 🌿",
    postsCount: 190,
    followersCount: 50200,
    followingCount: 289,
    isFollowing: false,
  },
  {
    fullName: "Kabir Mehta",
    nickname: "kabir.mehta",
    coverImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    profileImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    description: "Gym + gaming + coding = my personality 💀",
    postsCount: 64,
    followersCount: 9100,
    followingCount: 150,
    isFollowing: true,
  },
  {
    fullName: "Ishita Singh",
    nickname: "ishita.singh",
    coverImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    profileImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Designer, reader & chai lover ☕✨",
    postsCount: 213,
    followersCount: 41200,
    followingCount: 370,
    isFollowing: false,
  },
  {
    fullName: "Aditya Raj",
    nickname: "aditya.dev",
    coverImg: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    profileImg: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    description: "Full-stack learner documenting the grind.",
    postsCount: 121,
    followersCount: 17400,
    followingCount: 290,
    isFollowing: true,
  },
  {
    fullName: "Sneha Kapoor",
    nickname: "sneha.kapoor",
    coverImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    profileImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    description: "Dance, fitness & reels queen 💃🔥",
    postsCount: 301,
    followersCount: 65200,
    followingCount: 510,
    isFollowing: false,
  },
  {
    fullName: "Manav Joshi",
    nickname: "manav.js",
    coverImg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    profileImg: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    description: "JS addict, anime enjoyer & meme dealer.",
    postsCount: 77,
    followersCount: 7200,
    followingCount: 130,
    isFollowing: true,
  },
  {
    fullName: "Riya Chauhan",
    nickname: "riya.ch",
    coverImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    profileImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Fashion, reels & aesthetic creator ✨📸",
    postsCount: 188,
    followersCount: 38200,
    followingCount: 420,
    isFollowing: false,
  },
];

const App = () => {
  return (
    <div className=" bg-gray-800 p-[20px] flex justify-center flex-wrap gap-[40px]  ">
      {users.map((u, i) => (
        <Card key={i} user={u} />
      ))}
    </div>
  );
};

export default App;
