"use strict";

const verifikasiAdmin = require('../middleware/verifikasi-admin');
const api_admin = require("../controllers/admin");  

module.exports = function (app) {

  //LOGIN
  app.route(`/api/admin/login`)
    .post(api_admin.account_controller.login);

  //MENU CONTROLLER
  app.route(`/api/admin/products`)
    .get(verifikasiAdmin,  api_admin.product_controller.products);

  app.route(`/api/admin/product/:id_product`)
    .get(verifikasiAdmin,  api_admin.product_controller.productId);

  app.route(`/api/admin/product/add`)
    .post(verifikasiAdmin,  api_admin.product_controller.productAdd);

  app.route(`/api/admin/product/edit/:id_product`)
    .put(verifikasiAdmin,  api_admin.product_controller.productEdit);

  app.route(`/api/admin/product/setstock/:id_product`)
    .put(verifikasiAdmin,  api_admin.product_controller.productSetStock);

  app.route(`/api/admin/product/delete/:id_product`)
    .delete(verifikasiAdmin,  api_admin.product_controller.productDelete);


  // ORDER CONTROLLER
  app.route(`/api/admin/orders`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrder);

  app.route(`/api/admin/order/:id_history`)
    .get(verifikasiAdmin,  api_admin.order_controller.orderId);

  app.route(`/api/admin/orders/0`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderPending);

  app.route(`/api/admin/orders/1`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderCancelByUser);

  app.route(`/api/admin/orders/2`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderCancelByAdmin);

  app.route(`/api/admin/orders/3`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderPaid);

  app.route(`/api/admin/orders/4`)
    .get(verifikasiAdmin,  api_admin.order_controller.allorderprocess);

  app.route(`/api/admin/orders/5`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderReady);

  app.route(`/api/admin/orders/6`)
    .get(verifikasiAdmin,  api_admin.order_controller.allOrderDone);


  //HANDLE CONTROLLER
  app.route(`/api/admin/order/cancel/:id_history`)
    .put(verifikasiAdmin,  api_admin.handle_controller.handleCancelByAdmin);

  app.route(`/api/admin/order/process/:id_history`)
    .put(verifikasiAdmin,  api_admin.handle_controller.handleProcess);

  app.route(`/api/admin/order/ready/:id_history`)
    .put(verifikasiAdmin,  api_admin.handle_controller.handleReady);

  app.route(`/api/admin/order/done/:id_history`)
    .put(verifikasiAdmin,  api_admin.handle_controller.handleDone);


  //STATISTIC CONTROLLER
  app.route(`/api/admin/order/total/done`)
    .get(verifikasiAdmin,  api_admin.statistic_controller.totalDone);

  app.route(`/api/admin/order/total/income/today`)
    .get(verifikasiAdmin,  api_admin.statistic_controller.totalIncomeToday);

  app.route(`/api/admin/order/total/income/month`)
    .get(verifikasiAdmin,  api_admin.statistic_controller.totalIncomeMonth);

  app.route(`/api/admin/order/total/income/monthly`)
    .get(verifikasiAdmin,  api_admin.statistic_controller.totalIncomeMonthly);

  app.route(`/api/admin/order/total/income/daily`)
    .get(verifikasiAdmin,  api_admin.statistic_controller.totalIncomeDaily);


  // INFORMATION CONTROLLER
  app.route(`/api/admin/information`)
    .get(verifikasiAdmin,  api_admin.information_controller.infoPayment);

  app.route(`/api/admin/information/edit`)
    .put(verifikasiAdmin,  api_admin.information_controller.editPaymnet);

};

