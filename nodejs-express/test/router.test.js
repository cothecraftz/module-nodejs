import supertest from "supertest";
import express from "express";

const routerMiddleware = (req, res, next) => {
  console.info(`request : ${req.originalUrl}`);
  next();
};

const app = express();
const router = express.Router();
router.use(routerMiddleware);

router.get("/feature/a", (req, res) => {
  res.send("feature a");
});

test("test router disabled", async () => {
  const response = await supertest(app).get("/feature/a");
  expect(response.status).toBe(404);
});

test("test router enabled", async () => {
  app.use(router);

  const response = await supertest(app).get("/feature/a");
  expect(response.text).toBe("feature a");
});
