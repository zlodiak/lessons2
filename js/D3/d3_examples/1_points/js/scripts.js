const width = 1000;
const height = 500;
const pointColor = 'red';

const points = [
	[100, 100],
	[200, 120],
	[10, 10],
	[110, 300],
	[50, 400],
	[80, 440],
	[240, 220],
	[800, 340],
	[700, 80],
	[950, 20],
	[950, 40],
	[950, 60],
	[980, 100],
	[40, 10],
	[10, 40]
];

const svg = d3.select('#svg');

svg.selectAll(null)
		.data(points)
		.enter('')
		.append('circle')
	  .attr('cx', d => d[0])
	  .attr('cy', d => d[1])
	  .attr('r', 1)
	  .attr('fill', pointColor);		
