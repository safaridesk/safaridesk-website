"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfViewer = () => {
    const [pdfUrl] = useState('https://bceyrutojnaqiqxmaszp.supabase.co/storage/v1/object/public/SafariDesk%20website%20bucket%201/SafariDesk%20Docs/SafariDesk-Documentation.pdf');
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="py-[4rem] bg-[#DCDCDC] dark:bg-veryBlack" style={{ width: '100vw', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ width: '90vw', maxWidth: '1200px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(error) => console.error('Error loading PDF:', error)}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <button className='bg-primary px-4 py-2 rounded' disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                    <span> Page {pageNumber} of {numPages} </span>
                    <button className='bg-primary px-4 py-2 rounded' disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;