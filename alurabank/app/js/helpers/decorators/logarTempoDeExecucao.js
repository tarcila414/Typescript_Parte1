System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log("--------------------");
                console.log(`parametros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const tempo1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const tempo2 = performance.now();
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`O tempo de exececução foi de ${tempo2 - tempo1} ms.`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
