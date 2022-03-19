const express = require("express")

const Master = require("../models/master.model")

const router = express.Router()

router.post('',async(req,res)=>{

    const master = await Master.create(req.body)
    return res.status(200).send(master)
})

module.exports= router