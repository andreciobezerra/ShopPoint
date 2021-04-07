const proxy = require("express-http-proxy");
const router = require("express").Router();

//Include other resource Router
const reviewRouter = require("./review");

router
  .route("/")
  .get(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/product/" }))
  .post(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/product/" }));

router.use("/:productId/reviews", reviewRouter);

router
  .route("/:productId")
  .get(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/product/:productId" }))
  .put(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/product/:productId" }))
  .delete(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/product/:productId" }));

module.exports = router;
