const router = require('express').Router();
const saleeModel = require('../Models/Sales')
const jwt = require('jsonwebtoken');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toDateString() + file.originalname)
    }
  })
   
  const upload = multer({ storage: storage })


router.post('/', upload.single('image'), async (req, res) => {

  console.log(req.file);
  console.log(req.body);
  
  
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    const {name} = jwt.verify(token, process.env.Token_Key);
    
     
    const sales = new saleeModel(
        {
            name: name,
            item: req.body.item,
            was: req.body.was,
            now: req.body.now,
            imagePath: req.file.path,
            created: new Date()
        })

    try {
        await sales.save();
        const SaleObject = await saleeModel.find();

        res.send(SaleObject);

    }
    catch (err) {
        res.status('404').send(err);
    }
})

module.exports = router;