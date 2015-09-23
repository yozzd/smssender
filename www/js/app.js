// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'restangular'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://202.52.59.212:9000/api');
    RestangularProvider.setDefaultHttpFields({
        cache: false
    });
    RestangularProvider.setRequestInterceptor(function (elem, operation) {
        if (operation === 'remove') {
            return undefined;
        }
        return elem;
    });

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html'
        })
        .state('app.laporan', {
            url: '/laporan',
            views: {
                'menuContent': {
                    templateUrl: 'templates/laporan.html'
                }
            }
        })
        .state('app.laporan.produsen', {
            url: '/produsen',
            views: {
                'laporan-produsen': {
                    templateUrl: 'templates/laporan-produsen.html',
                    controller: 'LaporanProdusenCtrl'
                }
            }
        })
        .state('app.laporan.grosir', {
            url: '/grosir',
            views: {
                'laporan-grosir': {
                    templateUrl: 'templates/laporan-grosir.html',
                    controller: 'LaporanGrosirCtrl'
                }
            }
        })
        .state('app.laporan.eceran', {
            url: '/eceran',
            views: {
                'laporan-eceran': {
                    templateUrl: 'templates/laporan-eceran.html',
                    controller: 'LaporanEceranCtrl'
                }
            }
        })
        .state('app.sender', {
            url: '/sender',
            views: {
                'menuContent': {
                    templateUrl: 'templates/sender.html'
                }
            }
        })
        .state('app.sender.produsen', {
            url: '/produsen',
            views: {
                'sender-produsen': {
                    templateUrl: 'templates/sender-produsen.html',
                    controller: 'SenderProdusenCtrl'
                }
            }
        })
        .state('app.sender.grosir', {
            url: '/grosir',
            views: {
                'sender-grosir': {
                    templateUrl: 'templates/sender-grosir.html',
                    controller: 'SenderGrosirCtrl'
                }
            }
        })
        .state('app.sender.eceran', {
            url: '/eceran',
            views: {
                'sender-eceran': {
                    templateUrl: 'templates/sender-eceran.html',
                    controller: 'SenderEceranCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/laporan');
});