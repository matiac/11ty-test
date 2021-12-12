const axios = require('axios');

module.exports = async () => {
    return await axios('http://localhost:1337/api/categorias')
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
};
