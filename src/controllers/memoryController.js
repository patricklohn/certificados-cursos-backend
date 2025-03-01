import Memory from "../models/Memory.js";
import fs from "fs";

const removeOldImage = (memory) => {
    fs.unlink(`src/public/uploadsArquivos/${memory.src}`, (err)=> {
        if(err){
            console.log(err)
        } else{
            console.log("Arquivo excluído do servidor!")
        }
    })
}

const createMemory = async (req, res) => {
    try {
        const {title, description} = req.body;

        const src = `${req.file.filename}`

        if(!title || !description){
            return res.status(400).json({msg: "Campos não preenchidos. Titulo ou descrição."})
        }

        const newMemory = new Memory({
            title,src,description
        })

        await newMemory.save()
        
        res.status(200).json({msg: "Certificado salvo com sucesso!", newMemory})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal error server"})
    }
}

const getMemorys = async (req,res) =>{ 
    try {
        
        const memories = await Memory.find()

        res.json(memories);

    } catch (error) {
        res.status(500).json({msg:"Internal error server"})
    }
}

const getMemory = async (req,res) =>{
    try {
        const id = req.params.id; 
        
        const memorie = await Memory.findById(id);

        if(!memorie){
            return res.status(404).json({msg:"Memoria não encontrada"})
        }

        res.json(memorie);

    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal error server"})
    }
}

const deleteMemory = async(req,res) => {
    try {
        const {id} = req.params;
        const memorie = await Memory.findById(id);
        if(!memorie){
            return res.status(404).json({msg:"Memoria não encontrada"})
        }

        removeOldImage(memorie)

        await Memory.findByIdAndDelete(id);
        res.status(200).json({msg:"Memoria deletada com sucesso",memorie});

        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal error server"})
    }
}

export default {
    createMemory,
    getMemorys,
    getMemory,
    deleteMemory
}