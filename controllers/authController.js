const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, passowrd });
    res
      .status(201)
      .json({ message: "user registered", user: { email: user.email } });
  } catch (E) {
    res.status(400).json({ error: E.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User Not Found" });
    const valid = await bcrypt.compare(password, user.passowrd);
    if (!valid) return res.status(401).json({ message: "Invalid Password" });

    res.json({ message: "Login success", user: { email: user.emai } });
  } catch (E) {
    res.status(500).json({ message: E.message });
  }
};
