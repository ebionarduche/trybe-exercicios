import Order from "./Order";
import Client from "./Client";
import OrderItem from "./OrderItem";

const client = new Client('Ebio');

const sandwich = new OrderItem('Sanduiche Natural', 5.00)
const juice = new OrderItem('Suco de Manga', 5.00)
const desset = new OrderItem('Pave', 2.50)

const order = new Order(client, [sandwich, juice, desset], 'cartão de breu', 0.10);

console.log(order);
console.log('Valor Normal', order.calculateTotal());
console.log('Valor c/ desconto', order.calculateTotalWithDiscount());




//Continuar A partir do exercicios 04
// Preciso assitir as aulas e fazer o exercicios do segundo dia  