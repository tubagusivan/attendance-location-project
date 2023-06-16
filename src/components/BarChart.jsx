import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Sick",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
            {
                label: "On Leave",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                borderColor: "rgba(53, 162, 235, 0.5)",
                data: [27, 45, 21, 4, 26, 18, 42],
            },
            {
                label: "On Project",
                backgroundColor: "rgb(0,255,0)",
                borderColor: "rgb(0,255,0)",
                data: [37, 29, 43, 33, 10, 20, 29],
            },
            {
                label: "In The Office",
                backgroundColor: "rgb(30,144,255)",
                borderColor: "rgb(30,144,255)",
                data: [24, 8, 17, 16, 27, 22, 42],
            },
        ],
    };
    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;