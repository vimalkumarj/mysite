/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Vimalkumar J', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About Vimal', year: new Date().getFullYear(), message: 'Your application description page.' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact Vimal', year: new Date().getFullYear(), message: 'Your contact page.' });
};
