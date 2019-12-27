import React from "react";
import {Button} from "primereact/button";
import '../styles/cards.scss';
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";
import {InputMask} from "primereact/inputmask";
import *  as utility from '../utility/util';
import jsPDF from "jspdf";
import {Growl} from "primereact/growl";

interface State {
  name: string;
  email: string;
  address: string;
  phone: string;
  notes: string;
}
class PdfViewerThree extends React.PureComponent<{},State>{
  private growl: any;
  constructor(props: {}) {
    super(props);
    this.state = {
      name:"",
      email:"",
      address:"",
      phone:"",
      notes:"",
    };
    this.exportToPdf = this.exportToPdf.bind(this);
  }
  exportToPdf(){
    const {name, email, address, phone, notes} = this.state;
    if(name !== "" && email !== "" && address !== "" && phone !== "" && notes !== ""){

      const base64image = utility.imageAsBase64;
      const doc = new jsPDF();

      doc.setFontSize(12);
      doc.text("Form As Pdf",20,10);
      doc.line(0,15,400,15);
      doc.addImage(base64image,'JPEG',5,25,200,188.5);
      doc.text(name, 15,50);
      doc.text(email,15,87);
      doc.text(address, 15,125);
      doc.text(phone, 15,162);
      doc.text(notes, 15,199.5);

      doc.save("form.pdf");
    }else
      this.growl.show({severity: 'error', summary: 'Please fill the information form.', detail: 'Empty Input Field'});

  }
  render(){
    return(
      <>
        <div id="content" className="card_wrapper">
          <Growl ref={(el) => this.growl = el}/>
          <div>
            <div className="input_area">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} value={this.state.name} onChange={(e:any) => this.setState({name: e.target.value})} />
                <label htmlFor="float-input">Username</label>
              </span>
            </div>
            <div className="input_area">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} placeholder={"abc@example.com"}
                           value={this.state.email} onChange={(e:any) => this.setState({email: e.target.value})} />
              </span>
            </div>
            <div className="input_area">
              <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} value={this.state.address} onChange={(e:any) => this.setState({address: e.target.value})} />
                <label htmlFor="float-input">Address</label>
              </span>
            </div>
            <div className="input_area">
              <span className="p-float-label">
                <InputMask mask="(999) 999-9999" value={this.state.phone} placeholder="Phone Number" onChange={(e:any) => this.setState({phone: e.target.value})}/>
              </span>
            </div>
            <div className="input_area">
              <span className="p-float-label">
                <InputTextarea value={this.state.notes} onChange={(e:any) => this.setState({notes: e.target.value})} rows={5} cols={50}/>
                <label htmlFor="float-input">Notes</label>
              </span>
            </div>
          </div>
        </div>
        <div className="button_wrapper"> <Button label={"Export to Pdf!"} onClick={this.exportToPdf} className="p-button-success"/> </div>
      </>
    )
  }
}
export default PdfViewerThree;
