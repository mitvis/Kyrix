// libraries
const Project = require("../../src/index").Project;
const SSV = require("../../src/template-api/SSV").SSV;
const renderers = require("./renderers");

// construct a project
var p = new Project("ssv_circle", "../../../config.txt");
p.addRenderingParams(renderers.renderingParams);
p.addStyles("../nba/nba.css");

// set up ssv
var query =
    "select media_id, url, x, y, k5, k10, k15, k20, k30, k40, tweet_id, user_id, user_name, created_at, full_text, hashtags, quote_count, reply_count, retweet_count, favorite_count, og_type, og_tweet_id, og_user_id, og_user_name, g_d5_c10, engagement_count " +
    "from tweets";

var ssv = {
    data: {
        db: "covidvis",
        query: query
    },
    layout: {
        x: {
            field: "x",
            extent: [-20, 20]
        },
        y: {
            field: "y",
            extent: [-20, 20]
        },
        z: {
            field: "engagement_count",
            order: "desc"
        },
        overlap: 0,
    },
    marks: {
        cluster: {
            mode: "custom",
            custom: renderers.smallClusterRender,
            config: {
                bboxW: 1,
                bboxH: 1
            }
        },
        hover: {
            /*tooltip: {
              columns: ["tweet_id", "user_name", "engagement_count", "k40", "full_text","url"],
            },*/
            rankList: {
                mode: "custom",
                fields: ["tweet_id", "user_name", "engagement_count", "k40"],
                custom: renderers.customHover,
                topk: 1,
                config: {
                  bboxW: 500,
                  bboxH: 300
                }
            },
            selector: "*",
            boundary: "convexhull"
        }
    },
    config: {
        axis: false,
        numLevels: 10,
    }
};

p.addSSV(new SSV(ssv));
p.saveProject();
