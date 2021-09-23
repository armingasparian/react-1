import React from 'react';
import logo from './images/Logo.png';
import step1 from './images/Wizard-Step1.png';
import step2 from './images/Wizard-Step2.png';
import step3 from './images/Wizard-Step3.png';
import step4 from './images/Wizard-Step4.png';
import step5 from './images/Wizard-Step5.png';
import row from './images/Wizard-HorizontalBar.png';

export default class Tomei extends React.Component {
  state = {   
    logoImg: logo,
    rowImg: row,
    steps: [
      {
        img: step1,
        heaging: ['Step 1'],
        section: ['Create your account password']
      },
      {
        img: step2,
        heaging: ['Step 2'],
        section: ['Personal Information']
      },
      {
        img: step3,
        heaging: ['Step 3'],
        section: ['Employment details']
      },
      {
        img: step4,
        heaging: ['Step 4'],
        section: ['Upload documents']
      },
      {
        img: step5,
        heaging: ['Step 5'],
        section: ['Complete']
      },
    ],
  }

  render(){
    return(
      <div className = "Tomei">
        <div className = "logo">
          <img src = {this.state.logoImg}/>
        </div>
        <div className = "mySteps">
          {
            this.state.steps.map((e) => {
               return(
                  <div className = "step-by-step">
                    <div className = "step-item">
                      <img src = {e.img}/>
                      <h4>{e.heaging}</h4>
                      <p>{e.section}</p>
                    </div>
                    <div className = "rowImg">
                      <img src = {this.state.rowImg}/>
                    </div>
                  </div>
               )
            })
          }
        </div>
      </div>    
    )
  }
}