const fetch = require('node-fetch');

export default function handler(req, res) {
    const {offset, category} = req.query
    console.log(offset, category)
    fetch(`https://openapi.etsy.com/v2/listings/active?api_key=78pwg3cv7qq8f16h74a0yf6v&limit=8&includes=Images&offset=${offset}&tags=${category}`)
    .then(res => res.json())
    .then(json => res.status(200).json({ data: json }));
    
  }