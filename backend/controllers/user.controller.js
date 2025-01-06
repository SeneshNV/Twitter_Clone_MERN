import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserProfile: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
// export const getUserProfile = async (req, res) => {
//   res.json({
//     data: "Hello Senesh",
//   });
// };
export const followUnfollowUser = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const updateUserProfile = async (req, res) => {
  res.json({
    data: "Hello Senesh",
  });
};
