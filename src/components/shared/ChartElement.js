import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Moment js
import moment from "moment"

// React-chart-js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend);

const ChartElement = () => {

    const test = useSelector(state => state.coinState)

    const { defaultChartDate, chartData, coinId } = test

        const options = {
            resposnsive: true,
            elements: {
                point:{
                    radius: 0
                }
            },
            interaction: {
                intersect: false,
            }
        }
    
        const data = {
            labels: defaultChartDate.data.map(value => moment(value.x).format(defaultChartDate.format)),
            datasets: [
              {
                fill: true,
                label: coinId,
                data: defaultChartDate.data.map(value => value.y),
                borderWidth: 2,
                borderColor: 'rgb(252, 211, 77)',
                backgroundColor: 'rgba(252, 211, 77, 0.37)',
              },
            ],
          };

    const dispatch = useDispatch()

    return (
        <div className="py-10">
            <Line options={options} data={data} />

            <div className='flex justify-center mt-5 mx-auto rounded w-fit'>
                <button
                    className={`${defaultChartDate.format === "ha" ? "bg-amber-300 text-black" : ""}
                    border border-amber-300 text-amber-300 rounded text-md mx-2 w-12 transition duration-100
                    focus:scale-70`} 
                    onClick={() => dispatch({type: "CHANGE_CHART_DATE", payload: chartData.daily})}
                >
                    24h
                </button>

                <button
                    className={`${defaultChartDate.format === "DD MMM" ? "bg-amber-300 text-black" : ""}
                    border border-amber-300 text-amber-300 rounded text-md mx-2 w-12 transition duration-100
                    focus:scale-70`} 
                    onClick={() => dispatch({type: "CHANGE_CHART_DATE", payload: chartData.weekly})}
                >
                    7d
                </button>

                <button
                    className={`${defaultChartDate.format === "MMM DD" ? "bg-amber-300 text-black" : ""}
                    border border-amber-300 text-amber-300 rounded text-md mx-2 w-12 transition duration-100
                    focus:scale-70`} 
                    onClick={() => dispatch({type: "CHANGE_CHART_DATE", payload: chartData.monthly})}
                >
                    30d
                </button>

                <button
                    className={`${defaultChartDate.format === "MMM YYYY" ? "bg-amber-300 text-black" : ""}
                    border border-amber-300 text-amber-300 rounded text-md mx-2 w-12 transition duration-100
                    focus:scale-70`} 
                    onClick={() => dispatch({type: "CHANGE_CHART_DATE", payload: chartData.yearly})}
                >
                    1y
                </button>
            </div>
        </div>
    );
};

export default ChartElement;