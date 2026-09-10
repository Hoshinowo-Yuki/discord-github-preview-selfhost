import request from "supertest";
import app from "../src/app";

describe("Test /card/user/:id", () => {
  test("It should respond with an error for invalid ID", () => {
    return request(app)
      .get("/card/user/invalid")
      .then(response => {
        expect(response.statusCode).toBe(400);
      });
  });
  test("It should respond with my info", () => {
    return request(app)
      .get("/card/user/214167454291722241")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});