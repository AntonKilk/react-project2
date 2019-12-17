import React from 'react';
import ReactDOM from 'react-dom';

let format24Time = (date) => {
    let h = String(date.getHours()).padStart(2, "0")
    let m = String(date.getMinutes()).padStart(2, "0")
    let s = String(date.getSeconds()).padStart(2, "0")
    return h + ":" + m + ":" + s
  }

  let format12Time = (date) => {
    let time = format24Time(date)
    let [H, m, s] = time.split(":")
    let h = String(H % 12 || 12)
    let ampm = H < 12 ? "AM" : "PM"
    return h + ":" + m + ":" + s + " " + ampm
  }

let HTML = (props) => {
return <div>
            <p>Format: </p>
            <input name="mode"
                type="radio" 
                checked={props.format == "24"}
                style={{ cursor: "pointer" }}
                onChange={_ => props.setFormat("24") }>
            </input>
            <span style={{ cursor: "pointer" }}
            onClick={_ => props.setFormat("24")} >24</span>
            <br />
            <input name="mode"
                type="radio"
                checked={props.format == "12"} 
                style={{ cursor: "pointer" }}
                onChange={_ => props.setFormat("12") }>
            </input>
            <span style={{ cursor: "pointer" }}
            onClick={_ => props.setFormat("12")} >12</span>
            <br />
            </div>  
}

export default class Clock extends React.Component{

    state = {
        dateTime: new Date(),
        format: "24", // "12" | "24"
    }

    setFormat = (format) => {
        this.setState({format})
      }

    componentDidMount(){
        this.interval = setInterval (_ => {
            this.setState({
                dateTime: new Date()
            })
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    render(){
        let {dateTime, format} = this.state
        let time = format == "24" ? format24Time(dateTime) :
                   format == "12" ? format12Time(dateTime) : ""
    
        return <div>
        <p>{time}</p>
        <HTML format={format} setFormat={this.setFormat} />
        </div>
        
    }
}

ReactDOM.render(
    <Clock />, 
    document.getElementById('root')
  )
