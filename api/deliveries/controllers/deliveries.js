'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.deliveries.search(ctx.query);
        } else {
          entities = await strapi.services.deliveries.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.deliveries }));
      },
};
