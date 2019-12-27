import React from 'react';
import PdfViewerOne from "./components/PdfViewerOne";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <PdfViewerOne/>
    </div>
  );
};

export default App;
