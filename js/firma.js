/*     Canvas     */
    
    document.getElementById('guardar').addEventListener("click",function(e) {
        let fecha = fechaActual()
        let nombreFirma = document.getElementById('nombreFirma').value
        document.getElementById('nombreFirma').value = ''
        let titulo = document.getElementById('titulo').innerHTML
        nombreFirma = titulo+'-'+nombreFirma+'-'+fecha
        let canvas = document.getElementById('canvas')
        //let img = canvas.toDataURL('image/png')
        let link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = nombreFirma
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        let firmaGuardada = ''
        if (e.target.innerHTML == 'Guardar Firma')
            firmaGuardada = document.getElementById('firmaGuardada1')
        else {
            let selectFirma = document.getElementById('selectFirma').value
            firmaGuardada = document.getElementById('firmaGuardada'+selectFirma)
        }
        firmaGuardada.innerHTML = nombreFirma+".png"

    },false);

    function fechaActual() {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')//Enero es 0!
        let yyyy = today.getFullYear()
        return (mm + '-' + dd + '-' + yyyy + '-' + today.getHours() + 'hrs')
    }
    
    var wrapper = document.getElementById("signature-pad");

    var canvas = wrapper.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)'
    });

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);

        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);

        signaturePad.clear();
    }
    window.onresize = resizeCanvas;
    resizeCanvas();