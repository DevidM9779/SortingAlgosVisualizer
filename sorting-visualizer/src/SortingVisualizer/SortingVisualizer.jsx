import React from "react";
import getBubbleSortAnimations from "../SortingAlgorithms/bubbleSort"
import './SortingVisualizer.css';

const PRIMARY_COLOR = "turquoise"
const SECONDARY_COLOR = "red"
const ANIMATION_SPEED_MS = 3

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

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array)
        let colorChanged = false
        for (let i = 0; i<animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')

            // Animation for comparing two bars
            if (animations[i].length === 2) {
                const [index1, index2] = animations[i]
                const bar1Style = arrayBars[index1].style
                const bar2Style = arrayBars[index2].style
                const color = colorChanged ? PRIMARY_COLOR : SECONDARY_COLOR
                colorChanged = !colorChanged
                setTimeout(() => {
                    bar1Style.backgroundColor = color;
                    bar2Style.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS)

            // Animation for swapping two bars
            } else if (animations[i].length === 4) {
                const [index1, index2, height1, height2] = animations[i]
                const bar1style = arrayBars[index1].style
                const bar2style = arrayBars[index2].style

                setTimeout(() => {
                    bar1style.height = `${height2}px`
                    bar2style.height = `${height1}px`
                }, i * ANIMATION_SPEED_MS)

            // Animation for marking down sorted bars
            } else {
                // sorted bar
                const [index] = animations[i]
                const color = 'green'
                const barStyle = arrayBars[index].style

                setTimeout(() => {
                    barStyle.backgroundColor = color
                }, i * ANIMATION_SPEED_MS)
            }
        }

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
                <button onClick={() => this.bubbleSort()}>BubbleSort</button>
            </div>
        )
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}