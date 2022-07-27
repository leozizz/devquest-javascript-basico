let boletoPago = false

boletoPago = confirm('O boleto foi pago?')

if(boletoPago) {
    alert('O boleto está pago!')
} else if (boletoPago === false) {
    alert('O boleto não está pago!')
}