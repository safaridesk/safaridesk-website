"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return (
      <div className={`pdf-viewer ${pageNumber % 2 === 0 ? 'bg-white' : 'bg-gray-800'} p-4`}>
        <Document
          file="/docs/SafariDesk-Documentation.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex justify-between mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

export default PdfViewer;