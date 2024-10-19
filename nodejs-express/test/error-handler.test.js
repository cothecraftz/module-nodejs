import supertest from "supertest";
import { app } from "../src/hello";

const errorHandler = (err, req, res, next) => {
  res.status(500).send("Terjadi error : " + err.message);
};

app.get("/", (req, res) => {
  throw new Error("Ups");
});

app.use(errorHandler);

test("test response error", async () => {
  const response = await supertest(app).get("/");
  expect(response.status).toBe(500);
  expect(response.text).toBe("Terjadi error : Ups");
});
