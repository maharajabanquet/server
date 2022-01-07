const express = require('express');
const puppeteer = require('puppeteer')
const fs = require('fs')
const router = express.Router();
const handlebars = require("handlebars");
var invNum = require('invoice-number')


const main = async (data, res) => {
     let toPut = JSON.parse(data);
     toPut['invoice'] = invNum.InvoiceNumber.next('00001');
    return   (async () => {
        // launch a new chrome instance
        const browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox']
        })
        // create a new page
        const page = await browser.newPage()
      
        // set your html as the pages content
        const html = fs.readFileSync(`./template/invoice.html`, 'utf8')
        var template = handlebars.compile(html);
        if(toPut && toPut.facilities && toPut.facilities.length === 0) {
          toPut['notfacAvail'] = 'false';
        } else {
          toPut['facAvail'] = true;
        }
        if(toPut && toPut.requirements === 'Marriage or reception') {
          toPut['showFeature'] = true;
        } else {
          toPut['showFeature'] = false;
        }
        var html_temp = template(toPut)
        await page.setContent(html_temp, {
          waitUntil: 'domcontentloaded',
        })
        const pdfBuffer = await page.pdf({
          format: 'A4',
        })
        await browser.close()
        res.end(new Buffer(pdfBuffer, 'base64'));
      })()
 }

router.get('/invoice', (req, res) => {
  console.log(req.query);
    main(req.query.data, res).then(res => {
    }, (err)  => {
      console.log(err);
    })
})

module.exports = router;