var app = angular.module('UngoofaaruSchool', ['ui.router', 'ui.bootstrap']);
app.config(function($stateProvider) {
    $stateProvider
        .state('index', {
            url: '',
            views: {
                "schoollogo": {
                    templateUrl: './views/Schoollogo.html',
                    controller: ''

                },
                "schoolmoto": {
                    templateUrl: './views/Schoolmoto.html',
                    controller: ''
                },
                "words": {
                    templateUrl: './views/Words.html',
                    controller: ''
                },
                "currentdate": {
                    templateUrl: './views/Currentdate.html',
                    controller: ''

                },
                "upcoming": {
                    templateUrl: './views/Upcoming.html',
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
        .state('brand', {
            url: '/brand',
            views: {
                "schoollogo": {
                    templateUrl: './views/Schoollogo.html',
                    controller: ''

                },
                "schoolmoto": {
                    templateUrl: './views/Schoolmoto.html',
                    controller: ''
                },
                "words": {
                    templateUrl: './views/Words.html',
                    controller: ''
                },
                "currentdate": {
                    templateUrl: './views/Currentdate.html',
                    controller: ''

                },
                "upcoming": {
                    templateUrl: './views/Upcoming.html',
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
        .state('login', {
            url: '/login',
            views: {
                "login": {
                    templateUrl: './views/login.html',
                    controller: ''

                },
                "badge": {
                    templateUrl: './views/Schoollogo.html',
                    controller: ''
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            views: {

                "dashboard": {
                    templateUrl: './views/dashboard.html',
                    controller: ''
                },
                "reports": {
                    templateUrl: './views/reports.html',
                    controller: ''
                }
            }
        })


})
app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

app.controller('DropdownCtrl', function($scope) {
 
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});