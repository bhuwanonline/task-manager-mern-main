import { Schema, model } from "mongoose";
import Joi from "joi";

interface InterfaceTasks {
  title: string;
  description: string;
  completedStatus: boolean;
}

const taskSchema = new Schema<InterfaceTasks>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completedStatus: { type: Boolean, required: true, default: false },
});

export const TaskSchemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const Task = model<InterfaceTasks>("Task", taskSchema);
