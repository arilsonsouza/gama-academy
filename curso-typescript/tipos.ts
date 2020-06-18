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

// Union Types
const nota: number | string = 5;
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota(10);
exibirNota('10');


// Alias
type Funcionario = {
  nome: string,
  sobrenome: string,
  dataNascimento: Date
}
// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [
  {
    nome: 'Arilson',
    sobrenome: 'Souza',
    dataNascimento: new Date()
  }
];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for(let funcionario of funcionarios) {
    console.log(`Nome do funcionário:` + funcionario.nome)
  }
}


// Null or optional values
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string,
  telefone: string,
  telefone2?: string
}

const contato: Contato = {
  nome: 'Arilson',
  telefone: '123456789'  
}

//  Type Asseertion
const minhaIdade: any = 24;
// (minhaIdade as number).toString();
(<number>minhaIdade).toString();

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);