const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Documentacion de api recidencia",
            version:"1.0.0"
        },
        servers:[
            {
                url:"https://residencial-node1.herokuapp.com"
            }
        ]
    },
    apis:[`${path.join(__dirname,"./src/routes/*.js")}`]
}

const app = express();
app.use(cors());


const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Proyecto levantado conectado');
})

app.use("/api-doc",swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//importar ruta visitas.
const visitaRoutes = require('./src/routes/visita.route');
const residentesRoutes = require('./src/routes/residentes.routes')
const casaRoutes = require('./src/routes/casa.routes')
const turnRoutes = require('./src/routes/turn.route');
const vigilantRoutes = require('./src/routes/vigilant.route');
const visitedRoutes = require('./src/routes/visited.route');
const carRoutes = require('./src/routes/car.route');

//crear ruta de visitas
app.use('/api/v1/visita', visitaRoutes);
app.use('/api/v1/residentes',residentesRoutes)
app.use('/api/v1/casa', casaRoutes)
app.use('/api/v1/turn', turnRoutes);
app.use('/api/v1/vigilant',vigilantRoutes);

//crear ruta de visitas
app.use('/api/v1/visita', visitaRoutes);
app.use('/api/v1/visited', visitedRoutes);
app.use('/api/v1/car', carRoutes);

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})