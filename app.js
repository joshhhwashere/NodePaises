const express = require('express');
const app = express();

const Paises = [
    {
        country: 'Ecuador',
        cities: ['Quito', 'Guayaquil', 'Cuenca']
    },
    {
        country: 'Perú',
        cities: ['Lima', 'Arequipa', 'Cusco']
    }
];

app.get('/api/countries', (req, res, next) => {
    const countries = Paises.map(data => data);
    res.send(countries);
    next();
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
