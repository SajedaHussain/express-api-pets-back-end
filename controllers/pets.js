//require the modle
const Pet = require('../model/pet')
//express
const express = require('express')
//initialize the router
const router = express.Router()
//export the router
module.exports = router;

//Creat==========================================================================
router.post('/', async (req,res)=>{//beacuse the serverjs is already /pets so it become /pets/pets if we put /pets
    try{
        //use the modl to inser the data into DB
        const pet =await Pet.create(req.body)

        //response with the new pet data  
        res.status(201).json({pet});//.json its same of renderss 200 secsuuful read 201 seccufuly ceated use for postt request
    }
    catch(error){
        console.log(error)
       res.status(500).json({error : "failed to create pet "})//json expact the object + just a number to show there is an error
    }
})