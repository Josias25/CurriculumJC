let jsonUrl = 'https://raw.githubusercontent.com/Josias25/JosCV_TI51/master/JosCV.json';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea optener.
    .then(informacion => mostrarDato(informacion))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();

curriculum = `<body>
<div>
    <h1>{nombre}</h1>
    <p>{fechaNacimiento}</p>
    <p style="text-align: justify;">{Resumen}</p>
    <p>Teléfono:{telefono}</p>
    <p>Correo:{correo}</p>
    <p>Puesto solicitado: {puestoSolicitado}</p>
    <fieldset>
        <legend>Lenguajes</legend>
        <p>{lenguages}</p>
    </fieldset>
    <fieldset>
        <legend>Base de datos</legend>
        <p>{baseDeDatos}</p>
    </fieldset>
    <fieldset>
        <legend>Paquetería</legend>
        <p>{paqueteria}</p>
    </fieldset>
    <fieldset>
        <legend>Experiencia laboral</legend>
        <ul>
            <li><span>Empresa:</span>{empresa}</li>
            <li><span>Puesto:</span>{Puesto}</li>
            <li><span>Fecha de ingreso:</span>{fechaIngreso}</li>
            <li><span>Fecha de termino:</span>{fechaTermino}</li>		
        </ul>
    </fieldset>
    <fieldset>
        <legend>Educación</legend>
        <ul>
            <li><span>Escuela:</span> {escuela}</li>
            <li><span>Grado de Estudio:</span> {gradoEstudio}</li>
            <li><span>Fecha de ingreso:</span> {fechaIngreso}</li>
            <li><span>Fecha de termino:</span> {fechaTermino}</li>
        </ul>
    </fieldset>
</div>

</body>`

function mostrarDato (informacion){
    let html = curriculum;
    let nombre = informacion.nombre;
    let fechaNacimiento = informacion.fechaNacimiento;
    let Resumen = informacion.Resumen;
    let telefono = informacion.telefono;
    let correo = informacion.correo;
    let puestoSolicitado = informacion.puestoSolicitado;
    let lenguages = informacion.lenguages;
    let baseDeDatos = informacion.baseDeDatos;
    let paqueteria = informacion.paqueteria;
    let empresa = informacion.experienciaLaboral[0].empresa;
    let Puesto = informacion.experienciaLaboral[0].Puesto;
    let fechaIngreso = informacion.experienciaLaboral[0].fechaIngreso;
    let fechaTermino = informacion.experienciaLaboral[0].fechaTermino;
    let escuela = informacion.educacion[0].escuela;
    let gradoEstudio = informacion.educacion[0].gradoEstudio;
    let fechaingreso = informacion.educacion[0].fechaIngreso;
    let fechatermino = informacion.educacion[0].fechaTermino;


    


    html = html.replace("{nombre}", nombre);
    html = html.replace("{fechaNacimiento}", fechaNacimiento);
    html = html.replace("{Resumen}", Resumen);
    html = html.replace("{telefono}", telefono);
    html = html.replace("{correo}", correo);
    html = html.replace("{puestoSolicitado}", puestoSolicitado);
    html = html.replace("{lenguages}", lenguages);
    html = html.replace("{baseDeDatos}", baseDeDatos);
    html = html.replace("{paqueteria}", paqueteria);
    html = html.replace("{empresa}", empresa);
    html = html.replace("{Puesto}", Puesto);
    html = html.replace("{fechaIngreso}", fechaIngreso);
    html = html.replace("{fechaTermino}", fechaTermino);
    html = html.replace("{escuela}", escuela);
    html = html.replace("{gradoEstudio}", gradoEstudio);
    html = html.replace("{fechaIngreso}", fechaingreso);
    html = html.replace("{fechaTermino}", fechatermino);


    document.getElementById('curriculum').innerHTML +=html;
    
};
