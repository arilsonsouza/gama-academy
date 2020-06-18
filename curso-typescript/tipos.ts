// Boolean
const contaPaga: boolean = false;

// Nmuber
const idade: number = 24;
const avaliacao: number = 4.5;

// String
const nome: string = 'Arilson';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45]

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Arilson', 3, true];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any
const retornoDaApi: any = [123, 'Arilson', true];

// Void
function printarNaTela(msg: string): void {
  console.log(msg)
}

// Null, Undefined
const undef: undefined = undefined
const nul: null = null

// Object
function criar(object: object) {
 /// .....
}

criar({ proprieda: 1})

// Never
function loopInfinito (): never {
  while(true) {

  }
}

function error(msg: string): never {
  throw new Error(msg);  
}

function falha(): never{
  return error('Algo falhou')
}