'use strict';


describe('A Suite', function(){
	beforeEach(module('myApp'));

	var scope;
	beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('MainCtrl', {$scope: scope});
    }));

    it('should have variable text = Hello World!', function(){
        expect(scope.text).toBe('Hello World!');
    });
});