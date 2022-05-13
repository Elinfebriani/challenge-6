const express = require("express");
const controllers = require("../app/controllers");
const middlewares = require("../app/middlewares");

const appRouter = express.Router();
const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

//routing API server tabel user
apiRouter.post("/api/v1/register",
  controllers.api.v1.users.checkCondition,
  controllers.api.v1.users.register
);

apiRouter.get("/api/v1/users/:id",
  middlewares.authorization.authorize,
  controllers.api.v1.users.getUser
);

apiRouter.put("/api/v1/users/:id",
  middlewares.authorization.checkSameIdOrAdmin,
  controllers.api.v1.users.update
);

apiRouter.delete("/api/v1/users/:id",
  middlewares.authorization.checkSameIdOrAdmin,
  controllers.api.v1.users.delete
);

apiRouter.get("/api/v1/users",
  middlewares.authorization.authorize,
  controllers.api.v1.users.getAll
);

apiRouter.post("/api/v1/login",
  controllers.api.v1.users.checkData,
  controllers.api.v1.users.login
);

appRoute.put("/api/v1/users/:id/update-admin",
  middlewares.authorization.checkSuperAdmin,
  controllers.api.v1.users.intoAdmin
);



//routing API server tabel car
apiRouter.post("/api/v1/create",
  middlewares.authorization.checkAdmin,
  controllers.api.v1.cars.create
);

apiRouter.get("/api/v1/cars",
  middlewares.authorization.authorize,
  controllers.api.v1.cars.getAllCreatedCars
);

apiRouter.get("/api/v1/accessadmin/cars",
  middlewares.authorization.checkAdmin,
  controllers.api.v1.cars.getAll
);

apiRouter.get("/api/v1/cars/deleted",
  middlewares.authorization.checkAdmin,
  controllers.api.v1.cars.getDeletedCars
);

apiRouter.get("/api/v1/cars/:id",
  middlewares.authorization.authorize,
  controllers.api.v1.cars.getCar
);

apiRouter.put("/api/v1/cars/:id",
  middlewares.authorization.checkAdmin,
  controllers.api.v1.cars.update
);

apiRouter.delete("/api/v1/cars/:id",
  middlewares.authorization.checkAdmin,
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
