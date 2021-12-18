const {sum, myRemove, myFizzBuzz}= require("./sum.js");

describe('Teste da função sum' , () => {
    it('Retorno esperado dos parametros 4 e 5 é 9', () =>{
        expect(sum(4,5)).toBe(9)
    })
    it('Retorno esperado dos parametros 0 e 0 é 0', () =>{
        expect(sum(0,0)).toBe(0)
    })
    it("Retorno esperado dos parametros 4 e '5' é um erro", () =>{
        expect(() => {sum(4,"5")}).toThrow()
    })
    it("Retorno esperado dos parametros 4 e '5' é um erro", () =>{
        expect(() => {sum(4,"5")}).toThrowError('parameters must be numbers')
    })
})

describe('Teste da função myRemove', () => {
    it('Os parâmetros [1,2,3,4],3 retornam [1,2,4]', () => {
        expect(myRemove([1,2,3,4],3)).toEqual([1,2,4])
    })
    it('Os parâmetros [1,2,3,4],3 não retornam [1,2,3,4]', () => {
        expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
    })
    it('Os parâmetros [1,2,3,4],5 retornam [1,2,3,4]', () => {
        expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4])
    })
})

describe('Teste da função myFizzBuzz', () => {
    it('Parametro 15 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it('Parametro 3 retorna fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })
    it('Parametro 5 retorna buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })
    it('Parametro 7 retorna 7', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    it('Parametro tipo string retorna false', () => {
        expect(myFizzBuzz('str')).toBeFalsy()
    })
})
