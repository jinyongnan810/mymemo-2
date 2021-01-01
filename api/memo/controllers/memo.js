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
        eager: "w_400,h_300,c_pad|w_260,h_200,c_crop",
        public_id: "kinspage",
      },
      process.env.API_SECRET
    );

    ctx.send({ timestamp, signature });
  },
};
