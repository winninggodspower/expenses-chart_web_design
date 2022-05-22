let xValues = []
let yValues = []
const barColors = ['hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(186, 34%, 60%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)']

fetch('./data.json')
    .then(request => {
        return request.json()
    })
    .then(json => {
        json.forEach(data => {
            xValues.push(data.day)
            yValues.push(data.amount)
        });
    })
    .then(data => {
        console.log(xValues, yValues);
        console.log('fetch ran');
        plotChart(xValues, yValues)
    })


let plotChart = (xValues, yValues)=>{
    let chart = new Chart("myChart", {
        type: "bar",
        data: {
            labels : xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderRadius: '10px',
            }]
            },
        options : {
            legend: {
                display: false,
            },
            scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false
                  }
                }
              }
        }
        });
        console.log(chart);
    console.log('i ran');
}