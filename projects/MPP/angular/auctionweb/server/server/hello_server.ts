import * as http from 'http';
import { request } from 'https';

const server = http.createServer((request,response)=>{
    response.end("hello Node!");
});

server.listen(8000);
