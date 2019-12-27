import React from "react";
import jsPDF from 'jspdf';
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import '../styles/cards.scss';

class PdfViewerOne extends React.PureComponent<{},{}>{
  constructor(props: {}) {
    super(props);
    this.exportToPdf = this.exportToPdf.bind(this);
  }
  exportToPdf(){
    const content = document.getElementById("content");
    const doc = new jsPDF('p','pt','a4');
    const margins = {
      top: 40,
      bottom: 60,
      left: 40,
      width: 522
    };
    // @ts-ignore
    doc.fromHTML(content, // HTML string or DOM elem ref.
      margins.left, // x coordinate
      margins.top, // y coordinate
      {
        width: margins.width // max width of content on PDF
      },
      function(dispose: any) {
        /* dispose: object with X, Y of the last line add to the PDF
        this allow the insertion of new lines after html*/
        doc.save("pdf_viewer_one.pdf");
      },
      margins
    );
  }
  render(){
    return(
      <>
        <div id="content" className="card_wrapper">
          <Card title="Scientists just discovered 125 million-year-old dinosaur dandruff" subTitle="Dinos got dandruff, too." style={{width: '600px'}}>
            <p>{`It's no secret dinosaurs possessed their own fair share of dirty habits-most bodies can get pretty gross, no matter the species. But dandruff?
            Nobody really saw that coming.`}</p>
            <p>{`A new study published in Nature Communications illustrates the discovery of some 125 million-year-old dinosaur dandruff fossils.
            The findings aren't just a quick excuse for making a bad Head and Shoulders quip, but also actually explain a mechanism by which dinosaurs
            did something nearly universal: shed skin.`}</p>
            <p>{`"Probably nobody much thought about how dinosaurs shed their skin before", says Mike Benton, a professor of vertebrate paleontology at the
            University of Bristol and a coauthor of the new study. The new findings "tell us that dinosaurs were like birds, shedding their skin in small flakes".`}</p>
            <p>{`The findings stem from the analysis of feathers from the Cretaceous period in China, from three different dinosaur species 
            (Microraptor, Beipiaosaurus, and Sinornithosaurus) and the early bird Confuciusornis. Benton and his colleagues had been working 
            with the specimens since 2007, and the characterization of the skin flakes is just their latest milestone.`}</p>
          </Card>
          <Card title="Russian cuckoos are taking over Alaska" subTitle="Thanks to climate change, these crybaby parasites are heading to North America." style={{width: '600px'}}>
            <p>{`Talk about crappy new neighbors.`}</p>
            <p>{`When cuckoos come to town, it invariably spells trouble for resident songbirds. 
            In the cuckoo's historic range, native species have gotten smart to the cuckoo's ways and cope with this potential incursion by hiding their nests-and tossing out 
            cuckoo eggs before they have time to hatch. But new research shows that both common and oriental cuckoos may be moving into Alaska, which is a grim prospect for resident warblers, 
            buntings, and wagtails.`}</p>
            <p>{`"It looks like cuckoos are ready to invade North America," says University of Illinois ornithologist Mark Hauber, the study's corresponding author. 
            In the past decade, Hauber says, there has been an increase in cuckoo sightings in both Siberia 
            and Alaska, something likely related to climate change. 
            This poses a huge issue for birds in Alaska, Hauber says, as they tend to be fairly specialized and defenseless against cuckoos' strategies.`}</p>
          </Card>
        </div>
        <div className="button_wrapper"> <Button label={"Export to Pdf!"} onClick={this.exportToPdf} className="p-button-success"/> </div>

      </>
    )
  }
}

export default PdfViewerOne;
