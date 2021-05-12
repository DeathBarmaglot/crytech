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
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'Untitled-1',
                type: 'image',
                rect: ['129px', '18px','150px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'a22Copy',
                type: 'image',
                rect: ['-658px', '-284px','1476px','621px','auto', 'auto'],
                clip: ['rect(0px 1476px 315.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: 'b22',
                type: 'image',
                rect: ['-721px', '-345px','1594px','865px','auto', 'auto'],
                clip: ['rect(0px 1594px 587.222900390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"b2.svg",'0px','0px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: 'b22Copy',
                type: 'image',
                rect: ['-459px', '-397px','1594px','865px','auto', 'auto'],
                clip: ['rect(0px 1594px 587.222900390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"b2.svg",'0px','-611.11145019531px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: 'c2',
                type: 'image',
                rect: ['-554px', '-384px','1778px','897px','auto', 'auto'],
                clip: ['rect(0px 1778px 591.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"c2.svg",'0px','0px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: 'c2Copy',
                type: 'image',
                rect: ['-556px', '-340px','1778px','897px','auto', 'auto'],
                clip: ['rect(0px 1778px 591.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"c2.svg",'0px','-611.11145019531px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: 'a22',
                type: 'image',
                rect: ['-659px', '-259px','1476px','621px','auto', 'auto'],
                clip: ['rect(0px 1476px 315.4427490234375px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','-333.33435058594px'],
                transform: [[],[],[],['0.08844','0.08']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-1665px', '-79px','3460px','447px','auto', 'auto'],
                clip: ['rect(0px 3460px 239.5927734375px 1260px)'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_1Copy',
                type: 'image',
                rect: ['-1387px', '-82px','3460px','447px','auto', 'auto'],
                clip: ['rect(0px 2154.11767578125px 239.5927734375px 0px)'],
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
                ["transform", "scaleX", '-1'],
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
                ["transform", "scaleX", '0.08844'],
                ["style", "opacity", '0'],
                ["style", "left", '-459px'],
                ["style", "width", '1594px'],
                ["style", "top", '-397px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '865px'],
                ["style", "clip", [0,1594,587.22290039063,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-611.11145019531], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c2Copy}": [
                ["transform", "scaleX", '0.08844'],
                ["style", "opacity", '0'],
                ["style", "left", '-556px'],
                ["style", "width", '1778px'],
                ["style", "top", '-340px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '897px'],
                ["style", "clip", [0,1778,591.44274902344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-611.11145019531], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_c2}": [
                ["style", "top", '-384px'],
                ["style", "height", '897px'],
                ["transform", "scaleY", '0.08'],
                ["style", "left", '-554px'],
                ["transform", "scaleX", '0.08844'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,1778,591.4427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1778px']
            ],
            "${_a1}": [
                ["style", "left", '-2826px'],
                ["style", "top", '-1020px']
            ],
            "${_a22Copy}": [
                ["style", "top", '-284px'],
                ["transform", "scaleX", '0.08844'],
                ["transform", "scaleY", '0.08'],
                ["style", "clip", [0,1476,315.44274902344,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '621px'],
                ["style", "opacity", '0'],
                ["style", "left", '-658px'],
                ["style", "width", '1476px']
            ],
            "${__1}": [
                ["style", "top", '-79px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-1665px'],
                ["style", "height", '447px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,3460,239.5927734375,1260], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '3460px']
            ],
            "${_b22}": [
                ["style", "top", '-345px'],
                ["style", "height", '865px'],
                ["transform", "scaleY", '0.08'],
                ["style", "left", '-721px'],
                ["transform", "scaleX", '0.08844'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,1594,587.222900390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1594px']
            ],
            "${__1Copy}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1387px'],
                ["style", "width", '3460px'],
                ["style", "top", '-82px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '447px'],
                ["style", "clip", [0,2154.11767578125,239.5927734375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-222.2216796875], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_a22}": [
                ["transform", "scaleX", '0.08844'],
                ["style", "opacity", '0'],
                ["style", "left", '-659px'],
                ["style", "width", '1476px'],
                ["style", "top", '-259px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '621px'],
                ["style", "clip", [0,1476,315.4427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-333.33435058594], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Untitled-1}": [
                ["style", "top", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '129px'],
                ["transform", "scaleX", '-1']
            ],
            "${_a}": [
                ["style", "left", '-1534px'],
                ["style", "top", '-523px']
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
                { id: "eid44", tween: [ "style", "${__1Copy}", "opacity", '1', { fromValue: '0'}], position: 435, duration: 180, easing: "easeInOutQuart" },
                { id: "eid45", tween: [ "style", "${__1Copy}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid43", tween: [ "transform", "${__1Copy}", "scaleX", '0.17', { fromValue: '0'}], position: 295, duration: 320, easing: "easeInOutQuart" },
                { id: "eid20", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 436, duration: 180, easing: "easeInOutQuart" },
                { id: "eid22", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid16", tween: [ "transform", "${__1}", "scaleX", '0.15', { fromValue: '0'}], position: 295, duration: 321, easing: "easeInOutQuart" },
                { id: "eid25", tween: [ "style", "${_a22Copy}", "opacity", '1', { fromValue: '0'}], position: 421, duration: 195, easing: "easeInOutQuart" },
                { id: "eid30", tween: [ "style", "${_a22Copy}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid27", tween: [ "style", "${_c2}", "opacity", '1', { fromValue: '0'}], position: 4200, duration: 195, easing: "easeInOutQuart" },
                { id: "eid42", tween: [ "style", "${_c2}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid17", tween: [ "transform", "${__1}", "scaleY", '0.15', { fromValue: '0'}], position: 295, duration: 321, easing: "easeInOutQuart" },
                { id: "eid2", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195, easing: "easeInOutQuart" },
                { id: "eid47", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid51", tween: [ "style", "${_Untitled-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195, easing: "easeInOutQuart" },
                { id: "eid57", tween: [ "style", "${_Untitled-1}", "opacity", '0', { fromValue: '1'}], position: 3042, duration: 93, easing: "easeInOutQuart" },
                { id: "eid55", tween: [ "style", "${_Untitled-1}", "opacity", '1', { fromValue: '0'}], position: 3135, duration: 115, easing: "easeInOutQuart" },
                { id: "eid52", tween: [ "transform", "${_Untitled-1}", "scaleX", '1', { fromValue: '-1'}], position: 3042, duration: 208, easing: "easeInOutQuart" },
                { id: "eid23", tween: [ "style", "${_b22}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 195, easing: "easeInOutQuart" },
                { id: "eid34", tween: [ "style", "${_b22}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid24", tween: [ "style", "${_a22}", "opacity", '1', { fromValue: '0'}], position: 1305, duration: 195, easing: "easeInOutQuart" },
                { id: "eid32", tween: [ "style", "${_a22}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid46", tween: [ "transform", "${__1Copy}", "scaleY", '0.17', { fromValue: '0'}], position: 295, duration: 320, easing: "easeInOutQuart" },
                { id: "eid26", tween: [ "style", "${_b22Copy}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 195, easing: "easeInOutQuart" },
                { id: "eid38", tween: [ "style", "${_b22Copy}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" },
                { id: "eid28", tween: [ "style", "${_c2Copy}", "opacity", '1', { fromValue: '0'}], position: 4921, duration: 195, easing: "easeInOutQuart" },
                { id: "eid41", tween: [ "style", "${_c2Copy}", "opacity", '0', { fromValue: '1'}], position: 7820, duration: 180, easing: "easeInOutQuart" }            ]
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
