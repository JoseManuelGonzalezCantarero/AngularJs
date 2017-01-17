(function () {
    'use strict';

    window.angular
        .module('app')
        .controller('NewWorkerController', controller);

    function controller() {
        var vm = this;

        vm.worker = {
            name: '',
            surname: '',
            birthdate: '',
            department: 0,
            job: '',
            salary: 0,
            photo: '',
            observations: ''
        }

        vm.send = function () {
            console.log(JSON.stringify(vm.worker));
        }

        vm.fileChange = function (element) {
            var reader;
            if(element.files.length === 0)
            {
                return;
            }
            reader = new window.FileReader();
            reader.onloadend = function () {
                vm.worker.photo = reader.result;
            };

            reader.readAsDataURL(element.files[0]);
        }
    }
}());