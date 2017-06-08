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
        <div className='contactSenderContainer'>
          <input className='contactSenderForm' id='name' placeholder='Name' />
          <input className='contactSenderForm' id='email' placeholder='Email' />
        </div>
        <textarea className='contactSenderMessage' id='message' placeholder='Message' />
        <div>
          <button className='contactSendButton' onClick={this.handleSubmit}>Send</button>
        </div>
        <img className={'spacecraft'} src={'https://s3.amazonaws.com/boxera/spacecraft_large.png'}></img>
        <div className={'contactText'}>or email us at <a className={'mailLink'} href='mailto:contact@boxeramusic.com'>contact@boxeramusic.com</a></div>
      </div>
    );
  }
}

export default Contact;
