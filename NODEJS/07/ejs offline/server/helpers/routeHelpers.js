// server/helpers/routeHelpers.js
const isActiveRoute = (route, path) => {
    return route === path ? 'active' : '';
  };
  
  module.exports = { isActiveRoute };