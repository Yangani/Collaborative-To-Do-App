Tasks = new Mongo.collection('tasks');

if (Meteor.isClient) {
  angular.module('todos',['angular-meteor']);

  angular.module('todos').controller('TodosListCtrl', ['$scope',
    function($scope) {

      $scope.tasks = [
       {text: 'This is task 1'},
       {text: 'This is task 2'},
       {text: 'This is task 3'},
       {text: 'This is task 4'},
       {text: 'This is task 5'}
      ];
    }
    ]);
}




 /* // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });*/

//275px; font size
