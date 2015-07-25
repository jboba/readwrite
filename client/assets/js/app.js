(function () {
    'use strict';

    angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
        .config(config)
        .run(run)
        .controller('SocialAppCtrl', SocialAppCtrl);

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/home');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }

    //SocialAppCtrl
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
             'link':'code'},
            {'item':'Build',
            'link':'build'},
            {'item':'Structure',
            'link':'structure'},
            {'item':'Connect',
            'link':'connect'},
            {'item':'Lead',
            'link':'lead'}
        ]
    }
})();
