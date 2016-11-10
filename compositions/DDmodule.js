const MODULE_NAME = 'SecondMondayApp.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .component('helloWorld', require('../components/SecondMondayApp/SecondMondayAppController'));