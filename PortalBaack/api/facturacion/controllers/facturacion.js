'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.facturacion.create(data, { files });
        } else {
          entity = await strapi.services.facturacion.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.facturacion });
      },
};
