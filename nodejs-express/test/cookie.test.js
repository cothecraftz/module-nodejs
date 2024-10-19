import supertest from "supertest";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"]; // or req.cookies.name
  res.json({ sayHello: `hello ${name}` });
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/" });
  res.json({ sayHello: `hello ${name}` });
});

test("test cookies read", async () => {
  const response = await supertest(app).get("/").set("Cookie", "name=joko;author=joko santoso");
  expect(response.body).toEqual({ sayHello: "hello joko" });
});

test("test cookie write", async () => {
  const response = await supertest(app).post("/login").send({ name: "joko" });
  expect(response.get("Set-Cookie").toString()).toBe("login=joko; Path=/");
  expect(response.body.sayHello).toEqual("hello joko");
});
