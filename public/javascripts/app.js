/*'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.myServices', 'myApp.myMsgServices',
	'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/car', {templateUrl: 'partials/car.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);*/

var app = angular.module("myApp",['ngResource']);

var ctrl = function Ctrl($scope, $resource)
{
	$scope.total = 0;
  $scope.misProductos = [];
  
  var Producto = $resource('/productos/:id',
                          {id:'@id'},
                           {
                             update: { method : 'put', isArray : false},
                             delete: { method : 'delete', isArray : false } 
                           }
                  );
  
  $scope.newProducto = new Producto();

   $scope.totalizar = function()
                        {
                            $scope.total = 0;
                            angular.forEach($scope.misProductos, function(producto) 
                            {
                                $scope.total += producto.cantidad * producto.precio;
                                producto.selected = (producto.cantidad == 0) ? true : false;
                            });
                        }
    
  $scope.agregar = function()
                   {
                     $scope.newProducto.id 
                       ?
                       $scope.newProducto.$update(function(){
                         $scope.newProducto = Producto();                               
                       })
                       :                     
                         $scope.newProducto.$save(function(data)
                                              {
                                                $scope.misProductos.push($scope.newProducto);
                                                $scope.newProducto = Producto();
                                              });  
                   }
  
  Producto.query(function(data)
                  {
                    $scope.misProductos = data;
                    console.log("Productos del server");
                    console.log(data);
                  });
  
  $scope.update = function(p)
                  {
                    $scope.newProducto = p;
                  }
  
  $scope.borrar = function(p,i)
                  {
                    p.$delete(function()
                              {
                                $scope.misProductos.splice(i,1);
                              }
                             );
                  }


}

app.controller('Ctrl',ctrl);
