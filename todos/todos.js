Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  angular.module('todos',['angular-meteor']);

  angular.module('todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function($scope, $meteor) {

      $scope.tasks = $meteor.collection(Tasks);

      $scope.addTask = function(newTask) {
        $scope.tasks.push({
          text:newTask,
          createdAt: new Date()
        });
      };

    }]);
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
