var services = angular.module('services', [ 'ngResource']);

services.factory('CarService', [ '$resource', function($resource) {
	return $resource('cars/:id');
} ]); 