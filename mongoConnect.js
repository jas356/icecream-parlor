import dotenv from 'dotenv'
import { MongoClient } from "mongodb"


dotenv.config()
const MONGOURI = process.env.MONGOURI


//create instance of mongo
export const client = new MongoClient(MONGOURI)
//connect to db - or create if there is none
const database = client.db('products')

//connect to collection - or create if none
export const fruitCollection = database.collection('fruits')
export const toysCollection = database.collection('toys')
export const iceCreamCollection = database.collection('icecreams')
