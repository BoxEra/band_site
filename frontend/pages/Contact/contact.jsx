import React from 'react';

import './contact.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit(event) {

  }

  render() {
    return(
      <div className={'contactWrapper'}>
        <h1 className={'contactHeader'}>CONTACT</h1>
        <div className={'contactText'}>
          Integer mattis aliquam justo sed cursus. Vestibulum vehicula metus quis sem imperdiet, tincidunt ornare lectus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Vestibulum accumsan felis hendrerit diam ornare hendrerit in in magna.
        </div>
        <div className='contactSenderContainer'>
          <input className='contactSenderForm' id='name' placeholder='Name' />
          <input className='contactSenderForm' id='email' placeholder='Email' />
        </div>
        <textarea className='contactSenderMessage' id='message' placeholder='Message' />
        <div>
          <button className='contactSendButton' onClick={this.handleSubmit}>Send</button>
        </div>
        <img className={'spacecraft'} src={'https://s3.amazonaws.com/boxera/spacecraft_large.png'}></img>
      </div>
    );
  }
}

export default Contact;
