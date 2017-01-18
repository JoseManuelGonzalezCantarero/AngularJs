(function () {
    'use strict';

    window.angular
        .module('app')
        .controller('ListController', controller);
    
    function controller(workers) {
        var vm = this;
        vm.currentPage = 1;
        vm.workers = [];
        
        function listWorkers() {
            workers.list(vm.currentPage, function (err, data) {
                if(err)
                {
                    console.log(err);
                }
                vm.workers = data.workers;
                vm.totalWorkers = data.totalWorkers;
            });
        }
        vm.pageChanged = listWorkers;
        listWorkers();
    }

    controller.$inject = ['workers'];
}());