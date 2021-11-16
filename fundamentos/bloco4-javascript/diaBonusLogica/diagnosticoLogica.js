/* function nth_prime(n) {
    let array = [2]
    let i = 3
    let count = 0
    while(true){
        for(let j = 2; j <= i; j+=1){
            if(i%j === 0){
                count +=1
                if (count > 1){
                    break;
                }
            }
        }
        if (count <= 1){
            array.push(i)
        }
        if (array.length === n){
            return array
        }
        i += 1
        count = 0
    }
}

console.log(nth_prime(6)) */

/* function largest_prime_factor(number) {
    let array = []
    let count
    for (let i =2; i <= number; i+=1){
        if (number%i === 0){
            for (let j = 2; j< i; j+=1 ){
                if(i%j === 0){
                    count += 1 
                }
            }
            if(count <= 1){
                array.push(i)
            }
        }
        count = 0
    }
    return array[array.length -1]
}

console.log(largest_prime_factor(13195)) */
/* 
function smallest_multiple(roof) {
    let number = roof
    let condition = true
    while(true){
        for (let j = 1; j<= roof; j+=1){
            if(number%j !==0){
                condition = false
                break
            }
        }
        if (condition){
            return number
        }
        condition = true
        number += 1
    }

}

console.log(smallest_multiple(10))
 */
/* 
function square_digit_chains(n) {
    let countOcurr =0
    let soma = 0
    for(let i =1; i < n; i+=1){
        let str = i
        while(true){
            str = str.toString()
            for (let char of str){
                soma += (parseInt(char))**2
            }
            if (soma == 89){
                countOcurr += 1
                soma = 0
                break
            }else if(soma == 1){
                soma = 0
                break
            }
            str = soma
            soma = 0
        }
    }
    return countOcurr
}

console.log(square_digit_chains(5)) */

/* let i = 85
let soma = 0
while(true){
    let str = i.toString()
    for (let char of str){
        soma += (parseInt(char))**2
    }
    console.log(soma)
    if (soma == 89){
        countOcurr += 1
        break
    }else if(soma == 1){
        break
    }
} */

/* function lychrel_numbers(n) {
    let reversed;
    let sum;
    let count = 0;
    let reversedSum;
    let number = 1;
    let iter = 0
    for (let i = 1; i <= n; i += 1) {
      while (true) {
        reversed = number.toString().split("").reverse().join("");
        sum = number + parseInt(reversed);
        reversedSum = sum.toString().split("").reverse().join("");
        if (sum == reversedSum) {
          count += 1;
          break;
        }
        number = sum;
        if (iter > 50){
          console.log('Número de Lychrel',i)  
          count += 1  
          break
      }
        iter += 1
      }
      iter = 0
      console.log('Numero normal',i)
      number = i + 1;
    }
    return count;
  }

console.log(lychrel_numbers(200)); */


function largest_palindrome_product(digits) {
    let biggestPalindrome =0
    let str = "1"
    let product = 0
    for (let i = 0; i < digits -1; i+=1){
        str += '0'
    }
    let num = parseInt(str)
    for (let i = num; i.toString().length <= digits; i+=1){
        for (let j = num; j.toString().length <= digits; j+=1){
            product = i*j
            let reversedProduct = product.toString().split("").reverse().join("")
            if (product == reversedProduct){
                console.log(i, ' e ', j, ' formam um palindromo')
                biggestPalindrome = product
            }
        }
    }
    return biggestPalindrome
}

console.log(largest_palindrome_product(3))
let word1 = ""
let word2 = ""
let j = word.length/2
for (let i= 0; i< word.length/2; i+=1){
    word1 += word[i]
    word2 += word[j]
    j+=1
} 
let newWord1 = word1
let newWord2 = word2
for (let i = 0; i<word1.length;i+=1){
    for (let j =1; j<= word1.length; j+= 1){
        for (let a = 0; a<word1.length;a+=1){
            for (let b =1; b<= word1.length; b+= 1){
                let aux2 = newWord2
                newWord2[a] = aux2[b]
                newWord2[b] = aux2[a]
                
            }
        }
        
    let aux1 = newWord1
    newWord1[i] = aux1[j]
    newWord1[j] = aux1[i]
    
    }
}
