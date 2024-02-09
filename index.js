class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso com dois heróis
  const mago = new Heroi('Merlin', 500, 'mago');
  mago.atacar();
  
  const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
  guerreiro.atacar();
  