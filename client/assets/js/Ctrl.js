angular.module('application')
  .controller('NavController', ['$scope', '$state', function($scope, $state) {
    $scope.current = $state.current.name;

    var routes = angular.copy(foundationRoutes);

    //setup autocomplete
    $scope.routing = [];
    $scope.typedText = '';

    if(foundationRoutes) {
      angular.forEach(routes, function(r) {
        var title = r.title || r.name.replace('.', ' '); //use title if possible
        $scope.routing.push(title);
      });
    }

    $scope.selectRoute = function(routeName) {
      var title = routeName;
      var name = routeName.replace(' ', '.');

      //search for route
      angular.forEach(routes, function(r) {
        if(r.title && r.title === routeName) {
          $state.go(r.name);
          return;
        } else if (name === r.name) {
          $state.go(r.name);
          return;
        }
      });

    };
  }
]);
angular.module('application')
    .controller('SocialAppCtrl', SocialAppCtrl);
function SocialAppCtrl($scope){
        $scope.socialMenu=[
            {'nameIcon': 'grade'},
            {'nameIcon': 'done'},
            {'nameIcon': 'zoom_in'},
            {'nameIcon': 'visibility'}
        ];
        $scope.callback=[
            {'link':'vk.com',
             'name':'Вконтакте'},
            {'link':'twitter.com',
             'name':'Твиттер'}
        ];
        $scope.navList=[
            {'item':'Code',
             'link':'#'},
            {'item':'Build',
            'link':'#'},
            {'item':'Structure',
            'link':'#'},
            {'item':'Connect',
            'link':'#'},
            {'item':'Lead',
            'link':'#'}
        ]
    }