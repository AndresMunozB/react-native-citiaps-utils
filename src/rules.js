const not_null = value => {
    if (!value || value == undefined || value == null)
        return false;
    return true;
}

const rut = value => {
    if (!require('rut.js').validate(value))
        return 'Rut inválido'
    return true
}
const required = value => {
    if (!not_null(value) || value.length == 0)
        return 'Requerido';
    return true;
}

const minsize = (value, length) => {
    if (!not_null(value) || value.length < length)
        return `Tamaño mínimo ${length}`;
    return true
}

const email = value => {
    email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email_regex.test(value))
        return 'Correo inválido. ejemplo@ejemplo.com'
    return true;
}

const phone = value => {
    phone_regex = /\+[0-9]{11,}/i
    if (!phone_regex.test(value))
        return 'Teléfono inválido. +56123456789'
    return true;
}

const validate = (touched, array) => {
    if (!touched)
        return '';
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]()) == 'string')
            return array[i]();
    }
    return '';
}

const check_fields = (inputs) => {
    let keys = Object.keys(inputs);
    for (let i = 0; i < keys.length; i++)
        inputs[keys[i]].touch();
    for (let i = 0; i < keys.length; i++) {
        if (validate(true, inputs[keys[i]].rules) !== '')
            return false;
    }
    return true;
}

export default rules = { not_null, required, minsize, email, phone, validate, check_fields, rut };