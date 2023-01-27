import express from 'express';
import connect from './config/db';
import Server from './models/Server';

const server = new Server();
server.listen();
