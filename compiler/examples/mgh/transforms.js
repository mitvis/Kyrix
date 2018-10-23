const Transform = require("../../src/index").Transform;
const zoomFactor = 3;
const numLevels = 5;

var scales = [];
for (var i = 0; i < numLevels; i ++) {
    var curScale = new Transform("scalexy",
        "select * from eegmap_small where level<=" + i + ";",
        "mghdata",
        function (row, width, height) {
            var ret = [];
            ret.push(row[0]);
            ret.push(d3.scaleLinear().domain([0, 1000]).range([0, width])(row[1]));
            ret.push(d3.scaleLinear().domain([0, 1000]).range([0, height])(row[2]));
            ret.push(row[3]);
            return Java.to(ret, "java.lang.String[]");
        },
        ["id", "x", "y", "color"],
        true
    );
    scales.push(curScale);
}

var dummyEEGTransform = new Transform("eegdummy",
    "",
    "",
    function (){
    },
    [],
    true);

var dummySpectrumTransform = new Transform("spectrumdummy",
    "",
    "",
    function (){
    },
    [],
    true);

module.exports = {
    dummyEEGTransform : dummyEEGTransform,
    dummySpectrumTransform : dummySpectrumTransform,
    scales : scales,
    numLevels : numLevels,
    zoomFactor : zoomFactor
};
