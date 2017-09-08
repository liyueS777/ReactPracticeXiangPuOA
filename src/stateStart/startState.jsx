
import React from 'react';

export default class s extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    render() {
        return (
            <div>
                <h1>Hellow State</h1>
                <h2>AAA { this.state.date.toLocaleDateString() }</h2>
            </div>
        );
    }
}