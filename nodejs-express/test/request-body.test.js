import supertest from "supertest";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ sayHello: `hello ${name}` });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ sayHello: `hello ${name}` });
});

test("test request body json", async () => {
  const response = await supertest(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "joko" });
  expect(response.body).toEqual({ sayHello: "hello joko" });
});

test("test request body form", async () => {
  const response = await supertest(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=joko");
  expect(response.body).toEqual({ sayHello: "hello joko" });
});
