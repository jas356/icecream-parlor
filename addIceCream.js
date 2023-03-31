import {client, iceCreamCollection } from './mongoConnect.js'

const singleScoop = {
    name: "Vanilla",
    price: 3.99,
    description: "Vanilla bean flavor"
};


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
