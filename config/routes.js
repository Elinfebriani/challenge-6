const express = require("express");
const controllers = require("../app/controllers");

const appRouter = express.Router();
const apiRouter = express.Router();

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 */

//routing API server tabel hewan
apiRouter.get("/api/v1/datahewan", controllers.api.v1.hewan.list);
apiRouter.post("/api/v1/datahewan", controllers.api.v1.hewan.create);
apiRouter.put(
  "/api/v1/datahewan/:id",
  controllers.api.v1.hewan.setHewan,
  controllers.api.v1.hewan.update
);
apiRouter.get(
  "/api/v1/datahewan/:id",
  controllers.api.v1.hewan.setHewan,
  controllers.api.v1.hewan.show
);
apiRouter.delete(
  "/api/v1/datahewan/:id",
  controllers.api.v1.hewan.setHewan,
  controllers.api.v1.hewan.destroy
);

//routing API server tabel penitipan
apiRouter.get("/api/v1/datapenitipan", controllers.api.v1.penitipan.list);
apiRouter.post("/api/v1/datapenitipan", controllers.api.v1.penitipan.create);
apiRouter.put(
  "/api/v1/datapenitipan/:id",
  controllers.api.v1.penitipan.setPenitipan,
  controllers.api.v1.penitipan.update
);
apiRouter.get(
  "/api/v1/datapenitipan/:id",
  controllers.api.v1.penitipan.setPenitipan,
  controllers.api.v1.penitipan.show
);
apiRouter.delete(
  "/api/v1/datapenitipan/:id",
  controllers.api.v1.penitipan.setPenitipan,
  controllers.api.v1.penitipan.destroy
);



/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
appRouter.get("/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

appRouter.use(apiRouter);

/** Mount Not Found Handler */
appRouter.use(controllers.main.onLost);

/** Mount Exception Handler */
appRouter.use(controllers.main.onError);

module.exports = appRouter;
