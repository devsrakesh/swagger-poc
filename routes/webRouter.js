const express = require('express')

const Router = express.Router()

Router.get('/',(req,res)=>{
    try {
        res.json({
            status:200,
            data:"data"
        })
    } catch (error) {
        res.json({
            status:500,
            data:error
        })
    }
})

Router.post('/',(req,res)=>{
    try {
        res.json({
            status:200,
            data:"data"
        })
    } catch (error) {
        res.json({
            status:500,
            data:error
        })
    }
})

Router.patch('/:id',(req,res)=>{
    try {
        res.json({
            status:200,
            data:"data"
        })
    } catch (error) {
        res.json({
            status:500,
            data:error
        })
    }
})

Router.delete('/:id',(req,res)=>{
    try {
        res.json({
            status:200,
            data:"data"
        })
    } catch (error) {
        res.json({
            status:500,
            data:error
        })
    }
})

module.exports = Router