//require the modle
const Pet = require('../model/pet')
//express
const express = require('express')
//initialize the router
const router = express.Router()


//Creat ===================================================================================
router.post('/', async (req, res) => {//beacuse the serverjs is already /pets so it become /pets/pets if we put /pets
    try {
        //use the modl to inser the data into DB
        const pet = await Pet.create(req.body)

        //response with the new pet data  
        res.status(201).json({ pet });//.json its same of renderss 200 secsuuful read 201 seccufuly ceated use for postt request
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "failed to create pet " })//json expact the object + just a number to show there is an error
    }
})


//index ===================================================================================
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.status(200).json({pets})


    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Faild to get pet' })
    }
})


//get one pet ==============================================================================
router.get('/:id' , async (req,res)=>{
    try{
        //get the id from the req.params
        const {id}=req.params

        //use the model to find by id
        const pet = await Pet.findById(id)

        //if we ont get the pet respond with 404 else send 200 with pet
        if(!pet){
            res.status(404).json({error: 'pet not found'})
        }//there is no pet
        else{
            res.status(200).json({pet})
        }

    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"Failed"})
    }
})

//Delete ====================================================================================
router.delete('/:id' , async (req,res)=>{
 try{
    //get the id from params
    const {id}=req.params

    //try to find and delet the id
    const pet= await Pet.findByIdAndDelete(id)

    if(!pet){
        res.status(404).json({msg:"pet not found"})
    }
    else{
    res.status(204).json({msg:"deleted"})}//204 meaans nothing, its secsses but nothing to show because we deleted(use it when you want to show nothing)
 }
 catch(erorr){
    console.log(erorr)
    res.status(500).json({error:"Failed"})
 }
})

//Update ====================================================================================
router.put('/:id' , async (req,res)=>{
 try{
    //get the id from params
    const {id}=req.params

    //try to find and update the id
    const pet= await Pet.findByIdAndUpdate(id, req.body , { new: true,})//first argument for id (find by id) and he second for the updated values(send it to the req.body) the third arrgument because by defult the value is falsex

    //send back msg to say updated
    res.status(200).json({msg:"updated"})
 }
 catch(erorr){
    console.log(erorr)
    res.status(500).json({error:"Failed to update"})
 }
})
//export the router
module.exports = router;