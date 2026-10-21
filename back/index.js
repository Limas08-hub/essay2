const express = require('express')//Importe Express (framework pour créer le serveur)
//intialiser le serveur 
const app=express()
//Port d'écoute : celui du .env, sinon 3000
const port = process.env.port || 3000


const dotenv = require('dotenv')//Importe dotenv (pour gérer les variables d'environnement)
const connectdb=require('./config/db')//Importe la fonction de connexion à la base de données
dotenv.config()//Charge les variables d'environnement depuis le fichier .env

//Route de test pour vérifier que le serveur fonctionne
app.get('/',(req,res)=>{
    res.send('hello world')
})
connectdb()//Appelle la fonction de connexion à la base de données
//Démarre le serveur et écoute sur le port spécifié
app.listen(port,() => {
    console.log('serveur lancé sur le port', + port )
})



























/* const express = require(express)
const app = express 
const port = process.env.PORT || 3000 

const dotenv= require('dotenv')
const connectDB = require('./config/db')
dotenv.config()
app.get('/',(req,res)=>{
    res.send('hello world')
})
connectDB()
app.listen(port,() => {
    console.log('serveur lance', + port )

}) */