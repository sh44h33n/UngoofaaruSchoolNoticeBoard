var app = angular.module('UngoofaaruSchool', ['ui.router', 'ui.bootstrap']);
app.config(function($stateProvider) {
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "schoollogo": {
                    templateUrl: './views/Schoollogo.html',
                    controller: ''

                },
                "schoolmoto": {
                    templateUrl: './views/Schoolmoto.html',
                    controller: ''
                },
                "currentdate": {
                    templateUrl: './views/Currentdate.html',
                    controller: ''

                },
                "occasionallogo": {
                    templateUrl: './views/Occationallogo.html',
                    controller: ''
                },
                "schoolnotice": {
                    templateUrl: './views/LeftSchoolNotice.html',
                    controller: ''

                },
                "schoolvideo": {
                    templateUrl: './views/RightSchoolVideo.html',
                    controller: ''
                },
                "dhivehiscroller": {
                    templateUrl: './views/BottomDhivehiScroll.html',
                    controller: ''

                },
                "englishscroller": {
                    templateUrl: './views/BottomEnglishScroll.html',
                    controller: ''
                }
            }
        })


})