const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importando as rotas
const ProductRoutes = require('./routes/ProductRoutes');

//usando as rotas
app.use('/products', ProductRoutes);

app.listen(port, () => {
    console.log(`Server rodando em ${port}`)
})