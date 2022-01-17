
const User = require("../models/user");


module.exports = {
  editProfile: async function ({ firstName,lastName,email, city }, req) {

    const user = await User.findOne({ phoneNumber: 6169532698 });
      
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      user.streetLine1 = "Lange Wal 58,Arnhem";
      user.city = city;
      user.bankAccount = "NL ABNL 0581 123456";
      user.phoneNumber = 6169532698;
      
    await user.save();
    return true;
   
  },
  getDetails: async function ({ phoneNumber}, req) {
    const user = await User.findOne({ phoneNumber: phoneNumber });
    console.log(user);
    if (!user) {
      const error = new Error("User not found.");
      error.code = 401;
      throw error;
    }
  
    return {
      ...user._doc,
      _id: user._id.toString(),
    };;
  },
  
};
