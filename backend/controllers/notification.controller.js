import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

export const getNotification = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    const notifications = await Notification.find({ to: user }).populate({
      path: "from",
      select: "username profileImg",
    });

    await Notification.updateMany({ to: user }, { read: true });

    res.status(200).json(notifications);
  } catch (error) {
    console.log("Error in getNotification function");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    await Notification.deleteMany({ to: user });

    res.status(200).json({ message: "Notifications deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNotifications function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notificationId = req.params.id;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    const notification = await Notification.findById(notificationId);

    if (!notification)
      return res.status(404).json({ error: "Notification not found" });

    if (notification.to.toString() !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You are not allowed to delete this notification" });
    }

    await Notification.findByIdAndDelete(notificationId);

    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNotification function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
