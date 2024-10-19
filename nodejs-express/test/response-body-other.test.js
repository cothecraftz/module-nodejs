import supertest from "supertest";
import { app } from "../src/hello";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/contoh.txt");
});

test("test response body other", async () => {
  const response = await supertest(app).get("/");
  expect(response.text).toBe("This is sample text");
});
