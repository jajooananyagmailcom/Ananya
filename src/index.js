import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";
import { HackClubImg } from "./Fimages/images.js";
import  "./Fimages/images.css";
import {Paragraph} from "./Textbodies/textbodies.js";
import "./Textbodies/textbodies.css";
import {Button} from "./Fbutton/button.js";
import "./Fbutton/button.css";
class SectionOne extends React.Component {
  render(){
    return(
      <div>
        <table>
        <tr>
            <td> <HackClubImg /> </td>
            <td> Mason Hack Camp 2018 </td>
            <td> <HackClubImg /> </td>
        </tr>
        
        </table>
        <br />
        <Paragraph />
      </div>
    );
  }
}
class SectionTwo extends React.Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}
class WholePage extends React.Component{
  render(){
    return(
    <div>
      <div>
        <SectionOne />
      </div>
      <div>
        ---
      </div>
      <div>
        <SectionTwo />
      </div>
    </div>
    );
  }

}
ReactDOM.render(<WholePage />, document.getElementById('root'));