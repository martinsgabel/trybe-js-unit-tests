const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // Teste se productDetails é uma função.
    it('se productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    it('se o array retornado pela função contém dois itens dentro', () => {
      expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('se os dois itens dentro do array retornado pela função são objetos', () => {
      expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
});