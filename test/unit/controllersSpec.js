/* jasmine specs for controllers go here */

describe('EventListCtrl', function() {
 
  describe('PhoneListCtrl', function() {
    var scope, $browser, ctrl;
 
    beforeEach(function() {
      scope = angular.scope();
      $browser = scope.$service('$browser');
 
      $browser.xhr.expectGET('event/event.json')
          .respond([{date: '7/4/2011'},
                    {place_name: 'Acid Bar'}]);
      ctrl = scope.$new(EventListCtrl);
    });
  });