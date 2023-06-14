var tipo = 'de tipo desconhecido';  

var cleave = new Cleave('#credito', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
       console.log(type)
       tipo = type;
    }
});


var cleave = new Cleave('#data', {
    date: true,
    datePattern: ['m', 'y']
});

