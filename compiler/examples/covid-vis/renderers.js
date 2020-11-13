var renderingParams = {
    timelineUpperY: 510,
    timelineLowerY: 740,
    cellHeight: 55,
    playerNameCellWidth: 250,
    statsCellMaxWidth: 200,
    headerHeight: 50,
    headerbkgcolor: "#444",
    oddrowcolor: "#eaf0f7",
    evenrowcolor: "#FFF",
    headerfontsize: 18,
    headerfontcolor: "#FFF",
    bodyfontsize: 19,
    bodyfontcolor: "#111",
    playernamefontsize: 18,
    playerphotoleftmargin: 20,
    playerphotoradius: 24,
    teamlogoradius: 24,
    avgcharwidth: 20,
    shadowrectwidth: 5,
    textwrap: require("../../src/template-api/Utilities").textwrap
};


var customHover = function(svg, data, args) {
    console.log("help");
    console.log("running from correct file");
    var rectWidth = 600;
    var rectHeight = 300;
    var logoXDelta = 560/2;
    var logoYDelta = -150;
    var logoSize = 35;
    var scoreFontSize = 20;
    var scoreXDelta = 200;
    var scoreYDelta = 24;
    var dateYDelta = 10;
    var dateHeight = 30;
    var d2Delta = 15;

    g = svg.append("g").classed("covid_hover", true);
    var params = args.renderingParams;

    // rect background
    g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .classed("rect_background", true)
        .attr("x", function(d) {
            return + d.cx - rectWidth / 2;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta - rectHeight / 2;
        })
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "white")
        .attr("width", rectWidth)
        .attr("height", rectHeight + dateHeight)
        .style("stroke", "gray")
        .style("stroke-width", 3)
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    // tweet image
    g.selectAll(".image")
        .data(data)
        .enter()
        .append("image")
        .attr("x", function(d) {
            return d.cx - rectWidth/2 + 10;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta - logoYDelta - 300;
        })
        .attr("height", 300)
        .attr("width", 300)
        .attr("xlink:href", function(d) {
            return (
                d.url
            );
        })
        .classed("kyrix-retainsizezoom", true); // for SSVs?

    // tweet_text
    g.selectAll(".tweettext")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.full_text.substring(0,60) + "...";
        }).
        attr("x", function(d) {
            return + d.cx;
        })
        .attr("y", function(d) {
            return + d.cy - 10;
        })
        .attr("text-anchor","start")
        .attr("font-size", 10);



    // engagement
    g.selectAll(".engagement")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return "Engagement: " + d.engagement_count;
        })
        .attr("x", function(d) {
            return + d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - 120;
        })
        .attr("font-size", 24)
        .attr("dy", ".35em")
        .attr("text-anchor","start")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    // away score
    g.selectAll(".tweet_id")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return "Tweet ID: " + d.tweet_id;
        })
        .attr("x", function(d) {
            return +d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta + scoreYDelta;
        })
        .attr("font-size", scoreFontSize)
        .attr("dy", ".35em")
        .attr("text-anchor","start")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    // date
    g.selectAll(".date")
        .data(data)
        .enter()
        .append("text")
        .classed("date", true)
        .text(function(d) {
            return d.created_at;
        })
        .attr("x", function(d) {
            return +d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta + rectHeight / 2 + dateYDelta;
        })
        .attr("dy", ".35em")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs
};

