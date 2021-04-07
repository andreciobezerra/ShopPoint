const proxy = require("express-http-proxy");
const router = require("express").Router();

router
  .route("/")
  .get(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order" }))
  .post(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order" }));

router
  .route("/authOrders")
  .get(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/authOrders" }));

router
  .route("/:orderId")
  .get(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/:orderId" }))
  .put(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/:orderId" }))
  .delete(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/:orderId" }));

router
  .route("/:orderId/pay")
  .post(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/:orderId/pay" }));

router
  .route("/:orderId/deliver")
  .post(proxy(process.env.PRODUCT_MS_HOST, { proxyReqPathResolver: (req) => "/api/order/deliver" }));

module.exports = router;
