function SecondMondayAppController($scope, $state, Data, $http,$filter) {
    'ngInject';

    $scope.data = [];
    $scope.active = 0;
    $scope.radioModel = 'OneWay';
    $scope.format = 'dd-MMMM-yyyy';

    $scope.steps = [
        {name: "STEP 1", action: ".tab1", icon: "icon-tab1", active: true, disabled: false, class: "pointer-active"},
        {name: "STEP 2", action: ".tab2", icon: "icon-tab2", active: false, disabled: true, class: "not-active"},
        {name: "STEP 3", action: ".tab3", icon: "icon-tab3", active: false, disabled: true, class: "not-active"}
    ];


    $scope.data = Data;
    $scope.next = function (index) {
        $scope.active = index;
        $state.go('tab.tab' + parseInt(index + 1));
        $scope.steps[index].disabled = false;
        $scope.steps[index].class = "pointer-active";
        angular.element('#body').css({'background-image': 'url( /assets/slide' +parseInt(index + 1)+'.jpg'});
    };


    $scope.onButtonClick = function () {
        $state.go('tab.tab1');
        $scope.steps[0].class = "pointer-active";
        angular.element('#body').css({'background-image': 'url( /assets/slide1.jpg'});
    };

    $scope.locations = [
        {city: 'Boston', country: 'United States'},
        {city: 'New York', country: 'United States'},
        {city: 'Chicago', country: 'United States'},
        {city: 'San Francisco', country: 'United States'},
        {city: 'Pune', country: 'India '},
        {city: 'Mumbai', country: 'India '},
        {city: 'Nashik', country: 'India '},
        {city: 'Satana', country: 'India '}
    ];

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    $scope.popup1 = { opened: false };
    $scope.popup2 = { opened: false };

    $scope.country = {};
    $scope.country.selected = undefined;
    $scope.countries = [{city: 'Las Vegas', country: 'United States', state: '	California'},
        {city: 'Chicago', country: 'United States', state: '	California'},
        {city: 'San Francisco', country: 'United States', state: 'Washington'},
        {city: 'Boston', country: 'United States', state: 'Washington'},
        {city: 'Pune', country: 'India ', state: 'Maharashtra'},
        {city: 'Mumbai', country: 'India ', state: 'Maharashtra'},
        {city: 'Nashik', country: 'India ', state: 'Maharashtra'},
        {city: 'Satana', country: 'India ', state: 'Maharashtra'}];


    $scope.message1 = function(name,city,date){
        var filterdate=$filter('date')(date, "dd MMMM yyyy");
        var message = 'Hello%20%22'+name+'%22%0A%0AWe%20are%20very%20happy%20to'+
            '%20inform%20you%20that%20your%20ticket%20%20of%20'+city+'%20is%20confirm%20on%20'+
            filterdate+'.%0A%0A%0AThanks%2C%0ARegards%20%0A%0ADreamy Destination';
        return message;
    };

    var mailgunUrl = "https://api.mailgun.net/v3/sandbox01bea5994ea04ed88b6c9272cee69273.mailgun.org/messages";
    var mailgunApiKey = window.btoa("api:key-762060bd7e646a1ee800a616a03473cd");
    $scope.send = function (recipient,message) {
        $http(
            {
                "method": "POST",
                "url": mailgunUrl,
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Basic " + mailgunApiKey
                },
                data: "from=" + "bhagu.lokhande09@gmail.com" + "&to=" + recipient + "&subject=SecondMondayApp&text=" + message
            }
        ).then(function (success) {
            console.log("SUCCESS " + JSON.stringify(success));
        }, function (error) {
            console.log("ERROR " + JSON.stringify(error));
        });
    }
}

module.exports = /*@ngInject*/ SecondMondayAppController;