var customHoverSmall = function(svg, data, args) {
    var rectWidth = 300;
    var rectHeight = 150;
    var logoXDelta = 560/2;
    var logoYDelta = -150;
    var logoSize = 35;
    var scoreFontSize = 20;
    var scoreXDelta = 200;
    var scoreYDelta = 24;
    var dateYDelta = 10;
    var dateHeight = 30;
    var d2Delta = 15;

    g = svg.append("g").classed("covid_hover", true);
    var params = args.renderingParams;

    // rect background
    g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .classed("rect_background", true)
        .attr("x", function(d) {
            return + d.cx - rectWidth / 2;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta - rectHeight / 2;
        })
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "white")
        .attr("width", rectWidth)
        .attr("height", rectHeight + dateHeight)
        .style("stroke", "gray")
        .style("stroke-width", 3)
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    // tweet image
    g.selectAll(".image")
        .data(data)
        .enter()
        .append("image")
        .attr("x", function(d) {
            return d.cx - rectWidth/2 + 10;
        })
        .attr("y", function(d) {
            return +d.cy - rectHeight/2;
        })
        .attr("height", 150)
        .attr("width", 150)
        .attr("xlink:href", function(d) {
            return (
                d.url
            );
        })
        .classed("kyrix-retainsizezoom", true); // for SSVs?

    // tweet_text
    g.selectAll(".tweettext")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.full_text.substring(0,20);
        }).
        attr("x", function(d) {
            return + d.cx + 10;
        })
        .attr("y", function(d) {
            return + d.cy - 10;
        })
        .attr("text-anchor","start")
        .attr("font-size", 10)
        .classed("kyrix-retainsizezoom", true); // for SSVs?

      g.selectAll(".tweettext")
          .data(data)
          .enter()
          .append("text")
          .text(function(d) {
              return d.full_text.substring(20,40);
          }).
          attr("x", function(d) {
              return + d.cx + 10;
          })
          .attr("y", function(d) {
              return + d.cy - 20;
          })
          .attr("text-anchor","start")
          .attr("font-size", 10)
          .classed("kyrix-retainsizezoom", true); // for SSVs?



    // engagement
    g.selectAll(".engagement")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return "Eng. " + d.engagement_count;
        })
        .attr("x", function(d) {
            return + d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - rectHeight/2;
        })
        .attr("font-size", 24)
        .attr("dy", ".35em")
        .attr("text-anchor","start")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    // away score
    /*g.selectAll(".tweet_id")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return "Tweet ID: " + d.tweet_id;
        })
        .attr("x", function(d) {
            return +d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta + scoreYDelta;
        })
        .attr("font-size", scoreFontSize)
        .attr("dy", ".35em")
        .attr("text-anchor","start")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs*/

    // date
    g.selectAll(".date")
        .data(data)
        .enter()
        .append("text")
        .classed("date", true)
        .text(function(d) {
            return d.created_at;
        })
        .attr("x", function(d) {
            return +d.cx;
        })
        .attr("y", function(d) {
            return +d.cy - d2Delta + rectHeight / 2 + dateYDelta;
        })
        .attr("dy", ".35em")
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs
};


var dotClusterRender = function(svg, data, args) {
    console.log("help");

    g = svg.append("g").classed("covid_hover", true);
    var params = args.renderingParams;

    // rect background
    g.selectAll("rect")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.cx;
        })
        .attr("cy", function(d) {
            return d.cy;
        })
        .attr("r", function(d) {
            return Math.max(d.engagement_count / 1000, 10);
        })
        .style("fill",function(d) {
            colors = ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666', '#e1e1e1'];
            return colors[d.k20 % colors.length];
        })
        .style("stroke",function(d) {
            return "black"
        })
        .style("stroke-width",3)
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs
};

var smallClusterRender = function(svg, data, args) {
    //console.log(data);

    g = svg.append("g").classed("covid_hover", true);
    var params = args.renderingParams;

    // rect background
    g.selectAll("rect")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.cx;
        })
        .attr("cy", function(d) {
            return d.cy;
        })
        .attr("r", function(d) {
            obj = JSON.parse(d.clusterAgg)
            return Math.max(obj["count(*)"] / 100, 10);
        })
        .style("fill",function(d) {
            colors = ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666', '#e1e1e1'];
            return colors[d.k20 % colors.length];
        })
        .style("stroke",function(d) {
            return "black"
        })
        .style("stroke-width",3)
        .classed("kyrix-retainsizezoom", true); // for NBA SSVs

    g.selectAll("rect")
    .data(data)
    .enter()
    .append("text")
    .text(function(d) {
        console.log(d.engagement_count);
        return d.engagement_count;
    }).
    attr("x", function(d) {
        return d.cx;
    })
    .attr("y", function(d) {
        return d.cy;
    })
    .classed("kyrix-retainsizezoom", true);
};

module.exports = {
    renderingParams,
    dotClusterRender,
    smallClusterRender,
    customHover,
    customHoverSmall
};
