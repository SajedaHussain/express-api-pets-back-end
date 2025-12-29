//require the modle
const Track = require('../model/track')
//express
const express = require('express')
//initialize the router
const router = express.Router()


//Creat ===================================================================================
router.post('/', async (req, res) => {
    try {
        //use the modl to inser the data into DB
        const track = await Track.create(req.body)

        //response with the new pet data  
        res.status(201).json({ track });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "failed to create track " })
    }
})


//index ===================================================================================
router.get('/', async (req, res) => {
    try {
        const track = await Track.find({})
        res.status(200).json({track})


    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Faild to get track' })
    }
})


//get one pet ==============================================================================
router.get('/:id' , async (req,res)=>{
    try{
        //get the id from the req.params
        const {id}=req.params

        //use the model to find by id
        const track = await Track.findById(id)

        //if we ont get the pet respond with 404 else send 200 with pet
        if(!track){
            res.status(404).json({error: 'track not found'})
        }//there is no pet
        else{
            res.status(200).json({track})
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
    const track= await Track.findByIdAndDelete(id)

    if(!track){
        res.status(404).json({msg:"track not found"})
    }
    else{
    res.status(200).json({msg:"deleted"})}
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
    const track= await Track.findByIdAndUpdate(id, req.body , { new: true,})

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