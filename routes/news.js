
const express = require('express');
const { Router } = require('express');
const router = express.Router();
require('dotenv/config')
const request = require('request');
router.get('/list', (req, resp) => {
    request({
        headers: {
            'X-Aut-Web-T': process.env.NEWS_TOKEN,
            'Uid': '1679775228222591000',
            'Cid':521,
            'At': 'Gu3m3gVhYiR8d_iSCfG8yj7TJeyZ0ZhbQvhpD_MCTbFp4JlLUe61WJTFHGhYUMP51W3bngeg4F346ErTJuL4jvPeBhWSv2kONd5YqOl99S5WLDUfBiiR5aSwJbyL0KCAYNcrNEYWy4XZvQMiP640cLDws4pQFfmOlRxhx3D6K4tO3HNHM_jpMlLvhTl78CuWQjlilOt2yjUTbuzy7Q-8Occ0UZ9XPR9WUfByv4mRKIzzd0qL1hh1rdBqqZWTV9qk'
        },
        uri: `https://www.bhaskar.com/__api__/api/2.0/feed/category/listingUrl/local/bihar/motihari/raxaul/?cursor=${req.query.cursor}&direction=down`,
        method: 'GET'
    }, function (err, res, body) {
        //it works!
        console.log(res.body);
        resp.status(200).json(JSON.parse(res.body))
    });
})

router.get('/news-details', (req, resp) => {
    request({
        headers: {
            'X-Aut-T': process.env.X_AUTH,
            'Hybdigitalpaywall': process.env.Hybdigitalpaywall,
            'Srvvideoautoplay': process.env.Srvvideoautoplay,
            'Content-Type': 'application/json',
            'At': process.env.At,
            'Dtyp': 'web',
            'Rt': process.env.Rt,
            'Cid': process.env.Cid

        },
        uri : `https://prod.bhaskarapi.com/api/2.0/feed/story/filename/${req.query.newsTitle}`,
        method: 'GET'
    }, function (err, res, body) {
        //it works!
        resp.status(200).json(JSON.parse(res.body))
    });
})

module.exports = router
