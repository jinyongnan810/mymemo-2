"use strict";
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async signature(ctx) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    var signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        upload_preset: "ml_default",
      },
      process.env.API_SECRET
    );

    ctx.send({ timestamp, signature });
  },
};
