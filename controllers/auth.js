const user = require("../models/User");

const test = async (req, res) => {
    try {
        let newUser = new user({
          email: "test@test.com",
          password: "1234",
          emailConfirmed: true,
          security: [
            {
              tokens: [
                {
                  refreshToken: "'lkjhdfg",
                  createdAt: new Date(),
                },
              ],
            },
          ],
        });
        await newUser.save();
        res.send(newUser);
      } catch(err) {
        res.send(err);
      }
}

module.exports = {test};