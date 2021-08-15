export let basicOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    responsive: true,
};
export default {
    multiChartOptions: {
        ...basicOptions,
        legend: {
            display: true
        },
        tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        scales: {
            yAxes: [{
                barPercentage: 1.2,
                gridLines: {
                    drawBorder: true,
                    color: '#EDEFF5',
                    zeroLineColor: "#EDEFF5",
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                    padding: 10,
                    fontColor: "#9a9a9a"
                }
            }],
            plotOptions: {
                column: {
                    borderRadiusTopLeft: 5,
                    borderRadiusTopRight: 5,
                },
            },

            xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: 'transparent',
                    zeroLineColor: "#EDEFF5",
                },
                ticks: {
                    padding: 0,
                    fontColor: "#fff"
                }
            }]
        }
    }
}

