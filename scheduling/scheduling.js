var app = angular.module("scheduling", ["ngRoute"]);
app
.controller('SchedulerController', function() {
    var scheduler = this;
    scheduler.viewingFocus = false;
})
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "scheduling/components/no-selection.html"
    })
    .when("/scheduling", {
        templateUrl : "scheduling/components/no-selection.html"
    })
    .when("/original", {
        templateUrl : "scheduling/components/original.html"
    })
    .when("/AIT", {
        templateUrl : "scheduling/components/AIT.html"
    })
    .when("/DBA", {
        templateUrl : "scheduling/components/DBA.html"
    })
    .when("/SWS", {
        templateUrl : "scheduling/components/SWS.html"
    })
    .when("/CGG", {
        templateUrl : "scheduling/components/CGG.html"
    })
    .when("/ICA", {
        templateUrl : "scheduling/components/ICA.html"
    })
    .when("/CNT", {
        templateUrl : "scheduling/components/CNT.html"
    })
    .when("/CSY", {
        templateUrl : "scheduling/components/CSY.html"
    })
    .otherwise({
        redirectTo : "/scheduling"
    });
});
