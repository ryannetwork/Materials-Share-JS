// server/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google", "facebook"],
    required: true
  },
  local: {
    email: {
      type: String,
      lowercase: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      followers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      following: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ]
    },
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

// let UserSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
//   },
//   password: { type: String, required: true },
//   provider: String,
//   provider_id: String,
//   token: String,
//   provider_pic: String,
//   followers: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User"
//     }
//   ],
//   following: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User"
//     }
//   ]
// });
UserSchema.methods.follow = function(user_id) {
  if (this.following.indexOf(user_id) === -1) {
    this.following.push(user_id);
  }
  return this.save();
};
UserSchema.methods.addFollower = function(fs) {
  this.followers.push(fs);
};

UserSchema.pre("save", async function(next) {
  try {
    console.log("entered");
    if (this.method !== "local") {
      next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash (salt + hash)
    const passwordHash = await bcrypt.hash(this.local.password, salt);
    // Re-assign hashed version over original, plain text password
    this.local.password = passwordHash;
    console.log("exited");
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
