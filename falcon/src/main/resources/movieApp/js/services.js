angular.module('movieApp.services', []).factory('Movie', function($resource) {
  return $resource('localhost/#/movies/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});