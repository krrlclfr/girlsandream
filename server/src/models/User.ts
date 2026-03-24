import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

// 🔐 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))

  this.password = await bcrypt.hash(this.password, 10);

});

// 🔑 Compare password
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export const User = mongoose.model<IUser>("Users", userSchema);