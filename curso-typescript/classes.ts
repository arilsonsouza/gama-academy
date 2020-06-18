class Data {
  // public dia: number;
  // private mes: number;
  // ano: number;

  constructor(public dia: number, public mes: number, public ano: number = 1970) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

const data = new Data(1, 1, 2020);
console.log(data.dia)
