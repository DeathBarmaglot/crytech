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
                rect: ['0px', '-11px','423px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px']
            },
            {
                id: 'a22Copy',
                type: 'image',
                rect: ['-667px', '-280px','1476px','621px','auto', 'auto'],
                clip: ['rect(0px 1476px 315.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'b22',
                type: 'image',
                rect: ['-728px', '-326px','1594px','865px','auto', 'auto'],
                clip: ['rect(0px 1594px 587.222900390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"b2.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'b22Copy',
                type: 'image',
                rect: ['-727px', '-275px','1594px','865px','auto', 'auto'],
                clip: ['rect(0px 1594px 587.222900390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"b2.svg",'0px','-611.11145019531px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'c2',
                type: 'image',
                rect: ['-551px', '-403px','1778px','897px','auto', 'auto'],
                clip: ['rect(0px 1778px 591.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"c2.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'c2Copy',
                type: 'image',
                rect: ['-551px', '-361px','1778px','897px','auto', 'auto'],
                clip: ['rect(0px 1778px 591.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"c2.svg",'0px','-611.11145019531px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['-668px', '-248px','1476px','621px','auto', 'auto'],
                clip: ['rect(0px 1476px 315.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','-333.33435058594px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-1661px', '-149px','3460px','447px','auto', 'auto'],
                clip: ['rect(0px 3460px 239.5927734375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_1Copy',
                type: 'image',
                rect: ['-1662px', '-104px','3460px','447px','auto', 'auto'],
                clip: ['rect(0px 3460px 239.5927734375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','-222.2216796875px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "left", '-1624px'],
                ["style", "top", '-734px']
            ],
            "${_b2}": [
                ["style", "left", '-3038px'],
                ["style", "top", '-359px']
            ],
            "${_f}": [
                ["style", "top", '-11px'],
                ["style", "height", '176px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '423px']
            ],
            "${_b1}": [
                ["style", "left", '-2637px'],
                ["style", "top", '-1020px']
            ],
            "${_c}": [
                ["style", "left", '-3353px'],
                ["style", "top", '-1578px']
            ],
            "${_a2}": [
                ["style", "left", '-2826px'],
                ["style", "top", '-412px']
            ],
            "${_b22Copy}": [
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-727px'],
                ["style", "width", '1594px'],
                ["style", "top", '-275px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '865px'],
                ["style", "clip", [0,1594,587.22290039063,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-611.11145019531], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c2Copy}": [
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-551px'],
                ["style", "width", '1778px'],
                ["style", "top", '-361px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '897px'],
                ["style", "clip", [0,1778,591.44274902344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-611.11145019531], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c2}": [
                ["style", "top", '-403px'],
                ["style", "clip", [0,1778,591.4427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "height", '897px'],
                ["style", "opacity", '0'],
                ["style", "left", '-551px'],
                ["style", "width", '1778px']
            ],
            "${_a1}": [
                ["style", "left", '-2826px'],
                ["style", "top", '-1020px']
            ],
            "${__1}": [
                ["style", "top", '-149px'],
                ["style", "clip", [0,3460,239.5927734375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0'],
                ["style", "height", '447px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1661px'],
                ["style", "width", '3460px']
            ],
            "${_b22}": [
                ["style", "top", '-326px'],
                ["style", "clip", [0,1594,587.222900390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "height", '865px'],
                ["style", "opacity", '0'],
                ["style", "left", '-728px'],
                ["style", "width", '1594px']
            ],
            "${__1Copy}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1662px'],
                ["style", "width", '3460px'],
                ["style", "top", '-104px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '447px'],
                ["style", "clip", [0,3460,239.5927734375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-222.2216796875], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ],
            "${_a22}": [
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-668px'],
                ["style", "width", '1476px'],
                ["style", "top", '-248px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '621px'],
                ["style", "clip", [0,1476,315.4427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-333.33435058594], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_a}": [
                ["style", "left", '-1534px'],
                ["style", "top", '-523px']
            ],
            "${_a22Copy}": [
                ["style", "top", '-280px'],
                ["style", "height", '621px'],
                ["transform", "scaleY", '0.08'],
                ["style", "left", '-667px'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,1476,315.44274902344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1476px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${__1Copy}", "opacity", '1', { fromValue: '0'}], position: 6445, duration: 180, easing: "easeInElastic" },
                { id: "eid45", tween: [ "style", "${__1Copy}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInElastic" },
                { id: "eid16", tween: [ "transform", "${__1}", "scaleX", '0.15', { fromValue: '0'}], position: 5680, duration: 320, easing: "easeInElastic" },
                { id: "eid25", tween: [ "style", "${_a22Copy}", "opacity", '1', { fromValue: '0'}], position: 555, duration: 195, easing: "easeInElastic" },
                { id: "eid30", tween: [ "style", "${_a22Copy}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" },
                { id: "eid46", tween: [ "transform", "${__1Copy}", "scaleY", '0.15', { fromValue: '0'}], position: 6305, duration: 320, easing: "easeInElastic" },
                { id: "eid43", tween: [ "transform", "${__1Copy}", "scaleX", '0.15', { fromValue: '0'}], position: 6305, duration: 320, easing: "easeInElastic" },
                { id: "eid17", tween: [ "transform", "${__1}", "scaleY", '0.15', { fromValue: '0'}], position: 5680, duration: 320, easing: "easeInElastic" },
                { id: "eid24", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 1305, duration: 195, easing: "easeInElastic" },
                { id: "eid32", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" },
                { id: "eid23", tween: [ "style", "${_b22}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 195, easing: "easeInElastic" },
                { id: "eid34", tween: [ "style", "${_b22}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" },
                { id: "eid2", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195, easing: "easeInElastic" },
                { id: "eid47", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInElastic" },
                { id: "eid20", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 5820, duration: 180, easing: "easeInElastic" },
                { id: "eid22", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInElastic" },
                { id: "eid27", tween: [ "style", "${_c2}", "opacity", '1', { fromValue: '0'}], position: 4200, duration: 195, easing: "easeInElastic" },
                { id: "eid42", tween: [ "style", "${_c2}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" },
                { id: "eid26", tween: [ "style", "${_b22Copy}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 195, easing: "easeInElastic" },
                { id: "eid38", tween: [ "style", "${_b22Copy}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" },
                { id: "eid28", tween: [ "style", "${_c2Copy}", "opacity", '1', { fromValue: '0'}], position: 4653, duration: 195, easing: "easeInElastic" },
                { id: "eid41", tween: [ "style", "${_c2Copy}", "opacity", '0', { fromValue: '1'}], position: 5485, duration: 195, easing: "easeInElastic" }            ]
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
