import express from "express";
import next from "next";

import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import LRUCache from 'lru-cache';
import mongoose from 'mongoose';

import router from './api/routes';


class Server {
    constructor() {
        const dev = process.env.NODE_ENV !== "production";
        this.nextApp = next({dir:'./src', dev});
        this.expressApp = express();
        this.configureExpressServer();
        this.ssrCache = new LRUCache({
            max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
            length: function (n, key) {
                return n.length
            },
            maxAge: 1000 * 60 * 60 * 24 * 30
        });
    }

    configureExpressServer() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({extended: true}));
        this.expressApp.use(cors());
        this.expressApp.options("*", cors());
        this.expressApp.use(compression());
        this.expressApp.use(morgan('common'));
        this.expressApp.use(helmet());
        this.configureCustomNextServer();
    }

    configureCustomNextServer() {
        const handle = this.nextApp.getRequestHandler();
        // const handle = routes.getRequestHandler(this.nextApp);
        this.nextApp.prepare().then(() => {
            //==== Use this to enable caching
            // this.expressApp.get('/_next/*', (req, res) => {
            //     /* serving _next static content using next.js handler */
            //     handle(req, res);
            // });
    
            // this.expressApp.get('*', (req, res) => {
            //     /* serving page */
            //     return this.renderAndCache(req, res)
            // });
            //==== Use this to disable caching

            this.expressApp.use('/api', router);
            this.expressApp.get('*', (req, res) => {
                handle(req, res);
            });

           
        });        
    }

    connectToMongo() {
        
    }

    static Bootstrap() {
        return new Server();
    }

    getCacheKey(req) {
        return `${req.path}`
    }

    async renderAndCache(req, res) {
        const key = this.getCacheKey(req);
    
        // If we have a page in the cache, let's serve it
        if (this.ssrCache.has(key)) {
            //console.log(`serving from cache ${key}`);
            res.setHeader('x-cache', 'HIT');
            res.send(this.ssrCache.get(key));
            return
        }
    
        try {
            //console.log(`key ${key} not found, rendering`);
            // If not let's render the page into HTML
            const html = await this.nextApp.renderToHTML(req, res, req.path, req.query);
    
            // Something is wrong with the request, let's skip the cache
            if (res.statusCode !== 200) {
                res.send(html);
                return
            }
    
            // Let's cache this page
            this.ssrCache.set(key, html);
    
            res.setHeader('x-cache', 'MISS');
            res.send(html)
        } catch (err) {
            this.nextApp.renderError(err, req, res, req.path, req.query)
        }
    }
}


let server = Server.Bootstrap();
export default server.expressApp;
// // server.configure();
// server.expressApp.listen(5000, err => {
//     if (err) throw err;
//     console.log('listening on port 5000');
// })