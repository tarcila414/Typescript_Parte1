export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("--------------------");
      console.log(
        `parametros passados para o método ${propertyKey}: ${JSON.stringify(
          args
        )}`
      );

      const tempo1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const tempo2 = performance.now();

      console.log(
        `O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`
      );

      console.log(`O tempo de exececução foi de ${tempo2 - tempo1} ms.`);
      return retorno;
    };

    return descriptor;
  };
}
