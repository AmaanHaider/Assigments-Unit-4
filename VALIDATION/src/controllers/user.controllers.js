const express = require ("express")
const { body , validationResult}=("express-validator")
const User = require ("../models/user.model")

const router = express.Router()

router.post("/",
body("email")
.isEmail()
.custom(async(value)=>{

    const user = await User.findOne({emaile:value});

    if(user){
        throw new Error("Email is already exist")
    }
    return true
}),
body("pincode")
.not()
.isEmpty()
.isNumeric()
.custom(async(value)=>{

    if(value.pincode){

        throw new Error("pincode should be less than 6")
    }
    return true

}),
body("age")
    .not()
    .isNumeric()
    .withMessage("Age must be in numbers")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),

    body("gender")
  .custom(async(value)=>{

    if(!value.gender=="male" ||!value.gender=="femmale"||!value.gender=="other" ){

        throw new Error("Gender is invalid")
    }
    return true


  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports= router