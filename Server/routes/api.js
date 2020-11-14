const express = require('express')
const router = express.Router()
var request = require('sync-request');

router.get(`/isbn/:isbn`,function(req,res){
    const isbn = req.params.isbn;
    const result = request('GET', `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    res.send(result.getBody())
})


router.get(`/title/:title`,function(req,res){
    const title = req.params.title;
    const result = request('GET', `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    res.send(result.getBody())
})


router.get(`/author/:author`,function(req,res){
    const author = req.params.author;
    const result = request('GET', `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`);
    res.send(result.getBody())
})


router.get(`/publisher/:publisher`,function(req,res){
    const publisher = req.params.publisher;
    const result = request('GET', `https://www.googleapis.com/books/v1/volumes?q=inpublisher:${publisher}`);
    res.send(result.getBody())
})

router.get(`/firstbooks`,function(req,res){
    const result = request('GET', `https://www.googleapis.com/books/v1/volumes?q=maxResults=20`);
    res.send(result.getBody())
})


module.exports = router