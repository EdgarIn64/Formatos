function verTabla() {
    let tablaDatos = document.getElementById('tablaDatos')
    let btnVer = document.getElementById('btnVer')
    if (btnVer.value=='Ver Tabla') {
		tablaDatos.style.display = 'block'
		btnVer.value = 'Ocultar Tabla'
    }	
    else {
        tablaDatos.style.display = 'none'
		btnVer.value = 'Ver Tabla'
    }
}

function datosTitulo() {
    let bandera = true
    let datos = document.getElementsByClassName('datoTitulo')
    if (bandera && datos.length > 0) {
        let tdDatoTitulo = document.getElementsByClassName('tdDatoTitulo')
        for (var i = 0; i < datos.length; i++) {
            tdDatoTitulo[i].innerHTML = datos[i].value
        }
    }
    let confirmacion = document.getElementById('confirmacion')
    confirmacion.innerHTML = 'Tabla actualizada'
    setTimeout(function() {
        confirmacion.innerHTML = ''
    }, 5000);
}

function datos(firmas=1) {
    let bandera = true
	let firma = false
    let contador = 1
	let datos = document.getElementsByClassName('dato')
	for (var i = 0; i < datos.length; i++) {
		if(datos[i].value == '' && datos[i].className != 'dato oculto') {
			bandera = false
			alert('Te faltan datos que llenar')
			break
		}
	}
	if (bandera && datos.length > 0) {
		let tbody = document.getElementsByTagName('tbody')[0]
		let llenar = '<tr>'
		for (var i = 0; i < datos.length; i++) {
			if (datos[i].className == 'dato oculto') {
                let firmaGuardada = document.getElementById('firmaGuardada'+contador).innerHTML
				llenar += '<td>'+firmaGuardada+'</td>'
                contador++
            }
			else
				llenar += '<td>'+datos[i].value+'</td>'
			if (datos[i].tagName != 'SELECT')
				datos[i].value = ''
		}
		llenar += '</tr>'
		tbody.innerHTML += llenar
        for (var i = 1; i < firmas+1; i++) {
            document.getElementById('firmaGuardada'+i).innerHTML = '---'
        }
	}
}

/*         EXPORTAR TABLA            */

// Opción 1
function exportTableToExcel(tableID = 'tablaDatos', filename = 'Orden'){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    let titulo = document.getElementById('titulo').innerHTML;
    let extra = document.getElementById('extra').value;
    filename = titulo+' '+filename+' '+extra;
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

// Opción 2
var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()


