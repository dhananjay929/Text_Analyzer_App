import React, { useState } from 'react'


export default function About(props) {
    // const[myStyle, setMyStyle] = useState(
    //     {
    //     color: 'white',
    //     backgroundColor: 'black' })
    //     // const [btnText, setBtnText] = useState("Enable Dark Mode")
    let myStyle = {
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }
    
  return (
      <div className="container" >
        <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About the application :
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>The Text Manipulator app is a powerful tool</strong>  designed to assist users in manipulating and transforming text with ease. With a user-friendly interface, this app offers a range of features to enhance productivity and streamline text-related tasks. Users can perform various operations such as text formatting, character and word count, case conversions, and more. The app supports a wide array of text manipulation functions, including copying text. Whether it's editing documents, cleaning up data, or generating formatted text, the Text Manipulator app simplifies the process, saving time and effort for users across various domains.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Updates :
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        The app is in progress and will always provide regular updates as per the requirement. As of now we are planning to tie up with chatGPT to provide more interaction to users.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About the developer of this app :
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>( Er. Dhananjay Kumar )</strong> No words to describe his efforts to make this app. He worked day and night to learn HTML, CSS , JS amd ReactJS. After that he came built this app, he is such a nice man, there are no words describe his greateness. He is Great.
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
