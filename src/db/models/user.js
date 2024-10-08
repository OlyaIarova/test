

import { Schema, model } from 'mongoose';

const usersSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, require: true },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['woman', 'man'],
      required: true,
      default: 'woman',
    },
    photo: {
      type: String,
    },
    dailyNorma: { type: Number, default: 2000, required: true },
  },
  { timestamps: true, versionKey: false },
);

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', usersSchema);