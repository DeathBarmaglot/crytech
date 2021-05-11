/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f',
                type: 'image',
                rect: ['0px', '-11px','444px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-1431px', '-148px','3460px','447px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-937px', '-607px','2462px','1370px','auto', 'auto'],
                clip: ['rect(0px 2462px -190px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${__1}": [
                ["style", "top", '-148px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '447px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1431px'],
                ["style", "width", '3460px']
            ],
            "${__2}": [
                ["style", "top", '-607px'],
                ["style", "clip", [0,2462,-190,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1370px'],
                ["style", "opacity", '1'],
                ["style", "left", '-937px'],
                ["style", "width", '2462px']
            ],
            "${_f}": [
                ["style", "top", '-11px'],
                ["style", "height", '227px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '444px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6540,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 4540, duration: 180, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 6360, duration: 180, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "transform", "${__1}", "scaleY", '0.2', { fromValue: '0'}], position: 4540, duration: 320, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid6", tween: [ "style", "${__2}", "left", '-670px', { fromValue: '-937px'}], position: 4540, duration: 305, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${__2}", "clip", [0,2462,1370,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2462,-190,0]}], position: 0, duration: 3000 },
                { id: "eid16", tween: [ "transform", "${__1}", "scaleX", '0.2', { fromValue: '0'}], position: 4540, duration: 320, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 4540, duration: 180, easing: "easeOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6259186");
