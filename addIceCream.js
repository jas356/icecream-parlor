import {client, iceCreamCollection } from './mongoConnect.js'

const singleScoop = {
    name: "Vanilla",
    price: 3.99,
    description: "Vanilla bean flavor"
};

const product1 = {
  flavor: 'Vanilla',
  price: 4.50,
}
const product2 = {
name: 'Double Scoop',
flavor: 'Chocolate',
price: 8.50,
}
const product3 = {
name: 'Waffle Cone',
flavor: 'Cookie Dough',
price: 8.52,
}
const product4 = {
name: 'Sundae',
flavor: 'Strawberry',
price: 10.05,
}
const product5 = {
name: 'Banana Split',
flavor: 'Banana',
price: 11.45,
}


const addIceCream = async () => {
  try {
    await client.connect();
    const addedIceCream = await iceCreamCollection.insertOne(singleScoop);
    console.log(addedIceCream);
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
 addIceCream()
