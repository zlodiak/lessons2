const width = 300;
const height = 200;
const pointColor = 'red';
const radius = 2;
const tickSize = 6;
const tickPadding = 3;

const points = [
	[100, 100],
	[200, 200],
	[300, 300],
	[400, 400],
	[500, 500],
	[600, 400],
	[700, 400]
];


const svg = d3.select('#svg');


const xScale = d3.scaleLinear()
                .domain([
                	d3.min(points, d => d[0]),
                	d3.max(points, d => d[0])
                ])
                .range([0, width]);

const yScale = d3.scaleLinear()
                .domain([
                	d3.min(points, d => d[1]),
                	d3.max(points, d => d[1])
                ])
                .range([0, height]);


const xAxis = d3.axisBottom(xScale)
                .tickSizeInner(tickSize)
                .tickPadding(tickPadding);

const yAxis = d3.axisLeft(yScale)
                .tickSizeInner(-tickSize)
                .tickPadding(-tickSize * 4);     


svg.append('g')
	  .attr('class', 'x-axis-group')
	  .call(xAxis);

svg.append('g')
	  .attr('class', 'y-axis-group')
	  .call(yAxis);	  


svg.selectAll(null)
		.data(points)
		.enter('')
		.append('circle')
	  .attr('cx', d => xScale(d[0]))
	  .attr('cy', d => yScale(d[1]))
	  .attr('r', radius)
	  .attr('fill', pointColor);	  