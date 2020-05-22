const Joi = require("@hapi/joi");

RegiserValidation = (data) => {

    const valSchema = Joi.object({
        retailer: Joi.string()
            .min(3)
            .max(20)
            .required(),
        email: Joi.string()
            .min(6)
            .max(30)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    })

    return valSchema.validate(data)
}
LoginValidation = (data) => {

    const valSchema = Joi.object({
        email: Joi.string()
            .min(6)
            .max(30)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    })

    return valSchema.validate(data)
}

module.exports.RegiserValidation = RegiserValidation;
module.exports.LoginValidation = LoginValidation;




