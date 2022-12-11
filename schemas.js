const Joi=require('joi');
const { number }=require('joi');

module.exports.memberSchema = Joi.object({
    member : Joi.object({
        name : Joi.string().required(),
        age: Joi.number().required().min(18).max(65),
        batch:Joi.any().required()
    })
});