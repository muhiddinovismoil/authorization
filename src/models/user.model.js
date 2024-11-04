import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    full_name: {
      type: String,
      minLength: [3, "Name must be at least 3"],
      maxLength: [40, "Name must be at least 40"],
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid email`,
      },
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minLength: [10, "Password must be at least 10"],
      maxLength: [100, "Password must be at least 100"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(this.password, salt);
  this.password = hashPassword;
});

userSchema.method("compare", function (password) {
  return bcrypt.compare(password, this.password);
});

export const User = mongoose.model("user", userSchema);
