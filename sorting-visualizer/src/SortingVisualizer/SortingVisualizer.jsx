import React from "react";
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        }
    };



    componentDidMount() {
        this.resetArr();
    }

    resetArr() {
        const array = []
        for (let i = 0; i < 350; i++) {
            array.push(randomInt(5, 700))
        }
        this.setState({array})
    }

    render() {
        const {array} = this.state

        return (
            <div className="array-container">
                {
                    array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{height: `${value}px`}}
                        ></div>
                    ))
                }
                <button onClick={() => this.resetArr()}>Reset Array</button>
            </div>
        )
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}