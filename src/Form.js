import React from 'react';
import userImg from './images/Avatar.png';
import next from './images/arrow-right.png';

export default class Form extends React.Component {
  state = {   
    userImg: userImg,
    nextImg: next,
    user: [
      {
        inputName: ['Name'],
        inputType: ['text']
      },
      {
        inputName: ['Email'],
        inputType: ['email']
      },
      {
        inputName: ['Password'],
        inputType: ['password']
      },
      {
        inputName: ['Confirm Password'],
        inputType: ['password']
      }
    ],
  }  

  render(){
    return(
      <div className = "Form">
       <div className = "create-account__heading">
         <h3>Create your account</h3>
       </div>
       <div className = 'create-account__info'>
         <p>
             Because there will be documents that you need to prepare to apply for the loan, 
         let's start off by creating a password so that you can login to your account once you have these documents ready.
         </p>
       </div>
       <div className = "login">
          <div className = "user-img">
          <img src = {this.state.userImg} alt=""/>
          <p>Upload</p>
        </div>
          <div className = "user-form">
            <form className = "myForm">
            {            
              this.state.user.map((e) => {
                return(
                      <div class = "form-input">
                          <p>{e.inputName}</p>
                          <input type = {e.inputType}/>
                      </div>
                )
              })
            }
          </form>
        </div>
       </div>
       <div className = "next">
         <button>
           save & next
           <img src={this.state.nextImg} alt=""/>
         </button>
         </div>
    </div>
    )
  }
}