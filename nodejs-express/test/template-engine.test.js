import supertest from "supertest";
import express from "express";
import mustacheExpress from "mustache-express";

const app = express();

app.engine("html", mustacheExpress());

app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "mustache page",
    say: "hello world",
  });
});

test("test template engine mustche express", async () => {
  const response = await supertest(app).get("/");
  expect(response.text).toContain("mustache page");
  expect(response.text).toContain("hello world");
});
