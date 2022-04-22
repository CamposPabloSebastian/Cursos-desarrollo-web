
const inputRango = document.getElementById('inputRango');
const precio = document.getElementById('precio');
const visitas = document.getElementById('visitas');

const arrayVisitas = ['10K', '50K', '100K', '500K', '1M'];

inputRango.addEventListener('input', () => {
    console.log("asdasdasd 🤣");
    console.log(inputRango.value);
    precio.textContent = inputRango.value;
    visitas.textContent = arrayVisitas[((inputRango.value / 8) - 1)];

})