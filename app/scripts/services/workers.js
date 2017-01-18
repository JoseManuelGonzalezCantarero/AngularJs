(function () {
    'use strict';

    window.angular
        .module('app')
        .factory('workers', factory);

    var workers = [
        {
            code: 1,
            name: 'Manu',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 2,
            name: 'Antonio',
            job: 'Base de datos',
            date: new Date()
        },
        {
            code: 3,
            name: 'Jorge',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 4,
            name: 'Oscar',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 5,
            name: 'Cristina',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 6,
            name: 'Bermejo',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 7,
            name: 'Cozar',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 8,
            name: 'Imael',
            job: 'Base de datos',
            date: new Date()
        },
        {
            code: 9,
            name: 'Pantiga',
            job: 'Base de datos',
            date: new Date()
        },
        {
            code: 10,
            name: 'Sergiu',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 11,
            name: 'Kamil',
            job: 'Project Manager',
            date: new Date()
        },
        {
            code: 12,
            name: 'Miguel',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 13,
            name: 'Vanesa',
            job: 'Soporte',
            date: new Date()
        },
        {
            code: 14,
            name: 'Teresa',
            job: 'RRHH',
            date: new Date()
        },
        {
            code: 15,
            name: 'Alba',
            job: 'RRHH',
            date: new Date()
        },
        {
            code: 16,
            name: 'Eli',
            job: 'RRHH',
            date: new Date()
        },
        {
            code: 17,
            name: 'Victor',
            job: 'Sistemas',
            date: new Date()
        },
        {
            code: 18,
            name: 'Jaime',
            job: 'Sistemas',
            date: new Date()
        },
        {
            code: 19,
            name: 'Jean',
            job: 'Sistemas',
            date: new Date()
        },
        {
            code: 20,
            name: 'Mayela',
            job: 'Profesora',
            date: new Date()
        },
        {
            code: 21,
            name: 'Lena',
            job: 'Profesora',
            date: new Date()
        },
        {
            code: 22,
            name: 'Yesica',
            job: 'Profesora',
            date: new Date()
        },
        {
            code: 23,
            name: 'Ricardo',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 24,
            name: 'Paco Javi',
            job: 'Soporte',
            date: new Date()
        },
        {
            code: 25,
            name: 'Martin',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 26,
            name: 'Jennifer',
            job: 'Periodista',
            date: new Date()
        },
        {
            code: 27,
            name: 'Fernando',
            job: 'Jefe',
            date: new Date()
        },
        {
            code: 28,
            name: 'Ana',
            job: 'Jefa',
            date: new Date()
        },
        {
            code: 29,
            name: 'Melissa',
            job: 'Project Manager',
            date: new Date()
        },
        {
            code: 30,
            name: 'Nogueras',
            job: 'Project Manager',
            date: new Date()
        },
        {
            code: 31,
            name: 'Germán',
            job: 'Project Manager',
            date: new Date()
        },
        {
            code: 32,
            name: 'Angel',
            job: 'Diseñador',
            date: new Date()
        },
        {
            code: 33,
            name: 'Virginia',
            job: 'Artista',
            date: new Date()
        },
        {
            code: 34,
            name: 'Marina',
            job: 'Cantante',
            date: new Date()
        },
        {
            code: 35,
            name: 'Esther',
            job: 'Cantante',
            date: new Date()
        },
        {
            code: 36,
            name: 'Luis',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 37,
            name: 'Cachorro',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 38,
            name: 'Alex',
            job: 'Abogado',
            date: new Date()
        },
        {
            code: 39,
            name: 'Dani',
            job: 'Abogado',
            date: new Date()
        },
        {
            code: 40,
            name: 'Borja',
            job: 'Diseñador',
            date: new Date()
        },
        {
            code: 41,
            name: 'Berto',
            job: 'Diseñador',
            date: new Date()
        },
        {
            code: 42,
            name: 'Patricia',
            job: 'Programador',
            date: new Date()
        },
        {
            code: 43,
            name: 'Julio',
            job: 'Guitarrista',
            date: new Date()
        },
        {
            code: 44,
            name: 'Beatriz',
            job: 'Cantante',
            date: new Date()
        },
        {
            code: 45,
            name: 'Chus',
            job: 'Cantante',
            date: new Date()
        }
    ];
    function factory() {
        return {
            list: function (callback) {
                callback(null, workers)
            }
        }
    }
}());