export const signup = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email formate" });
    }
  } catch (error) {}
};

export const login = async (req, res) => {
  res.json({
    data: "Hello Senesh",
  });
};

export const logout = async (req, res) => {
  res.json({
    data: "Hello Senesh",
  });
};
