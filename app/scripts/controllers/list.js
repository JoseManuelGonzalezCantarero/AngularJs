(function () {
    'use strict';

    window.angular
        .module('app')
        .controller('ListController', controller);
    
    function controller(workers) {
        var vm = this;
        vm.currentPage = 1;
        vm.workers = [];
        
        workers.list(function (err, workersList) {
            if(err)
            {
                console.log(err);
            }
            else
            {
                vm.workers = workersList;
            }
        });
        vm.pageChanged = function(){
            console.log('cambio de página...');
        };

        vm.getWorkers = function () {
            return vm.workers.slice((vm.currentPage - 1) * 10, ((vm.currentPage - 1) * 10) + 10);
        }
    }

    controller.$inject = ['workers'];
}());