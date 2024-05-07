const express = require('express');
const app = express();

const Paises = [
    {
        country: 'Ecuador',
        cities: ['Quito', 'Salinas', 'Playas']
    },
    {
        country: 'Perú',
        cities: ['Cusco', 'Lima', 'Arequipa']
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
