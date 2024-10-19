import supertest from "supertest";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("RAHASIA"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["login"];
  res.json({ sayHello: `hello ${name}` });
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/", signed: true });
  res.json({ sayHello: `hello ${name}` });
});

test("test cookies read", async () => {
  const response = await supertest(app)
    .get("/")
    .set("Cookie", "login=s%3Ajoko.5JIi4V1qI408khb6hyfNhvt46b9aBHFisyi6QcSrD8E; Path=/");
  expect(response.body).toEqual({ sayHello: "hello joko" });
});

test("test cookie write", async () => {
  const response = await supertest(app).post("/login").send({ name: "joko" });
  console.info(response.get("Set-Cookie").toString());
  expect(response.get("Set-Cookie").toString()).toContain("joko");
  expect(response.body.sayHello).toEqual("hello joko");
});
