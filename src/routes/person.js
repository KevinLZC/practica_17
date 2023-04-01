let express = require('express'); //inyección de la dependencia de express
let router = express.Router(); // instalación del "router" al que asociaremos todas nuestras rutas

// Aquí se declaran las rutas pero cambiando "app" por "router"
router.get('/student', (req, res) => { //se crea la ruta para acceder al formulario
    res.render('student');
});
router.post('/addStudent', (req, res) => { //ruta de renderizado de datos
    res.render('displayData', {nombre: req.body.nombre,
                            edad: req.body.edad, 
                            nss: req.body.nss, 
                            tipoSangre: req.body.tipoSangre});
}); 

// estamos imprimiendo los datos envíados desde la vista testJson
router.post('/personJson', express.json({type:'*/*'}), (req, res) => { // se realiza la conversión de string a object
    console.log(`Nombre: ${req.body.nombre} - Apellido: ${req.body.apellido}`);
});
// ruta para renderizar la vista testJson y mandar la petición POST a /personJson
router.get('/testJson', (req, res) => {
    res.render('testJson');
});

module.exports = router; // se exporta el router de express