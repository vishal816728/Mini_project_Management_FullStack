const express=require('express')

const app=express()
require('dotenv').config()
const mongoose=require('mongoose')

const cors=require('cors')

async function connectMongo(){
    await mongoose.connect(`mongodb+srv://PRO:${process.env.DataBasePass}@cluster0.jemsr.mongodb.net/management_db?retryWrites=true&w=majority`)
 
    console.log("mongo db connected")
}
connectMongo()
const { graphqlHTTP }=require('express-graphql')

const schema=require("./Data/Schema/Schema")

const PORT=process.env.PORT || 5000

app.use(cors())
app.use('/graphql',graphqlHTTP({
          schema,
          graphiql:true
}))
app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log("Port is listening")
})

// mongodb+srv://PRO:<password>@cluster0.jemsr.mongodb.net/?retryWrites=true&w=majority
