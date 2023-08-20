//import React from 'react'
import Header from '../Components/Header'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import resume from '../files/Resume.pdf';

function ResumePage() {

  return (
    <>
    
        <Header />

    <a href='../files/Resume.docx'>Hi</a>

        <div>
    <h1>My PDF Resume</h1>
    <h2 id="best">Welcome!</h2>
    <Document file={resume}>
      <Page pageNumber={1} />
    </Document>
</div>
    </>
  )
}

export default ResumePage