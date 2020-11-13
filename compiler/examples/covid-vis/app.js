// libraries
const Project = require("../../src/index").Project;
const Canvas = require("../../src/Canvas").Canvas;
const Jump = require("../../src/Jump").Jump;
const Layer = require("../../src/Layer").Layer;
const View = require("../../src/View").View;

// project components
const renderers = require("./renderers");
const transforms = require("./transforms");
const placements = require("./placements");

// construct a project
var p = new Project("nba", "../../../config.txt");
p.addRenderingParams(renderers.renderingParams);

// seperate CSS file
p.addStyles("./nba.css");

// save to db
p.saveProject();
