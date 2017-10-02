import React from 'react';
// import Data from '../../data.js';
import MsgForm from './MsgForm.jsx';
import ButtonElement from './ButtonElement.jsx';
// import Conversation from './Conversaton.jsx'
// import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div>    
            <ButtonElement />    
            <div >  <MsgForm />  </div> 
            </div> 
        );

    }
}
export default App;