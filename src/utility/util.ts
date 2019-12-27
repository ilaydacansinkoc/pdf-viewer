const BASE64_MARKER = ';base64,';

export const margins = {
  top: 80,
  bottom: 60,
  left: 40,
  width: 522,
  backgroundColor: 'red'
};

export function convertDataURIToBinary(dataURI: string) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

export function headerFooterFormatting(doc: any, totalPages:number) {
  for (let i = totalPages; i >= 1; i--) {
    doc.setPage(i);
    header(doc);
    footer(doc, i, totalPages);
    doc.page++;
  }
}

export function header(doc:any) {
  doc.setFontSize(14);
  doc.setTextColor(40);
  doc.setFontStyle("Arial");

  doc.text("Short Scientific Articles", margins.left, 25);
  doc.setLineCap(2);
  doc.line(0, 30, margins.width + 100, 30); // horizontal line
}

export function footer(doc:any, pageNumber: number, totalPages: any) {
  const str = "Page " + pageNumber + " of " + totalPages;
  doc.setFontSize(10);
  doc.text(str, margins.left, doc.internal.pageSize.height - 20);
}

export function setBackgroundColor(doc: any) {
  doc.setFillColor(153, 201, 228);
  doc.rect(0, 0, 595.28, doc.internal.pageSize.height, 'F');
}

