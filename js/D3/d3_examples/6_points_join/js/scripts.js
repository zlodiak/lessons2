const width = 300;
const height = 200;
const pointColor = 'red';
const radius = 2;
const lineWidth = '1px';
const tickSize = 6;
const tickPadding = 3;
const gridColor = '#999';
const gridWidth = '1px';
const gridOpacity = 0.2;
let xScale;
let yScale;

const paddings = {
	left: 30,
	top: 10,
	right: 10,
	bottom: 20
};

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
generateAxis();
generateGrids();
renderData();


function generateAxis() {
	xScale = d3.scaleLinear()
	                .domain([
	                	d3.min(points, d => d[0]),
	                	d3.max(points, d => d[0])
	                ])
	                .range([paddings.left, width - paddings.right]);

	yScale = d3.scaleLinear()
	                .domain([
	                	d3.min(points, d => d[1]),
	                	d3.max(points, d => d[1])
	                ])
	                .range([height - paddings.bottom, 0 + paddings.top]);


	const xAxis = d3.axisBottom(xScale);

	const yAxis = d3.axisLeft(yScale);     


	svg.append('g')
		  .attr('class', 'x-axis-group')
		  .attr('transform', 'translate(0,' + (height - paddings.bottom) + ')')
		  .call(xAxis);

	svg.append('g')
		  .attr('class', 'y-axis-group')
		  .attr('transform', 'translate(' + paddings.left + ',0)')
		  .call(yAxis);	  	
}

function generateGrids() {
	svg.selectAll('.x-axis-group .tick')
		  .append('line')
		  .classed('grid-line', true)
		  .attr('x1', 0)
		  .attr('y1', 0)
		  .attr('x2', 0)
		  .attr('y2', -height + paddings.top + paddings.bottom)
		  .attr('shape-rendering', 'crispedges')
		  .attr('stroke-width', gridWidth)
		  .attr('stroke-opacity', gridOpacity)
		  .attr('stroke', gridColor);

	svg.selectAll('.y-axis-group .tick')
		  .append('line')
		  .classed('grid-line', true)
		  .attr('x1', 0)
		  .attr('y1', 0)
		  .attr('x2', width - paddings.right - paddings.left)
		  .attr('y2', 0)
		  .attr('shape-rendering', 'crispedges')
		  .attr('stroke-width', gridWidth)
		  .attr('stroke-opacity', gridOpacity)
		  .attr('stroke', gridColor);
}

function renderData() {
	svg.selectAll(null)
			.data(points)
			.enter('')
			.append('circle')
		  .attr('cx', d => xScale(d[0]))
		  .attr('cy', d => yScale(d[1]))
		  .attr('r', radius)
		  .attr('fill', pointColor);

	const line = d3.line()
			            .x(d => xScale(d[0]))
			            .y(d => yScale(d[1]));

	svg.append('g')
			.classed('path', true)
			.append('path')
			.attr('d', line(points))
			.style('fill', 'none')
			.style('stroke', pointColor)
			.style('stroke-width', lineWidth);					            
}
