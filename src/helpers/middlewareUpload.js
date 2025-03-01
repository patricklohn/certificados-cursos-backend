import multer from 'multer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname manualmente para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploadsArquivos'));
    },
    filename: function (req,file,cb){
        cb(null, Date.now() + '_Certificado' + path.extname(file.originalname)) // teste.jpg -> extname(26022025.jpg)
    }
});

const fileFilter = (req,file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}; 

export const upload = multer({
    storage,
    fileFilter
})

 export function uploadMiddleware(req,res,next){
    const image = req.file; 

    if(!image){
        return res.status(400).json({msg: "Arquivo não anexado"})
    }

    next()
}