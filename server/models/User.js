const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Provide name"],
    },
    email: {
      type: String,
      required: [true, "Provide email"],
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: [true, "Provide password"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);

module.exports = User;