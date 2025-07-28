const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');



app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

//importando as rotas
const ProductRoutes = require('./routes/productRoutes');

//usando as rotas
app.use('/products', ProductRoutes);

app.listen(port, () => {
    console.log(`Server rodando em ${port}`)
})