const axios = require('axios');

module.exports = async () => {
    return await axios(
        'http://localhost:1337/api/platos?populate=*&filters[categoria][id][$eq]=1'
    )
        .then((res) => res.data.data)
        .catch((err) => console.error(err));
};
