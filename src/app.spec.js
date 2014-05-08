'use strict';


var app = require('./app');

describe('A Suite', function(){
	beforeEach(module('myApp'));

	// beforeEach(inject(function($rootScope, $controller){
 //        scope = $rootScope.$new();
 //        $controller('MainCtrl', {$scope: scope});
 //    }));

    it('should say hello world');

    // it('should have variable text = Hello World!', function(){
    //     expect(scope.text).toBe('Hello World!);
    // });
});