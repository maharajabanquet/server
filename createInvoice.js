const fs = require("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc, invoice);
  generateFooters(doc)
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
    .text("Invoice", 50, 160);

  generateHr(doc, 185);
  generateHr(doc, 188);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoice_nr, 150, customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
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
    "",
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
      "",
      formatCurrency(item.amount / item.quantity),
      item.quantity,
      formatCurrency(item.amount)
    );

    generateHr(doc, position + 20);
    
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
    formatCurrency(invoice.subtotal - invoice.paid)
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

function generateFooters(doc) {
  doc
    .fontSize(10)
    .text(
    ` Facilities We Provide:\n 
      - Sofa - Large (3 Seater)
      - Chair with cover
      - AC Mini Hall - 01
      - AC Mandap Hall - 01
      - Kitchen
      - Lighting  
      - Generator (Diesel Not Included)
      - Open Lawn
      - VIP Room With Attached Bathroom (AC) - 06
      - Jaimala Stage With Fixed Decoration - 01
      - Delux Room For Bride and Groom With Attached Bathroom (AC)-02
      `,
      50,
      550,
      { align: "left", width: 500 }
    );
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

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}


function formatCurrency(cents) {
  return "Rs." + cents
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
