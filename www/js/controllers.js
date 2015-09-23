angular.module('starter.controllers', [])

.controller('LaporanProdusenCtrl', function ($scope, $ionicModal, Restangular, $ionicLoading, $timeout) {

    moment.locale('id');
    $scope.tanggal = moment().format('DD MMMM YYYY');

    function getProdusen(tanggal) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        Restangular.all('produsens').customGETLIST().then(function (datas) {
            $timeout(function () {
                $scope.datas = _.filter(datas, function (value) {
                    return moment(new Date(value.receiveddate)).format('YYYY-MM-DD') === moment(new Date(tanggal)).format('YYYY-MM-DD');
                });
                $scope.nodata = $scope.datas.length < 1;
                $ionicLoading.hide();
            }, 500);
        });
    }
    getProdusen(moment());

    $ionicModal.fromTemplateUrl('templates/detail-produsen.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.close = function () {
        $scope.modal.hide();
    };

    $scope.detail = function (id) {
        $scope.modal.show();
        $scope.data = _.filter($scope.datas, function (value) {
            return value._id === id;
        });
    };
})

.controller('LaporanGrosirCtrl', function ($scope, $ionicModal, Restangular, $ionicLoading, $timeout) {

    moment.locale('id');
    $scope.tanggal = moment().format('DD MMMM YYYY');

    function getGrosir(tanggal) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        Restangular.all('grosirs').customGETLIST().then(function (datas) {
            $timeout(function () {
                $scope.datas = _.filter(datas, function (value) {
                    return moment(new Date(value.receiveddate)).format('YYYY-MM-DD') === moment(new Date(tanggal)).format('YYYY-MM-DD');
                });
                $scope.nodata = $scope.datas.length < 1;
                $ionicLoading.hide();
            }, 500);
        });
    }
    getGrosir(moment());

    $ionicModal.fromTemplateUrl('templates/detail-grosir.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.close = function () {
        $scope.modal.hide();
    };

    $scope.detail = function (id) {
        $scope.modal.show();
        $scope.data = _.filter($scope.datas, function (value) {
            return value._id === id;
        });
    };
})

.controller('LaporanEceranCtrl', function ($scope, $ionicModal, Restangular, $ionicLoading, $timeout) {

    moment.locale('id');
    $scope.tanggal = moment().format('DD MMMM YYYY');

    function getEceran(tanggal) {
        $ionicLoading.show({
            template: 'Loading...'
        });
        Restangular.all('ecerans').customGETLIST().then(function (datas) {
            $timeout(function () {
                $scope.datas = _.filter(datas, function (value) {
                    return moment(new Date(value.receiveddate)).format('YYYY-MM-DD') === moment(new Date(tanggal)).format('YYYY-MM-DD');
                });
                $scope.nodata = $scope.datas.length < 1;
                $ionicLoading.hide();
            }, 500);
        });
    }
    getEceran(moment());

    $ionicModal.fromTemplateUrl('templates/detail-eceran.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.close = function () {
        $scope.modal.hide();
    };

    $scope.detail = function (id) {
        $scope.modal.show();
        $scope.data = _.filter($scope.datas, function (value) {
            return value._id === id;
        });
    };
})

.controller('SenderProdusenCtrl', function ($scope, $cordovaSms, $ionicPopup) {
    $scope.data = {
        sapi: 0,
        kerbau: 0,
        kambing: 0,
        domba: 0,
        ayambroiler: 0,
        ayamburas: 0,
        itik: 0,
        telurayamras: 0,
        telurayamburas: 0,
        teluritik: 0,
        susu: 0
    };
    document.addEventListener('deviceready', function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: ''
            }
        };
        $scope.submit = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                $cordovaSms
                    .send('082161007123', 'pkp#p#' + $scope.data.sapi + '#' + $scope.data.kerbau + '#' + $scope.data.kambing + '#' + $scope.data.domba + '#' + $scope.data.ayambroiler + '#' + $scope.data.ayamburas + '#' + $scope.data.itik + '#' + $scope.data.telurayamras + '#' + $scope.data.telurayamburas + '#' + $scope.data.teluritik + '#' + $scope.data.susu, options)
                    .then(function () {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: 'SMS sudah terkirim'
                        });
                    }, function (error) {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: error
                        });
                    });
            }
        };
    });
})

.controller('SenderGrosirCtrl', function ($scope, $cordovaSms, $ionicPopup) {
    $scope.data = {
        sapi: 0,
        kerbau: 0,
        kambing: 0,
        domba: 0,
        ayambroiler: 0,
        ayamburas: 0,
        itik: 0,
        docbroiler: 0,
        doclayer: 0,
        telurayamras: 0,
        telurayamburas: 0,
        teluritik: 0,
        susu: 0,
        pakanbroiler: 0,
        pakanlayer: 0
    };
    document.addEventListener('deviceready', function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: ''
            }
        };
        $scope.submit = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                $cordovaSms
                    .send('082161007123', 'pkp#g#' + $scope.data.sapi + '#' + $scope.data.kerbau + '#' + $scope.data.kambing + '#' + $scope.data.domba + '#' + $scope.data.ayambroiler + '#' + $scope.data.ayamburas + '#' + $scope.data.itik + '#' + $scope.data.docbroiler + '#' + $scope.data.doclayer + '#' + $scope.data.telurayamras + '#' + $scope.data.telurayamburas + '#' + $scope.data.teluritik + '#' + $scope.data.susu + '#' + $scope.data.pakanbroiler + '#' + $scope.data.pakanlayer, options)
                    .then(function () {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: 'SMS sudah terkirim'
                        });
                    }, function (error) {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: error
                        });
                    });
            }
        };
    });
})

.controller('SenderEceranCtrl', function ($scope, $cordovaSms, $ionicPopup) {
    $scope.data = {
        sapihasdalam: 0,
        sapibistik: 0,
        sapimurni: 0,
        kerbau: 0,
        kambing: 0,
        domba: 0,
        ayambroiler: 0,
        ayamburas: 0,
        docbroiler: 0,
        doclayer: 0,
        telurayamras: 0,
        telurayamburas: 0,
        teluritik: 0,
        susu: 0,
        pakanbroiler: 0,
        pakanlayer: 0
    };
    document.addEventListener('deviceready', function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: ''
            }
        };
        $scope.submit = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                $cordovaSms
                    .send('082161007123', 'pkp#e#' + $scope.data.sapihasdalam + '#' + $scope.data.sapibistik + '#' + $scope.data.sapimurni + '#' + $scope.data.kerbau + '#' + $scope.data.kambing + '#' + $scope.data.domba + '#' + $scope.data.ayambroiler + '#' + $scope.data.ayamburas + '#' + $scope.data.docbroiler + '#' + $scope.data.doclayer + '#' + $scope.data.telurayamras + '#' + $scope.data.telurayamburas + '#' + $scope.data.teluritik + '#' + $scope.data.susu + '#' + $scope.data.pakanbroiler + '#' + $scope.data.pakanlayer, options)
                    .then(function () {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: 'SMS sudah terkirim'
                        });
                    }, function (error) {
                        $ionicPopup.alert({
                            title: 'SMS Sender',
                            template: error
                        });
                    });
            }
        };
    });
});