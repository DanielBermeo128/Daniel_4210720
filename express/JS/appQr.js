function generar(){
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let numero = document.getElementById('numero').value;
    const QR = document.getElementById('contenedor');
    document.getElementById('nombre').value="";
    document.getElementById('correo').value="";
    document.getElementById('numero').value=""; //Borra los datos de la label
    QR.innerHTML = ""; // Limpiar el QR anterior

    let qr = new Image();   
    let link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ nombre + " | "+ correo + " | "+ numero;     
    qr.src= link;
    QR.innerHTML = qr;
}