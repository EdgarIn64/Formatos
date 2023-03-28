function cambiarAccesorio() {
    let accesorioSelect = document.getElementById('accesorioSelect').value
    let cambiar = document.getElementsByClassName('cambiar')
    cambiar[3].innerHTML = accesorioSelect
    switch (accesorioSelect) {
        case 'JARETA': 
            cambiar[0].innerHTML = 'Dobladillo (D)'
            cambiar[1].innerHTML = 'Alto (A)'
            cambiar[2].innerHTML = 'LayFlat (L/F)'
            cambiar[4].innerHTML = 'D'
            cambiar[5].innerHTML = 'A'
            cambiar[6].innerHTML = 'L/F'
            break
        case 'TACK A CINTURON':
            cambiar[0].innerHTML = 'Libre'
            cambiar[1].innerHTML = 'Traslape'
            cambiar[2].innerHTML = 'Profundidad'
            cambiar[4].innerHTML = 'LIBRE'
            cambiar[5].innerHTML = 'TRASL'
            cambiar[6].innerHTML = 'PROF'
            break
        case 'CYLANDER': 
            cambiar[0].innerHTML = 'Cinta (C)'
            cambiar[1].innerHTML = 'Alto (A)'
            cambiar[2].innerHTML = 'LayFlat (L/F)'
            cambiar[4].innerHTML = 'C'
            cambiar[5].innerHTML = 'A'
            cambiar[6].innerHTML = 'L/F'
            break
        default: 
            cambiar[0].innerHTML = 'Colocación de Cinta (C/A)'
            cambiar[1].innerHTML = 'Alto (A)'
            cambiar[2].innerHTML = 'LayFlat (L/F)'
            cambiar[4].innerHTML = 'C/A'
            cambiar[5].innerHTML = 'A'
            cambiar[6].innerHTML = 'L/F'
    }
}