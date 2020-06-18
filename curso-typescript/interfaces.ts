interface Usuario {
  nome: string,
  email: string,
  address?: string
}

function getUser(): Usuario {
  return {
    nome: 'Arilson',
    email: 'contato@email.com'
  }
}