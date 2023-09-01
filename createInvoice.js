const fs = require("fs");
const PDFDocument = require("pdfkit");


function removeComma(number) {
  console.log(number);
  if(number.length > 1) {
    let result=number.replace(/\,/g,''); // 1125, but a string, so convert it to number
    result = parseInt(result,10);
    return result;
  } else {
    return number
  }
}
function numberWithCommas(x) {
  console.log("CHECK " ,x);
    return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
    
}
function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateFooters(doc, invoice)
  generateInvoiceTable(doc, invoice);
  generateFooter(doc, invoice);
  // metaInfo(doc)
  

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
    .moveDown();
    
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Estimate", 50, 160);

  generateHr(doc, 185);
  generateHr(doc, 188);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Estimate Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoice_nr, 150, customerInformationTop)
    .font("Helvetica")
    .text("Estimate Date:", 50, customerInformationTop + 15)
    .text(formatDate(new Date()), 150, customerInformationTop + 15)
    .text("Booking Date:", 50, customerInformationTop + 30)
    .text(
      invoice.bookingDate,
      150,
      customerInformationTop + 30
    )

    .font("Helvetica-Bold")
    .text(invoice.shipping.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.shipping.address, 300, customerInformationTop + 15)
    // .text(
    //   invoice.shipping.city +
    //     ", " +
    //     invoice.shipping.state +
    //     ", " +
    //     invoice.shipping.country,
    //   300,
    //   customerInformationTop + 30
    // )
    .moveDown();

  generateHr(doc, 252);
  generateHr(doc, 255);

}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Facility",
    "Extra Service",
    "Cost",
    "Days",
    "Line Total"
  );
  generateHr(doc, invoiceTableTop + 20);
  
  doc.font("Helvetica");

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.item,
      addOn(invoice),
      formatCurrency(removeComma(item.amount) / removeComma(item.quantity)),
      item.quantity,
      formatCurrency(removeComma(item.amount))
    );

    generateHr(doc, position + 20);
    
  }

  function addOn(item) {
    console.log(item);
    if(item && item.dgWithDiesel && item.dj) {
      return '(Diesel and DJ Sound Included)'
    } else if(item && item.dgWithDiesel) {
      return '(Diesel Included)'
    } else if(item && item.dj) {
      return '(DJ Sound Included)'
    }
     else {
      return '(Diesel Not Included)'
    }
  }
  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Subtotal",
    "",
    formatCurrency(invoice.subtotal)
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    "",
    "",
    "Paid To Date",
    "",
    formatCurrency(invoice.paid)
  );

  

  const duePosition = paidToDatePosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "Balance Due",
    "",
    formatCurrency(removeComma(invoice.subtotal) - removeComma(invoice.paid))
  );
  doc.font("Helvetica");
}



function generateFooter(doc, invoice) {
  doc
    .fontSize(10)
    .text(
      `* Please clear balance amount 2 Week before ${invoice.bookingDate} else booking will be cancelled *`,
      50,
      780,
      { align: "center", width: 500, color: 'red' }
    );
}


function metaInfo(doc) {
  doc
  .font('./Kalam-Regular.ttf')
    .fillColor("#444444")
    .fontSize(16)
    .text("TERMS AND CONDITIONS:-", 50, 800)
    .fontSize(16)
    .text("(1) तिथि से एक सप्ताह पहले पूरा भुगतान करें ।", 50, 80)
    .fontSize(16)
    .text(`(2) मानक ध्वनि पर साउंड बॉक्स के द्वारा रात्रि 10 बजे तक संगीत बजाने की अनुमति है । उलंधन करने पर इसके लिए पार्टी स्वयं जिम्मेवार होंगे। ।`, 50, 120)
    .fontSize(16)
    .text("(3) समान लेने तथा देने समय समान को मिला लें ।", 50, 180)
    .fontSize(16)
    .text("(4) शादी या उत्सव में महाराजा वेंकट हॉल का  वर्तन  प्राप्त करने से पहले सरक्यूरिटी मनी जमा करना होगा तथा वर्तन का सफाई खर्च पार्टी को देय होगा अन्यथा वर्तन नही मिलेगा ।  काम खत्म होने के बाद वर्तन वापस करने के बाद सफाई खर्च ₹1000/- काटने के बाद सिक्युरिटी मनी वापस हो जाएगा ।", 50, 210)
    .fontSize(16)
    .text(`(5) मानक ध्वनि पर साउंड बॉक्स के द्वारा रात्रि 10 बजे तक संगीत बजाने की अनुमति है । उलंधन करने पर इसके लिए पार्टी स्वयं जिम्मेवार होंगे। ।`, 50, 320)
    .fontSize(16)
    .text(`(6) किसी भी अनजान या अवांक्षित मेहमान या ब्यक्ति दिखाई दे तो तुरंत आप प्रबंधक , महाराजा बैंकेट हॉल को सूचित करें ।`, 50, 380)
    generateHr(doc, 190, false);

}

function generateFooters(doc, invoice) {
    
  doc
  .image("terms.png", 30, 500, { width: 550})

}
  


function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: "right" })
    .text(quantity, 370, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y, required=true) {
  if(required) {
    doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
  } else {
    doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
  }

   
   
}


function formatCurrency(cents) {
  let num  = numberWithCommas(cents)
  return "Rs." + num
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
}

module.exports = {
  createInvoice
};
