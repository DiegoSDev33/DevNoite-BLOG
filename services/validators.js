
const {body} = require("express-validator")


module.exports = {
    validTitle: body('title')
    .trim()
    .isLength()
    .withMessage('Valor Invalido!'),
    validContent: body ('content')
    .trim()
    .isLength()
    .withMessage('Valor Invalido!!')
}