const express = require("express");
const controllers = require("../app/controllers");

const appRouter = express.Router();
const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

//routing API server tabel user
apiRouter.post("/api/v1/register",
  controllers.api.v1.users.register
);

apiRouter.get("/api/v1/users/:id",
  controllers.api.v1.users.getUser
);

apiRouter.put("/api/v1/users/:id",
  controllers.api.v1.users.update
);

apiRouter.delete("/api/v1/users/:id",
  controllers.api.v1.users.delete
);

appRouter.get("/api/v1/users",
  controllers.api.v1.users.getAll
);



//routing API server tabel car
apiRouter.post("/api/v1/create",
  controllers.api.v1.cars.create
);

apiRouter.get("/api/v1/cars",
  controllers.api.v1.cars.getAll
);

apiRouter.get("/api/v1/cars/:id",
  controllers.api.v1.cars.getCar
);

apiRouter.put("/api/v1/cars/:id",
  controllers.api.v1.cars.update
);

apiRouter.delete("/api/v1/cars/:id",
  controllers.api.v1.cars.delete
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
