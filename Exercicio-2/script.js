let boletoPago = false

boletoPago = confirm('O boleto foi pago?')

if(boletoPago === false) {
    alert('O boleto não está pago!')
} else {
    alert('O boleto está pago!')
}