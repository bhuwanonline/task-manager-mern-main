import app, { server } from "../index";
const mongoose = require("mongoose");
import request from "supertest";
import { response } from "express";

describe("POST /api/Task", () => {
  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });

  it("Task created successfully", async () => {
    const response = await request(app).post("/api/tasks").send({
      title: "title created from test",
      description: "Desc created from test",
    });
    expect(response.status).toBe(201);
    expect(response.text).toBe("Task Created");
  });

  it("Task loaded successfully", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.status).toBe(200);
  });

  it("Tasks creation failed scenario", async () => {
    const response = await request(app).post("/api/tasks").send({
      title: "title created from test",
    });
    expect(response.status).toBe(500);
  });
});
