const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate.js');


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(apiData);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    // Overview Page
    if(pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html',
        });

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);

    // Product Page
    } else if(pathname === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html',
        });
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

    // API
    } else if(pathname === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json',
        });
        res.end(apiData);

    // Not Found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Nalle Dalle',
        });
        res.end('<h1>Page not found!!</h1>');
    }
});

server.listen(80, 'localhost', () => {
    console.log('Listening on port 80');
});

