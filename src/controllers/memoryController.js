import Memory from "../models/Memory.js";

const createMemory = async (req, res) => {
    try {
        const {title, description} = req.body;

        const src = `images/${req.file.filename}`

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

export default {
    createMemory,
}