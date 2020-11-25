
const replace = (value, expression) => { return value.replace(expression, ''); }

/**Expressions */
//const example_expression = /[^a-zA-Z]/g;

/**Formats */
const rut = value => value === '' ? '' : require('rut.js').format(value);
//const example = value => replace(value, example_expression);

const price = value => {
    value += '';
    var x = value.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

export default format = {
    rut,
    price
    //example
}
