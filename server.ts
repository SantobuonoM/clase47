import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";

import { router } from "./routes/indexRoute.ts";
import { logger } from "./middlewares/loggers.ts";

const PORT = 8080;
const app = new Application();

app.use(logger);
app.use(router.routes());

console.log(`Server up on port ${PORT}`);

await app.listen({ port: Number(PORT) });
