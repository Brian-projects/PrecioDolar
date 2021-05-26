const $btnAgregar = document.getElementById('btnAgregar'),
$elementoLista = document.getElementById('elementoLista'),
$precio = document.getElementById('precio'),
$btnReporte = document.getElementById('btnReporte');
var listadoPrecios = [];
$precio.value = 0.0

$btnAgregar.addEventListener('click',(e)=>{
    e.preventDefault();
    let precio = Number($precio.value);
    listadoPrecios.push(precio);
    $precio.value = 0.0
    listarPrecios()
});

function listarPrecios(){
    $elementoLista.innerHTML = ``
    listadoPrecios.forEach((precio,index) =>{
        $elementoLista.innerHTML += ` 
        <tr>
            <td>${index+1}</td>
            <td>${precio}</td>
        </tr>`
    })
}