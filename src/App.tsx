import React from 'react';
import PdfViewerOne from "./components/PdfViewerOne";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PdfViewerTwo from "./components/PdfViewerTwo";


const App: React.FC = () => {
  return (
    <div className="App">
      {/*<PdfViewerOne>*/} {/* Use PdfViewerOne if you want to see no styling applied.*/}
      <PdfViewerTwo/> {/* Use PdfViewerTwo if you want to see some styles applied. However background-color and
                          images cannot be applied by using only plain jspdf library. */}
    </div>
  );
};

export default App;
