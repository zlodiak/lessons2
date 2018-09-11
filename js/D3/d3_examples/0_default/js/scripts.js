const svg = d3.select('#svg');

const group = svg.append('g')
                  .classed('group', true)
                  .attr("transform", "translate(100,200)");

group.append("circle") 
        .classed('circle', true)
        .attr("cx", 0)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("stroke-width", "2px")
        .attr("stroke", "red")
        .attr("transform", "translate(100,0)");
