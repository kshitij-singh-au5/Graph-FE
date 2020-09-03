import React from "react";
import ReactApexChart from "react-apexcharts";
import { graphData } from '../ActionCreator/action';

import { connect } from 'react-redux';

class Graph extends React.Component {

    constructor(props) {

        super(props);


        this.state = {

            series: [
                {
                    name: "High - 2013",
                    data: []
                },
                {
                    name: "Low - 2013",
                    data: []
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#77B6EA', '#545454'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Average High & Low Temperature',
                    align: 'left'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    title: {
                        text: 'Month'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Temperature'
                    },
                    min: 5,
                    max: 40
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            },


        };


    }

    componentDidMount() {

        this.props.graphData()
        // console.log(this.props.graphsData,"comp")
        setTimeout(() => {
            this.setState(
                {
                    series: [
                        {
                            name: "High - 2013",
                            data: this.props.graphsData[0].high
                        },

                        {
                            name: "Low - 2013",
                            data: this.props.graphsData[0].low
                        }
                    ]
                }

            )
        },500)
    }


    render() {




        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        )


    }
}

const mapStateToProps = (state) => {
    console.log(state, "graph")
    return {
        graphsData: state.graphsData
    }
}
export default connect(mapStateToProps, { graphData })(Graph);