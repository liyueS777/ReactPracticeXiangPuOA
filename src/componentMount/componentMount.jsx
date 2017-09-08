
import React from 'react';

export default class Mount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        console.log(+this.state.date,1);
        this.timerID = setInterval(()=>{
            this.tick();
        },10)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
        console.log(+this.state.date,2);
    }
    tick(){
        this.setState({
            data:new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>HELLOW timerID</h1>
                <h2>{+this.state.date}</h2>
            </div>
        );
    }
}