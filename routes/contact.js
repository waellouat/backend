
const express=require('express')
 const contactRouter=express.Router()
const contactSchema=require('../model/contact')

 


// route get a user
contactRouter.get('/',async(req,res)=>{
    try{
const contacts =  await contactSchema .find()
res.status(200).send({msg:'the is your contact users',contacts})
    }catch(err){
res.status(500).send("we could not find you contact user")
    }

})

//route post a users
 contactRouter.post('/',async(req,res)=>{
    try{
const NewContact= await new contactSchema(req.body)
NewContact.save()
res.status(200).send({msg:'the contact is added',NewContact})
    }catch(err){
        console.log(err)
res.status(500).send('could not add a contact ')
    }
})

// route update a  users
contactRouter.put('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const updateUser= await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('you update your contact')
            }catch(err){
                res.status(500).send('could not update a contact ')
        
            }
    
})

// route delet a users
contactRouter.delete('/:id',async(req,res)=>{
    try{
const {id}=req.params
const delateUser= await contactSchema.findByIdAndDelete(id)
res.status(200).send('you delet your contact')
    }catch(err){
        res.status(500).send('could not delet a contact ')

    }
})

//route get a user by id
contactRouter.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getUser= await contactSchema.findById(id)
        res.status(200).send({msg:'you get your contact by id',getUser})
            }catch(err){
                res.status(500).send('could not get a contact by id ')
        
            }
})
module.exports = contactRouter
