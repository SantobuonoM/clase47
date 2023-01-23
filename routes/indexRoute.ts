import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";

import {
  createColor,
  findColor,
  pageColor,
} from "../controllers/colorsControllers.ts";

export const router = new Router()
  .get("/api/colors", findColor)
  .post("/api/colors", createColor)
  .get("/", pageColor);
