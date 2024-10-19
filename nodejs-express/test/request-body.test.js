import supertest from "supertest";
import express from "express";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload());

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ sayHello: `hello ${name}` });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ sayHello: `hello ${name}` });
});

app.post("/file", async (req, res) => {
  const textFile = req.files.article;
  await textFile.mv(__dirname + "/upload/" + textFile.name);

  res.send(`hello ${req.body.name}, file uploaded ${textFile.name}`);
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

test("test request body file", async () => {
  const response = await supertest(app)
    .post("/file")
    .set("Content-Type", "multipart/form-data")
    .field("name", "joko")
    .attach("article", __dirname + "/contoh.txt");

  expect(response.text).toBe("hello joko, file uploaded contoh.txt");
});
