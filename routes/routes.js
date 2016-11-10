export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    require('../components/SecondMondayApp/index.scss');
    var Controller = require('../components/SecondMondayApp/SecondMondayAppController');
    $urlRouterProvider.otherwise('/home');


    $stateProvider
        .state('tab', {
            url: '/tab',
            templateUrl: '../components/SecondMondayApp/main.html',
            controller: Controller
        })
        .state('tab.tab1', {
            url: '/tab1',
            templateUrl: '../components/SecondMondayApp/Step1.html'
        })
        .state('tab.tab2', {
            url: '/tab2',
            templateUrl: '../components/SecondMondayApp/Step2.html'
        })
        .state('tab.tab3', {
            url: '/tab3',
            templateUrl: '../components/SecondMondayApp/Step3.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: '../components/SecondMondayApp/home.html',
            controller: Controller

        });

}
