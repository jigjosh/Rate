// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function () {
    'use strict';
    angular.module('RateApp', ['ionic', 'firebase'])
        .run(function ($ionicPlatform, $rootScope) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }

            })
        }).
    config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
            function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.views.transition('none');

            $urlRouterProvider.otherwise('pricestream');

            $stateProvider.
            state('pricestream', {
                url: "/pricestream",
                templateUrl: 'js/view/pricestream.html'
            }).
            state('aboutus', {
                url: "/aboutus",
                templateUrl: 'js/view/aboutus.html'
            }).
            state('buyback', {
                url: "/buyback",
                templateUrl: 'js/view/buyback.html'
            }).
            state('delivery', {
                url: "/delivery",
                templateUrl: 'js/view/delivery.html'
            }).
            state('paylater', {
                url: "/paylater",
                templateUrl: 'js/view/paylater.html'
            }).
            state('termsandcondition', {
                url: "/termsandcondition",
                templateUrl: 'js/view/termsandcondition.html'
            });
   }]).
    filter('datetime', function ($filter) {
        return function (input) {
            if (input == null) {
                return "";
            }

            var _date = $filter('date')(new Date(input),
                'MMM dd yyyy - HH:mm:ss');
            return _date.toUpperCase();

        };
    }).
    controller('pricestreamController', ['$scope', '$firebaseObject', '$filter', '$http', '$ionicModal', '$ionicPlatform',

        function ($scope, $firebaseObject, $filter, $http, $ionicModal, $ionicPlatform) {

            $scope.imagesrc = "file:///android_asset/www/img/ProductImage/100g_LIVELLI.png";
            $ionicModal.fromTemplateUrl('img-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                scope: $scope,
                $scope.modal = modal
            })

            $scope.openModal = function (index) {
                $ionicPlatform.ready(function () {
                    console.log($scope.items[index].image);
                    $scope.currentIndex = index;
                    $scope.modal.show()
                })
            }

            $scope.closeModal = function () {
                $scope.modal.hide();
            };

            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });

            var strDay = $filter('date')(new Date(), 'EEEE', 'GST');
            var inttime = Number($filter('date')(new Date(), 'HH', 'GST'));
            var callusNo = "+971 4 3380909"

            if (strDay === 'Friday') {
                if ((inttime < 15) || (inttime > 21)) {
                    callusNo = "+971 056 1161826"
                };

            } else {
                if ((inttime < 10) || (inttime > 21)) {
                    callusNo = "+971 056 1161826"
                }
            }
            $scope.callus = "tel:" + callusNo;
            $scope.askdata = {};
            $scope.biddata = {};

            $scope.asksilverdata = {};
            $scope.askplatinumdata = {};


            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };
            $scope.bidRate = "$0.00";
            $scope.askRate = "$0.00";
            $scope.margindata = {};
            $scope.items = [
                {
                    "Name": "KILO BAR 995",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 995,
                    "Margin": 70,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "1_KG_GOLD_BAR.png"

                }
                ,
                {
                    "Name": "TT BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 116.52336,
                    "Margin": 25,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "TT_BAR.png"
                },
                {
                    "Name": "100 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 100,
                    "Margin": 117,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "100g_LIVELLI.png"
        },
                {
                    "Name": "50 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 50,
                    "Margin": 83,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "50g_Gold_03.png"
        },
                {
                    "Name": "1 OUNCE RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 31.1034,
                    "Margin": 67,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "1OZ_GOLD_03.png"
        },
                {
                    "Name": "20 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 20,
                    "Margin": 58,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "20g_GOLD_04.png"
        },
                {
                    "Name": "10 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 10,
                    "Margin": 42,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "10g_GOLD_01.png"
        },
                {
                    "Name": "5 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 5,
                    "Margin": 26,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "5g_GOLD_03.png"

        },
                {
                    "Name": "2.5 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 2.5,
                    "Margin": 34,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "2_5g_GOLD_03.png"

        },
                {
                    "Name": "1 GM RECTANGLE BAR",
                    "UOMConFactor": 31.1034,
                    "USDExRate": 3.674,
                    "Weight": 1,
                    "Margin": 24,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "1",
                    "image": "1-GM-GOLD-BAR.png"
        },
                {
                    "Name": "1 OUNCE PLATINUM BAR",
                    "UOMConFactor": 1,
                    "USDExRate": 3.674,
                    "Weight": 1,
                    "Margin": 257,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "2",
                    "image": ""
        },
                {
                    "Name": "SILVER KILO BAR 999",
                    "UOMConFactor": 1,
                    "USDExRate": 3.674,
                    "Weight": 32.15,
                    "Margin": 118,
                    Rate: 0,
                    "bgitem": "#000000",
                    "coloritem": "wheat",
                    "bgrate": "wheat",
                    "colorrate": "#000000",
                    "Type": "3",
                    "image": ""
        }
    ];

            Firebase.INTERNAL.forceWebSockets();
            var ref = new Firebase("https://wingoldnext.firebaseio.com/path/margin");
            ref.on("value", function (snapshot) {
                var obj;
                angular.forEach(snapshot.val(), function (value) {
                    if ((typeof value === 'object') && (value !== null)) {
                        obj = $scope.items.filter(function (obj) {
                            return obj.Name === value.ItemName;
                        })[0];

                        if (obj !== undefined) {
                            obj.Margin = Number(value.MarginValue);
                        }
                    };
                });

            }, function (errorObject) {
                // console.log("The read failed: " + errorObject.code);
            });



            ref = new Firebase("https://wingoldnext.firebaseio.com/path/goldask");
            //var sync = $firebase(ref);
            var syncObject = $firebaseObject(ref); //sync.$asObject();


            $scope.$watch('askdata', function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                $scope.askRate = "$" + numberWithCommas(Number(newValue.value).toFixed(2));
                angular.forEach($scope.items, function (item, key) {
                    if (item.Type === "1") {
                        item.Rate = numberWithCommas(Number(((((newValue.value / item.UOMConFactor) * item.USDExRate) * item.Weight) + item.Margin).toFixed(0)));
                    }

                })
            });
            syncObject.$bindTo($scope, "askdata");

            ref = new Firebase("https://wingoldnext.firebaseio.com/path/pletinum");
            //sync = $firebase(ref);
            syncObject = $firebaseObject(ref); //syncObject = sync.$asObject();
            $scope.$watch('askplatinumdata', function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                angular.forEach($scope.items, function (item, key) {
                    if (item.Type === "2") {
                        item.Rate = numberWithCommas(Number(((((newValue.value / item.UOMConFactor) * item.USDExRate) * item.Weight) + item.Margin).toFixed(0)));
                    }
                })
            });
            syncObject.$bindTo($scope, "askplatinumdata");

            ref = new Firebase("https://wingoldnext.firebaseio.com/path/silver");
            //sync = $firebase(ref);
            syncObject = $firebaseObject(ref)
            $scope.$watch('asksilverdata', function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                angular.forEach($scope.items, function (item, key) {
                    if (item.Type === "3") {
                        item.Rate = numberWithCommas(Number(((((newValue.value / item.UOMConFactor) * item.USDExRate) * item.Weight) + item.Margin).toFixed(0)));
                    }
                })
            });
            syncObject.$bindTo($scope, "asksilverdata");


            ref = new Firebase("https://wingoldnext.firebaseio.com/path/goldbid");
            //sync = $firebase(ref);
            syncObject = $firebaseObject(ref); //syncObject = sync.$asObject();
            $scope.$watch('biddata', function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                $scope.bidRate = "$" + numberWithCommas(Number(newValue.value).toFixed(2));
            });
            syncObject.$bindTo($scope, "biddata");

            ref = new Firebase("https://wingoldnext.firebaseio.com/path/margin");
            //sync = $firebase(ref);
            syncObject = $firebaseObject(ref); //syncObject = sync.$asObject();
            $scope.$watch('margindata', function (newValue, oldValue) {
                var obj;
                angular.forEach(newValue, function (value) {
                    if ((typeof value === 'object') && (value !== null)) {
                        obj = $scope.items.filter(function (obj) {
                            return obj.Name === value.ItemName;
                        })[0];

                        if (obj !== undefined) {
                            obj.Margin = Number(value.MarginValue);
                        }
                    };
                });
            });
            syncObject.$bindTo($scope, "margindata");

}])

})();