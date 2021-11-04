function solicitaDato (){
    let nombreAlumno = prompt("Ingresa tu nombre completo");
    alert("Bienvenido a tu vida universitaria " + nombreAlumno)
    return nombreAlumno
}
solicitaDato();

function solicitaCarrera (){
    let inscripcionCarrera = Number(prompt(`Selecciona tu carrera:
    1- Diseño Grafico
    2- Arquitectura
    3- Licenciatura en Kinesiologia
    4- Licenciatura en Nutrición`));
    alert("Excelente eleccion " + nombreAlumno)
    return inscripcionCarrera
}

solicitaCarrera ();