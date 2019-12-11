import React from 'react';
import ReactDOM from 'react-dom';


let HTML = (props) => {
return <div>
            <p>Format: </p>
            <input name="mode"
                type="radio" 
                checked style={{ cursor: "pointer" }}
                onChange={ () => setFormat("24") }>
            </input>
            <span style={{ cursor: "pointer" }} >24</span>
            <br />
            <input name="mode"
                type="radio" 
                style={{ cursor: "pointer" }}
                onChange={ () => setFormat("12") }>
            </input>
            <span style={{ cursor: "pointer" }} >12</span>
            <br />
            </div>  
}

let setFormat = (format) => {
    if ("12") {
        return console.log("12")
    } else {
       return  console.log("24")
    }
}
 
class Clock extends React.Component{

    state = {
        date: new Date(),
       // format: "24"
    }

    // handleFormat(){
    //     this.setState({
    //         format: setFormat()
    //     })
    // }

    componentDidMount(){
        this.timerID = setInterval (
            () =>this.tick(),
            1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <HTML />
        </div>
        
    }
}

ReactDOM.render(
    <Clock />, 
    document.getElementById('root')
  )
