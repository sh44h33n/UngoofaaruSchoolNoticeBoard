var app = angular.module('UngoofaaruSchool', ['ui.bootstrap','ui.route']);
//application services availablw to all the controllers


app.service('appService', function() {
    var UngoofaaruSchoolNotice = new Array();


    //food array for adding to food page from services...


   
    return {
        getNotice: function() {
            return UngoofaaruSchoolNotice; //return all notice
        },


    }
});