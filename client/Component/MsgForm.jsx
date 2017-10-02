import React from 'react';
const axios = require('axios');
var Msg = require('../../data.js');
class MsgForm extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {message: '', rMsg :''};
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    componentDidMount() { 
        console.log(this.state.message)   

     }


    handleSubmit(e) {
    e.preventDefault()   
    this.setState ({rMsg: Msg[Math.floor(Math.random()*30)].message})
   const data = this.state;
         axios({
               method: "POST",
               url: '/message',
    // headers: headers,
   data: data
})
.then(axios({
            method:"POST",
            url:'/message',
            responseType: 'text'
            
        })
        .then(function(res) {
console.log(res.data.result.fulfillment.speech);
        })) 
 
    }
    handleMessageChange(e) {
        this.setState( {message : e.target.value})
    }
    render() {
        return  (
        <div className = 'form'>
            <form onSubmit = {this.handleMessageChange}>
            <input 
            type = 'text'
            placeholder = 'talk to me'
            value = {this.state.message}
            onChange = {this.handleMessageChange}/>
            <input onClick ={this.handleSubmit} type ='submit'/>
            </form>
            <p>Me: {this.state.message}</p>
            <p>Bot: {this.state.rMsg}</p>
            </div>
        )
    }
}


// $.ajax({
    // method: 'POST',
    // url: '/message'
    // data: 'hello'
//})
export default MsgForm; 