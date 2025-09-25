// ----------------------------------------------------------------
// 1. CLASSE ABSTRATA (CLASSE MÃE)
// ----------------------------------------------------------------
// Esta é a nossa abstração. Ela define o que todo veículo DEVE ter,
// como marca, modelo e ano, e o que todo veículo PODE fazer,
// como ligar e exibir seus detalhes.
// ----------------------------------------------------------------

class Veiculo {
  // O construtor é chamado quando um novo objeto é criado (new Veiculo)
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Método comum a todos os veículos
  ligar() {
    console.log(`O ${this.modelo} ligou o motor.`);
  }

  // Método que pode ser sobrescrito pelas classes filhas
  exibirDetalhes() {
    console.log(`Detalhes: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
  }
}

// ----------------------------------------------------------------
// 2. CLASSES HERDEIRAS (CLASSES FILHAS)
// ----------------------------------------------------------------
// Estas classes herdam tudo da classe 'Veiculo' e adicionam
// suas próprias propriedades e métodos específicos.
// ----------------------------------------------------------------

// A classe 'Carro' herda de 'Veiculo'
class Carro extends Veiculo {
  // O construtor do Carro recebe os parâmetros do Veiculo MAIS o seu próprio
  constructor(marca, modelo, ano, numeroDePortas) {
    // 'super()' chama o construtor da classe MÃE (Veiculo)
    // Isso é obrigatório em classes herdeiras
    super(marca, modelo, ano);

    // Propriedade específica da classe Carro
    this.numeroDePortas = numeroDePortas;
  }

  // Método específico da classe Carro
  abrirPortaMala() {
    console.log(`O porta-malas do ${this.modelo} foi aberto.`);
  }

  // Sobrescrevendo o método da classe mãe para ser mais específico
  exibirDetalhes() {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroDePortas}`);
  }
}

// A classe 'Moto' também herda de 'Veiculo'
class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    // Chamando o construtor da classe mãe (Veiculo)
    super(marca, modelo, ano);

    // Propriedade específica da classe Moto
    this.cilindradas = cilindradas;
  }

  // Método específico da classe Moto
  empinar() {
    console.log(`A ${this.modelo} está empinando! Cuidado!`);
  }

  // Sobrescrevendo o método da classe mãe para ser mais específico
  exibirDetalhes() {
    console.log(`Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}cc`);
  }
}

// ----------------------------------------------------------------
// 3. CRIAÇÃO DAS INSTÂNCIAS (OBJETOS)
// ----------------------------------------------------------------
// Agora vamos criar objetos reais a partir das nossas classes.
// ----------------------------------------------------------------

console.log("--- Criando Instâncias ---");

// Instância 1: Um objeto da classe Carro
const meuCarro = new Carro('Volkswagen', 'Golf', 2020, 4);

// Instância 2: Outro objeto da classe Carro
const carroDoVizinho = new Carro('Fiat', 'Uno', 1998, 2);

// Instância 3: Um objeto da classe Moto
const minhaMoto = new Moto('Honda', 'CB 500F', 2022, 500);


// ----------------------------------------------------------------
// UTILIZANDO OS OBJETOS E SEUS MÉTODOS
// ----------------------------------------------------------------

console.log("\n--- Executando Métodos ---");

// Usando métodos do meuCarro
meuCarro.exibirDetalhes(); // Usa o método sobrescrito de Carro
meuCarro.ligar(); // Usa o método herdado de Veiculo
meuCarro.abrirPortaMala(); // Usa o método específico de Carro

console.log("--------------------------");

// Usando métodos do carroDoVizinho
carroDoVizinho.exibirDetalhes();
carroDoVizinho.ligar();

console.log("--------------------------");

// Usando métodos da minhaMoto
minhaMoto.exibirDetalhes(); // Usa o método sobrescrito de Moto
minhaMoto.ligar(); // Usa o método herdado de Veiculo
minhaMoto.empinar(); // Usa o método específico de Moto
