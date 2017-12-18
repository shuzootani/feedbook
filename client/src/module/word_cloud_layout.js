const layoutWordCloud = data => {
  let height = 500;
  let width = 500;

  let random = d3.random.irwinHall(2);

  let countMax = d3.max(data, function(d) {
    return d.count;
  });

  let sizeScale = d3.scale
    .linear()
    .domain([0, countMax])
    .range([10, 100]);

  let colorScale = d3.scale.category20();

  let words = data.map(function(d) {
    return {
      text: d.word,
      size: sizeScale(d.count)
    };
  });

  d3.layout
    .cloud()
    .size([width, height])
    .words(words)
    .padding(5)
    .rotate(function() {
      return ~~(Math.random() * 2) * 90;
    })
    .font("Impact")
    .fontSize(function(d) {
      return d.size;
    })
    .on("end", draw)
    .start();

  function draw(words) {
    d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) {
        return d.size + "px";
      })
      .style("font-family", "Impact")
      .style("fill", function(d, i) {
        return colorScale(i);
      })
      .style("cursor", "pointer")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) {
        return d.text;
      })
      .on("click", function(d, i) {
        window.open("https://www.google.co.jp/search?q=" + d.text, "_blank");
      });
  }
};

export default layoutWordCloud;
