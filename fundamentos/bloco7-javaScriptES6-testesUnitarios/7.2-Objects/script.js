//Parte 1
/* const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const deliveryPerson = order.order.delivery.deliveryPerson
  const name = order.name
  const number = order.phoneNumber
  const adress = order.address
  const orderOpt = order.order

  const customerInfo = (order) => {
    return(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${number}, ${adress.street},Nº: ${adress.number},AP: ${adress.apartment}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
      return(`Olá ${name}, o total do seu pedido de ${orderOpt.pizza.marguerita},${orderOpt.pizza.pepperoni} e ${orderOpt.drinks.coke} é R$${order.payment}`)
  }
  
  orderModifier(order);

order.name = 'Alexandre'
order.payment = 50
 */

//Parte 2
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addNightShift(lesson){
    lesson['turno'] = 'noite'
}

function listKeys(lesson){
    const keys = Object.keys(lesson)
    return keys
}

function objLen(lesson){
    return Object.keys(lesson).length
}

function listValues(lesson){
    return Object.values(lesson)
}

const allLessons = Object.assign({},lesson1,lesson2,lesson3)
console.log(allLessons);

//console.log(listKeys(lesson2))