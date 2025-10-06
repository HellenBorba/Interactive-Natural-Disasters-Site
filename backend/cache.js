const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 300 }); // São 5 minutos de cache.

module.exports = cache;
