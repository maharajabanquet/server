const fs = require("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 , ownerPassword: 'ankit'});

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  // generateFooter(doc);
  metaInfo(doc)
  doc.pipe(fs.createWriteStream(path));
  doc.end();
}


function generateHeader(doc) {
  doc
    .image("logo.png", 200, 45, { width: 180})
    .fillColor("#444444")
    .fontSize(20)
    // .text("Maharaja Banquet", 110, 57)
    .fontSize(10)
    .text("Pankaj Chowk,", 200, 50, { align: "right" })
    .text("Near Mawesi Hospital", 200, 65, { align: "right" })
    .text("P.O: Raxaul, Bihar, 845305", 200, 80, { align: "right" })
    .text("Phone Number: +919572177693", 200, 95, { align: "right" })

    .moveDown();
    
}
function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Receiving Slip", 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(12)
    .text("Date:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.date, 80, customerInformationTop)
    .font("Helvetica")
    .text("Security Deposit:", 50, customerInformationTop + 15)
    .font("Helvetica-Bold")
    .text(invoice.securityDeposit, 145, customerInformationTop + 15)
    .font("Helvetica")
    .text("Mobile Number:", 50, customerInformationTop + 30)
    .font("Helvetica-Bold")
    .text(invoice.mobileNumber, 145, customerInformationTop + 30)
   

    .font("Helvetica-Bold")
    .text(invoice.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.address, 300, customerInformationTop + 15)
    .moveDown();

  generateHr(doc, 252);
}


function metaInfo(doc) {
  doc
  .font('./Kalam-Regular.ttf')
    .fillColor("#444444")
    .fontSize(12)
    .text("नोट:-", 50, 450)
    .fontSize(12)
    .text("(1) वर्तन / समानों की टुट फुट कि जिम्मेवारी  पार्टी / प्राप्तकर्ता की होगी। टुटे पाये वर्तन / समानो का कीमत देय होगा ।", 50, 470)
    .fontSize(12)
    .text("(2) वर्तन को साफ कराके वापस करने की जिम्मेवारी पार्टी को होगी । सफाई नही कराने पर इरुप मे रु0- 1000/- अलग से देय होगा, जो सेक्युरिटी रुपया से वसुला जा सकता है ।", 50, 510)
    .fontSize(12)
    .text("(3) समान लेने तथा देने समय समान को मिला लें ।", 50, 550)
    .fontSize(12)
    .text("प्राप्तकर्ता का हस्ताक्षर",50, 650, { align: "right" })
   
    
    generateHr(doc, 185);

 
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 260;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Sl.No",
    "Item Name",
    "Quantity",
    "Verified",
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      i+1,
      item.itemName,
      item.quantity,
      "[     ]"
    );

    generateHr(doc, position + 20);
  }
}

function generateFooter(doc) {
  doc
  .font('./Kalam-Regular.ttf')
    .fontSize(5)
    .text(
      "",
      50,
      780,
      { align: "center", width: 500 }
    );
}

function generateTableRow(
  doc,
  y,
  item,
  itemName,
  quantity,
  verified,
) {
  doc
    .fontSize(10)
    .text(item, 55, y, { width: 90, align: "left" })
    .text(itemName, 150, y, { width: 90, align: "center" })
    .text(quantity, 280, y, { width: 90, align: "center" })
    .text(verified, 430, y, { width: 90, align: "center" })

    
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}


function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = {
  createInvoice
};