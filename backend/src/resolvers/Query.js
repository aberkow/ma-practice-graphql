const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils/hasPermission');

const Query = {
  users: forwardTo('db'),
  techniques: forwardTo('db'),
  combinations: forwardTo('db'),
  technique: forwardTo('db'),
  combination: forwardTo('db')
}

module.exports = Query;