const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter
    };
};
const counterMain = createCounter();
const counterAbout = createCounter();

const http = require('http');

const server = http.createServer((reg, res) => {
    console.log('Запрос получен');
    
    if (reg.url === '/') {
        
        res.writeHead(200, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        res.end(`<h1>Корневая страница</h1><p>Просмотров: ${counterMain()}</p><a href="/about">Ссылка на страницу /about</a>`);
    } else if (reg.url === '/about') {
       
        res.writeHead(200, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        res.end(`<h1>Страница About</h1><p>Просмотров: ${counterAbout()}</p><a href="/">Ссылка на страницу /</a>`);
    } else {
        res.writeHead(404, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});
const port = 3000;
server.listen(port);