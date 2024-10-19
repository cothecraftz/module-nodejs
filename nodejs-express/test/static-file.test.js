import supertest from "supertest";
import express from "express";

const app = express();

// app.use(express.static(__dirname + "/static")); // contoh.txt
app.use("/static", express.static(__dirname + "/static")); // /static/contoh.txt

app.get("/", (req, res) => {
  res.send("hello response");
});

app.get("/contoh.txt", (req, res) => {
  res.send("hello response");
});

test("test static file", async () => {
  const response = await supertest(app).get("/");
  expect(response.text).toBe("hello response");
});

test("test static file contoh.txt", async () => {
  const response = await supertest(app).get("/contoh.txt");
  expect(response.text).toBe("hello response");
});

test("test static file /static/contoh.txt", async () => {
  const response = await supertest(app).get("/static/contoh.txt");
  expect(response.text).toBe("This is sample text");
});
