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
                id: 'p1-bj',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['0%', '17.6%','100%','auto','auto', 'auto'],
                opacity: 0.5,
                fill: ["rgba(0,0,0,0)",im+"p1-bj.jpg",'0px','0px']
            },
            {
                id: 'p1',
                type: 'image',
                tag: 'img',
                rect: ['15%', '34.5%','69.7%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.png",'0px','0px']
            },
            {
                id: 'p1_03',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['3.8%', '59.2%','92%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1_03.png",'0px','0px']
            },
            {
                id: 'p1_02',
                display: 'block',
                type: 'image',
                tag: 'img',
                rect: ['4.1%', '53.1%','92%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1_02.png",'0px','0px']
            },
            {
                id: 'p2',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['0%', '28.7%','100%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.jpg",'0px','0px']
            },
            {
                id: 'p2_16',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.7%', '60.7%','85.2%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_16.png",'0px','0px']
            },
            {
                id: 'p2_14',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.7%', '56.6%','85.2%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_14.png",'0px','0px']
            },
            {
                id: 'p2_12',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.7%', '51.9%','85.2%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_12.png",'0px','0px']
            },
            {
                id: 'p2_10',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.7%', '41.4%','85.2%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_10.png",'0px','0px']
            },
            {
                id: 'p2_07',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.7%', '36.7%','85.2%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_07.png",'0px','0px']
            },
            {
                id: 'p2_03',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['29.2%', '20.8%','42%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2_03.png",'0px','0px']
            },
            {
                id: 'p3',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['0.3%', 'auto','100%','auto','auto', '-12.1%'],
                fill: ["rgba(0,0,0,0)",im+"p3.jpg",'0px','0px']
            },
            {
                id: 'p3_03',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['27.8%', '106.9%','44.1%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_03.png",'0px','0px']
            },
            {
                id: 'p3_07',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '118.1%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_07.png",'0px','0px']
            },
            {
                id: 'p3_10',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '122.4%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_10.png",'0px','0px']
            },
            {
                id: 'p3_12',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '126.8%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_12.png",'0px','0px']
            },
            {
                id: 'p3_14',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '131.2%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_14.png",'0px','0px']
            },
            {
                id: 'p3_16',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '141.6%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_16.png",'0px','0px']
            },
            {
                id: 'p3_18',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '145.7%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_18.png",'0px','0px']
            },
            {
                id: 'p3_20',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['6.9%', '149.9%','86.6%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p3_20.png",'0px','0px']
            },
            {
                id: 'Symbol_2',
                display: 'none',
                type: 'rect',
                rect: ['0%', 'auto','auto','auto','auto', '-7.8%']
            },
            {
                id: 'p4_03',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['23.4%', '23.2%','53%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_03.png",'0px','0px']
            },
            {
                id: 'p4_07',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '35.5%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_07.png",'0px','0px']
            },
            {
                id: 'p4_10',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '39.9%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_10.png",'0px','0px']
            },
            {
                id: 'p4_12',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '46.5%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_12.png",'0px','0px']
            },
            {
                id: 'p4_14',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '50.9%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_14.png",'0px','0px']
            },
            {
                id: 'p4_16',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '58.8%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_16.png",'0px','0px']
            },
            {
                id: 'p4_18',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '63.1%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_18.png",'0px','0px']
            },
            {
                id: 'p4_20',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['7.2%', '67.1%','85.9%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p4_20.png",'0px','0px']
            },
            {
                id: 'p5',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['0%', '100%','100%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p5.jpg",'0px','0px']
            },
            {
                id: 'Symbol_3',
                display: 'none',
                type: 'rect',
                rect: ['-65', 'auto','auto','auto','auto', '-150px']
            },
            {
                id: 'form',
                display: 'none',
                type: 'rect',
                rect: ['0%', '0%','100%','100%','auto', 'auto']
            },
            {
                id: 'Symbol_1',
                display: 'block',
                type: 'rect',
                rect: ['39.4%', 'auto','auto','auto','auto', '0%']
            },
            {
                id: 'logo',
                type: 'image',
                tag: 'img',
                rect: ['41.6%', '4.4%','21.7%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'zcgb_06',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['90.8%', '3.5%','5.5%','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"zcgb_06.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'Symbol_3',
                symbolName: 'Symbol_3',
                autoPlay: {

                }
            },
            {
                id: 'form',
                symbolName: 'form_1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_2',
                symbolName: 'Symbol_2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Symbol_3}": [
                ["style", "top", 'auto'],
                ["transform", "rotateZ", '-2deg'],
                ["style", "display", 'none'],
                ["style", "left", '65px'],
                ["style", "bottom", '-150px']
            ],
            "${_p5}": [
                ["style", "top", '109.6%'],
                ["style", "height", 'auto'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${_p4_18}": [
                ["style", "top", '54.75%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_p3_20}": [
                ["style", "display", 'none'],
                ["style", "top", '149.9%'],
                ["style", "left", '6.88%'],
                ["style", "height", 'auto']
            ],
            "${_logo}": [
                ["style", "top", '-5.54%'],
                ["transform", "scaleY", '1.5'],
                ["transform", "scaleX", '1.5'],
                ["style", "left", '38.91%'],
                ["style", "height", 'auto']
            ],
            "${_p4_03}": [
                ["style", "top", '14.85%'],
                ["style", "height", 'auto'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '22.5%'],
                ["style", "width", '55.32%']
            ],
            "${_p2_07}": [
                ["style", "display", 'none'],
                ["style", "top", '130.79%'],
                ["style", "left", '7.66%'],
                ["style", "height", 'auto']
            ],
            "${_p4_14}": [
                ["style", "top", '42.57%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_Symbol_2}": [
                ["style", "top", 'auto'],
                ["style", "opacity", '0.5'],
                ["style", "display", 'none'],
                ["style", "bottom", '-114.85%']
            ],
            "${_p2_16}": [
                ["style", "display", 'none'],
                ["style", "top", '154.75%'],
                ["style", "left", '7.66%'],
                ["style", "height", 'auto']
            ],
            "${_p4_16}": [
                ["style", "top", '50.5%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_p2_12}": [
                ["style", "display", 'none'],
                ["style", "top", '145.94%'],
                ["style", "left", '7.66%'],
                ["style", "height", 'auto']
            ],
            "${_p1_02}": [
                ["style", "top", '49.11%'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '4.06%'],
                ["style", "height", 'auto']
            ],
            "${_p3_07}": [
                ["style", "top", '118.12%'],
                ["style", "height", 'auto'],
                ["style", "left", '6.88%'],
                ["style", "display", 'none']
            ],
            "${_p1_03}": [
                ["style", "top", '55.25%'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '3.75%'],
                ["style", "height", 'auto']
            ],
            "${_p2_03}": [
                ["style", "top", '114.85%'],
                ["style", "height", 'auto'],
                ["style", "display", 'none'],
                ["style", "left", '27.66%'],
                ["style", "width", '45.32%']
            ],
            "${_p3_10}": [
                ["style", "top", '122.38%'],
                ["style", "height", 'auto'],
                ["style", "left", '6.88%'],
                ["style", "display", 'none']
            ],
            "${_p4_12}": [
                ["style", "top", '38.22%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_p3_16}": [
                ["style", "display", 'none'],
                ["style", "top", '141.58%'],
                ["style", "left", '6.88%'],
                ["style", "height", 'auto']
            ],
            "${_p2_14}": [
                ["style", "display", 'none'],
                ["style", "top", '150.69%'],
                ["style", "left", '7.66%'],
                ["style", "height", 'auto']
            ],
            "${_p4_20}": [
                ["style", "top", '58.81%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_p3}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '-93.27%'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0%'],
                ["style", "height", 'auto']
            ],
            "${_p3_14}": [
                ["style", "display", 'none'],
                ["style", "top", '131.19%'],
                ["style", "left", '6.88%'],
                ["style", "height", 'auto']
            ],
            "${_form}": [
                ["style", "top", '115.84%'],
                ["style", "overflow", 'visible'],
                ["style", "height", '100%'],
                ["style", "display", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${_p1}": [
                ["style", "top", '39.21%'],
                ["transform", "scaleY", '0.11'],
                ["transform", "scaleX", '0.11'],
                ["style", "height", 'auto'],
                ["style", "opacity", '0'],
                ["style", "left", '3.75%'],
                ["style", "width", '92.04%']
            ],
            "${_p4_10}": [
                ["style", "top", '31.58%'],
                ["transform", "scaleY", '0.48909'],
                ["transform", "scaleX", '0.48909'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "height", 'auto']
            ],
            "${_p3_03}": [
                ["style", "top", '106.93%'],
                ["style", "height", 'auto'],
                ["style", "display", 'none'],
                ["style", "left", '27.19%'],
                ["style", "width", '45.79%']
            ],
            "${_p4_07}": [
                ["style", "top", '27.13%'],
                ["transform", "scaleY", '0.48909'],
                ["style", "height", 'auto'],
                ["transform", "scaleX", '0.48909'],
                ["style", "opacity", '0'],
                ["style", "left", '7.19%'],
                ["style", "display", 'none']
            ],
            "${_p2}": [
                ["style", "top", '115.84%'],
                ["style", "bottom", 'auto'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0%'],
                ["style", "height", 'auto']
            ],
            "${_Symbol_1}": [
                ["style", "top", 'auto'],
                ["transform", "scaleY", '1.5'],
                ["transform", "rotateZ", '360deg'],
                ["style", "display", 'block'],
                ["style", "bottom", '83.17%'],
                ["style", "left", '39.38%'],
                ["transform", "scaleX", '1.5']
            ],
            "${_p2_10}": [
                ["style", "display", 'none'],
                ["style", "top", '135.45%'],
                ["style", "left", '7.66%'],
                ["style", "height", 'auto']
            ],
            "${_p3_18}": [
                ["style", "display", 'none'],
                ["style", "top", '145.74%'],
                ["style", "left", '6.88%'],
                ["style", "height", 'auto']
            ],
            "${_Text}": [
                ["style", "top", '336px']
            ],
            "${_p3_12}": [
                ["style", "display", 'none'],
                ["style", "top", '126.83%'],
                ["style", "left", '6.88%'],
                ["style", "height", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'auto']
            ],
            "${_preloader12}": [
                ["style", "top", '68.61%']
            ],
            "${_zcgb_06}": [
                ["style", "top", '103.47%'],
                ["style", "height", 'auto'],
                ["style", "left", '90.78%'],
                ["style", "display", 'none']
            ],
            "${_p1-bj}": [
                ["style", "top", '48.32%'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0.31%'],
                ["style", "height", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 194223,
            autoPlay: true,
            timeline: [
                { id: "eid241", tween: [ "style", "${_p4_14}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0, easing: "easeOutBack" },
                { id: "eid315", tween: [ "style", "${_p4_14}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid357", tween: [ "transform", "${_Symbol_3}", "rotateZ", '-2deg', { fromValue: '-2deg'}], position: 14250, duration: 0, easing: "easeInQuad" },
                { id: "eid242", tween: [ "style", "${_p4_16}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0, easing: "easeOutBack" },
                { id: "eid314", tween: [ "style", "${_p4_16}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid122", tween: [ "style", "${_p3_16}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_p1-bj}", "top", '-9.31%', { fromValue: '48.32%'}], position: 0, duration: 2000, easing: "easeOutSine" },
                { id: "eid34", tween: [ "style", "${_p1-bj}", "top", '-85.35%', { fromValue: '-9.31%'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "transform", "${_p4_14}", "scaleY", '1', { fromValue: '0.48909'}], position: 11500, duration: 1000, easing: "easeOutBack" },
                { id: "eid74", tween: [ "style", "${_p3_12}", "top", '45.64%', { fromValue: '126.83%'}], position: 7000, duration: 750, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "style", "${_p3_12}", "top", '-79.31%', { fromValue: '45.64%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_p3_03}", "top", '25.74%', { fromValue: '106.93%'}], position: 6250, duration: 750, easing: "easeOutQuad" },
                { id: "eid133", tween: [ "style", "${_p3_03}", "top", '-99.21%', { fromValue: '25.74%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid218", tween: [ "style", "${_p3}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_p3}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "style", "${_p3_14}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "transform", "${_p4_20}", "scaleY", '1', { fromValue: '0.48909'}], position: 12250, duration: 857, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_p3_03}", "left", '27.97%', { fromValue: '27.19%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid212", tween: [ "style", "${_p2_16}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_p2_16}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_p3_18}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "style", "${_p3_10}", "top", '41.19%', { fromValue: '122.38%'}], position: 6750, duration: 750, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "style", "${_p3_10}", "top", '-83.76%', { fromValue: '41.19%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid265", tween: [ "style", "${_p1_03}", "top", '59.21%', { fromValue: '55.25%'}], position: 2554, duration: 446, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_p1_03}", "top", '-44.75%', { fromValue: '59.21%'}], position: 3000, duration: 500, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_zcgb_06}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0, easing: "easeInQuad" },
                { id: "eid57", tween: [ "style", "${_p3}", "opacity", '1', { fromValue: '0.5'}], position: 6500, duration: 1250, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_p4_12}", "top", '46.53%', { fromValue: '38.22%'}], position: 11250, duration: 1000, easing: "easeOutBack" },
                { id: "eid311", tween: [ "style", "${_p4_12}", "top", '-92.77%', { fromValue: '46.53%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid148", tween: [ "style", "${_p4_14}", "top", '50.89%', { fromValue: '42.57%'}], position: 11500, duration: 1000, easing: "easeOutBack" },
                { id: "eid306", tween: [ "style", "${_p4_14}", "top", '-88.42%', { fromValue: '50.89%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid46", tween: [ "style", "${_p2_16}", "top", '60.69%', { fromValue: '154.75%'}], position: 4500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "style", "${_p2_16}", "top", '-60.1%', { fromValue: '60.69%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid200", tween: [ "transform", "${_p4_18}", "scaleX", '1', { fromValue: '0.48909'}], position: 12000, duration: 1000, easing: "easeOutBack" },
                { id: "eid180", tween: [ "transform", "${_p4_12}", "scaleX", '1', { fromValue: '0.48909'}], position: 11250, duration: 1000, easing: "easeOutBack" },
                { id: "eid168", tween: [ "style", "${_p4_07}", "opacity", '1', { fromValue: '0'}], position: 10750, duration: 1000, easing: "easeOutBack" },
                { id: "eid182", tween: [ "transform", "${_p4_12}", "scaleY", '1', { fromValue: '0.48909'}], position: 11250, duration: 1000, easing: "easeOutBack" },
                { id: "eid174", tween: [ "style", "${_p4_12}", "opacity", '1', { fromValue: '0'}], position: 11250, duration: 1000, easing: "easeOutBack" },
                { id: "eid73", tween: [ "style", "${_p3_07}", "top", '36.93%', { fromValue: '118.12%'}], position: 6500, duration: 750, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "style", "${_p3_07}", "top", '-88.02%', { fromValue: '36.93%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_p1_02}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_p3_18}", "top", '64.55%', { fromValue: '145.74%'}], position: 8000, duration: 750, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "style", "${_p3_18}", "top", '-60.4%', { fromValue: '64.55%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "style", "${_p3_16}", "top", '60.4%', { fromValue: '141.58%'}], position: 7750, duration: 750, easing: "easeOutQuad" },
                { id: "eid123", tween: [ "style", "${_p3_16}", "top", '-64.55%', { fromValue: '60.4%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid221", tween: [ "style", "${_p3_10}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid232", tween: [ "style", "${_p3_10}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid238", tween: [ "style", "${_p4_07}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0, easing: "easeOutBack" },
                { id: "eid318", tween: [ "style", "${_p4_07}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid184", tween: [ "transform", "${_p4_14}", "scaleX", '1', { fromValue: '0.48909'}], position: 11500, duration: 1000, easing: "easeOutBack" },
                { id: "eid166", tween: [ "style", "${_p4_16}", "opacity", '1', { fromValue: '0'}], position: 11750, duration: 1000, easing: "easeOutBack" },
                { id: "eid164", tween: [ "style", "${_p4_14}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 1000, easing: "easeOutBack" },
                { id: "eid338", tween: [ "style", "${_Symbol_3}", "display", 'block', { fromValue: 'none'}], position: 14223, duration: 0, easing: "easeOutQuad" },
                { id: "eid243", tween: [ "style", "${_p4_18}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutBack" },
                { id: "eid313", tween: [ "style", "${_p4_18}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid10", tween: [ "transform", "${_Symbol_1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 2000, easing: "easeInQuad" },
                { id: "eid224", tween: [ "style", "${_p3_16}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_p3_16}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "transform", "${_p4_16}", "scaleX", '1', { fromValue: '0.48909'}], position: 11750, duration: 1000, easing: "easeOutBack" },
                { id: "eid351", tween: [ "style", "${_form}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0, easing: "easeInQuad" },
                { id: "eid240", tween: [ "style", "${_p4_12}", "display", 'block', { fromValue: 'none'}], position: 11250, duration: 0, easing: "easeOutBack" },
                { id: "eid316", tween: [ "style", "${_p4_12}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid226", tween: [ "style", "${_p3_20}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_p3_20}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid220", tween: [ "style", "${_p3_07}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "style", "${_p3_07}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "transform", "${_p4_20}", "scaleX", '1', { fromValue: '0.48909'}], position: 12250, duration: 857, easing: "easeOutBack" },
                { id: "eid44", tween: [ "style", "${_p2_12}", "top", '51.88%', { fromValue: '145.94%'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${_p2_12}", "top", '-68.91%', { fromValue: '51.88%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid204", tween: [ "transform", "${_p4_07}", "scaleX", '1', { fromValue: '0.48909'}], position: 10750, duration: 1000, easing: "easeOutBack" },
                { id: "eid192", tween: [ "transform", "${_p4_03}", "scaleX", '1', { fromValue: '0.48909'}], position: 10500, duration: 1000, easing: "easeOutBack" },
                { id: "eid359", tween: [ "style", "${_zcgb_06}", "top", '3.47%', { fromValue: '103.47%'}], position: 13250, duration: 1000, easing: "easeInQuad" },
                { id: "eid210", tween: [ "style", "${_p2_12}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeOutQuad" },
                { id: "eid217", tween: [ "style", "${_p2_12}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "transform", "${_p4_16}", "scaleY", '1', { fromValue: '0.48909'}], position: 11750, duration: 1000, easing: "easeOutBack" },
                { id: "eid223", tween: [ "style", "${_p3_14}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "style", "${_p3_14}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_p1}", "opacity", '1', { fromValue: '0'}], position: 2054, duration: 946, easing: "easeOutBack" },
                { id: "eid206", tween: [ "transform", "${_p4_07}", "scaleY", '1', { fromValue: '0.48909'}], position: 10750, duration: 1000, easing: "easeOutBack" },
                { id: "eid48", tween: [ "style", "${_p2_07}", "top", '36.73%', { fromValue: '130.79%'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_p2_07}", "top", '-84.06%', { fromValue: '36.73%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid127", tween: [ "style", "${_p3_12}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_p3_14}", "top", '50%', { fromValue: '131.19%'}], position: 7250, duration: 750, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${_p3_14}", "top", '-74.95%', { fromValue: '50%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid365", tween: [ "style", "${_p3}", "bottom", '-12.08%', { fromValue: '-93.27%'}], position: 5500, duration: 1500, easing: "easeOutQuad" },
                { id: "eid366", tween: [ "style", "${_p3}", "bottom", '102.77%', { fromValue: '-12.08%'}], position: 9000, duration: 1000 },
                { id: "eid154", tween: [ "style", "${_p4_03}", "top", '23.17%', { fromValue: '14.85%'}], position: 10500, duration: 1000, easing: "easeOutBack" },
                { id: "eid305", tween: [ "style", "${_p4_03}", "top", '-116.14%', { fromValue: '23.17%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid202", tween: [ "transform", "${_p4_18}", "scaleY", '1', { fromValue: '0.48909'}], position: 12000, duration: 1000, easing: "easeOutBack" },
                { id: "eid146", tween: [ "style", "${_p4_18}", "top", '63.07%', { fromValue: '54.75%'}], position: 12000, duration: 1000, easing: "easeOutBack" },
                { id: "eid308", tween: [ "style", "${_p4_18}", "top", '-76.24%', { fromValue: '63.07%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid64", tween: [ "style", "${_p3}", "left", '0%', { fromValue: '0%'}], position: 7750, duration: 0, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "transform", "${_p1}", "scaleY", '1', { fromValue: '0.11'}], position: 2054, duration: 946, easing: "easeOutBack" },
                { id: "eid225", tween: [ "style", "${_p3_18}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_p3_18}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid323", tween: [ "style", "${_p1_03}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "style", "${_p3_07}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "transform", "${_p1}", "scaleX", '1', { fromValue: '0.11'}], position: 2054, duration: 946, easing: "easeOutBack" },
                { id: "eid194", tween: [ "transform", "${_p4_03}", "scaleY", '1', { fromValue: '0.48909'}], position: 10500, duration: 1000, easing: "easeOutBack" },
                { id: "eid141", tween: [ "style", "${_Symbol_2}", "opacity", '1', { fromValue: '0.5'}], position: 9750, duration: 750, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_p2_14}", "top", '56.63%', { fromValue: '150.69%'}], position: 4250, duration: 1000, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_p2_14}", "top", '-64.16%', { fromValue: '56.63%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid267", tween: [ "style", "${_p1_02}", "opacity", '1', { fromValue: '0'}], position: 2304, duration: 446, easing: "easeOutQuad" },
                { id: "eid321", tween: [ "style", "${_p1-bj}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeOutBack" },
                { id: "eid188", tween: [ "transform", "${_p4_10}", "scaleX", '1', { fromValue: '0.48909'}], position: 11000, duration: 1000, easing: "easeOutBack" },
                { id: "eid129", tween: [ "style", "${_p3_10}", "left", '7.03%', { fromValue: '6.88%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_p2_14}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "easeOutQuad" },
                { id: "eid213", tween: [ "style", "${_p2_14}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_p4_10}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0, easing: "easeOutBack" },
                { id: "eid317", tween: [ "style", "${_p4_10}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid222", tween: [ "style", "${_p3_12}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid231", tween: [ "style", "${_p3_12}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_p4_20}", "top", '67.13%', { fromValue: '58.81%'}], position: 12250, duration: 857, easing: "easeOutBack" },
                { id: "eid310", tween: [ "style", "${_p4_20}", "top", '-72.18%', { fromValue: '67.13%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid363", tween: [ "style", "${_Symbol_2}", "bottom", '0.1%', { fromValue: '-114.85%'}], position: 9000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid364", tween: [ "style", "${_Symbol_2}", "bottom", '131.49%', { fromValue: '0.1%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid152", tween: [ "style", "${_p4_07}", "top", '35.45%', { fromValue: '27.13%'}], position: 10750, duration: 1000, easing: "easeOutBack" },
                { id: "eid307", tween: [ "style", "${_p4_07}", "top", '-103.86%', { fromValue: '35.45%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid15", tween: [ "style", "${_logo}", "top", '4.36%', { fromValue: '-5.54%'}], position: 1750, duration: 500, easing: "easeOutSine" },
                { id: "eid374", tween: [ "style", "${_logo}", "top", '-8.51%', { fromValue: '4.36%'}], position: 13250, duration: 1000, easing: "easeInQuad" },
                { id: "eid150", tween: [ "style", "${_p4_16}", "top", '58.81%', { fromValue: '50.5%'}], position: 11750, duration: 1000, easing: "easeOutBack" },
                { id: "eid309", tween: [ "style", "${_p4_16}", "top", '-80.5%', { fromValue: '58.81%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid170", tween: [ "style", "${_p4_03}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 1000, easing: "easeOutBack" },
                { id: "eid250", tween: [ "style", "${_Symbol_1}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0 },
                { id: "eid263", tween: [ "style", "${_p1_02}", "top", '53.07%', { fromValue: '49.11%'}], position: 2304, duration: 446, easing: "easeOutQuad" },
                { id: "eid270", tween: [ "style", "${_p1_02}", "top", '-50.89%', { fromValue: '53.07%'}], position: 3000, duration: 500, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_form}", "top", '0.03%', { fromValue: '115.84%'}], position: 13250, duration: 1000, easing: "easeInQuad" },
                { id: "eid269", tween: [ "style", "${_p1_03}", "opacity", '1', { fromValue: '0'}], position: 2554, duration: 446, easing: "easeOutQuad" },
                { id: "eid172", tween: [ "style", "${_p4_10}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 1000, easing: "easeOutBack" },
                { id: "eid11", tween: [ "style", "${_p1-bj}", "opacity", '1', { fromValue: '0.5'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "style", "${_Symbol_2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeOutQuad" },
                { id: "eid320", tween: [ "style", "${_Symbol_2}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid361", tween: [ "style", "${_Symbol_1}", "bottom", '3.96%', { fromValue: '83.17%'}], position: 0, duration: 2000, easing: "easeInQuad" },
                { id: "eid362", tween: [ "style", "${_Symbol_1}", "bottom", '-20.79%', { fromValue: '3.96%'}], position: 13250, duration: 507 },
                { id: "eid373", tween: [ "style", "${_p5}", "top", '0%', { fromValue: '109.6%'}], position: 13250, duration: 1000, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_p2_03}", "top", '20.79%', { fromValue: '114.85%'}], position: 3250, duration: 1000, easing: "easeOutQuad" },
                { id: "eid58", tween: [ "style", "${_p2_03}", "top", '-100%', { fromValue: '20.79%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_p4_03}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid319", tween: [ "style", "${_p4_03}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid50", tween: [ "style", "${_p2_10}", "top", '41.39%', { fromValue: '135.45%'}], position: 3750, duration: 1000, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_p2_10}", "top", '-79.41%', { fromValue: '41.39%'}], position: 5500, duration: 750, easing: "easeOutQuad" },
                { id: "eid219", tween: [ "style", "${_p3_03}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid234", tween: [ "style", "${_p3_03}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_p4_20}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 857, easing: "easeOutBack" },
                { id: "eid208", tween: [ "style", "${_p2_07}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "style", "${_p2_07}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_p3_20}", "top", '68.51%', { fromValue: '149.9%'}], position: 8250, duration: 750, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "style", "${_p3_20}", "top", '-56.24%', { fromValue: '68.51%'}], position: 9000, duration: 500, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_p4_10}", "top", '39.9%', { fromValue: '31.58%'}], position: 11000, duration: 1000, easing: "easeOutBack" },
                { id: "eid304", tween: [ "style", "${_p4_10}", "top", '-99.41%', { fromValue: '39.9%'}], position: 13250, duration: 500, easing: "easeOutBack" },
                { id: "eid244", tween: [ "style", "${_p4_20}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeOutBack" },
                { id: "eid312", tween: [ "style", "${_p4_20}", "display", 'none', { fromValue: 'block'}], position: 13750, duration: 0, easing: "easeOutBack" },
                { id: "eid209", tween: [ "style", "${_p2_10}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0, easing: "easeOutQuad" },
                { id: "eid216", tween: [ "style", "${_p2_10}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid247", tween: [ "style", "${_p2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_p2}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "transform", "${_p4_10}", "scaleY", '1', { fromValue: '0.48909'}], position: 11000, duration: 1000, easing: "easeOutBack" },
                { id: "eid21", tween: [ "style", "${_p1}", "top", '27.13%', { fromValue: '39.21%'}], position: 2054, duration: 946, easing: "easeOutBack" },
                { id: "eid29", tween: [ "style", "${_p1}", "top", '-118.81%', { fromValue: '27.13%'}], position: 3000, duration: 1000, easing: "easeOutBack" },
                { id: "eid371", tween: [ "style", "${_p2}", "top", '28.71%', { fromValue: '115.84%'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid372", tween: [ "style", "${_p2}", "top", '-82.18%', { fromValue: '28.71%'}], position: 5500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${_p2}", "opacity", '1', { fromValue: '0.5'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_p4_18}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000, easing: "easeOutBack" },
                { id: "eid324", tween: [ "style", "${_p5}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0, easing: "easeOutBack" },
                { id: "eid207", tween: [ "style", "${_p2_03}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_p2_03}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutQuad" },
                { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Symbol_2}', [0] ], ""], position: 9000 },
                { id: "eid339", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Symbol_3}', [0] ], ""], position: 14222.669559725 }            ]
        }
    }
},
"Symbol_1": {
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
                    type: 'image',
                    id: 'guang',
                    tag: 'img',
                    rect: ['0px', '0px', '100%', 'auto', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/guang.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'guang-2',
                    tag: 'img',
                    rect: ['0px', '0px', '100%', 'auto', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/guang-2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_guang-2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "height", 'auto']
            ],
            "${_guang}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '14.06%'],
                ["style", "width", '19.22%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_guang}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${_guang}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeInQuad" },
                { id: "eid1", tween: [ "style", "${_guang-2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${_guang-2}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"Symbol_2": {
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
                    type: 'image',
                    id: 'p4',
                    tag: 'img',
                    rect: ['0%', '0%', '100%', 'auto', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p4.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '57.82%'],
                ["style", "width", '100%']
            ],
            "${_p4}": [
                ["style", "top", '0%'],
                ["style", "height", 'auto'],
                ["style", "left", '0%'],
                ["transform", "rotateZ", '360deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40000,
            autoPlay: true,
            timeline: [
                { id: "eid78", tween: [ "transform", "${_p4}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 20, duration: 39980 }            ]
        }
    }
},
"Symbol_3": {
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
                    rect: ['0%', '0%', '100%', 'auto', 'auto', 'auto'],
                    id: 'p52',
                    fill: ['rgba(0,0,0,0)', 'images/p5.png', '0px', '0px'],
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_p52}": [
                ["style", "top", '65.66%'],
                ["style", "left", '-54.7%'],
                ["style", "height", 'auto']
            ],
            "${symbolSelector}": [
                ["style", "height", '39.21%'],
                ["style", "width", '46.57%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 180000,
            autoPlay: true,
            timeline: [
                { id: "eid327", tween: [ "style", "${_p52}", "left", '53.69%', { fromValue: '-54.7%'}], position: 0, duration: 14694, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "style", "${_p52}", "left", '121.14%', { fromValue: '53.69%'}], position: 14694, duration: 12245, easing: "easeOutQuad" },
                { id: "eid330", tween: [ "style", "${_p52}", "left", '150.34%', { fromValue: '121.14%'}], position: 26939, duration: 17030, easing: "easeOutQuad" },
                { id: "eid332", tween: [ "style", "${_p52}", "left", '58.72%', { fromValue: '150.34%'}], position: 43969, duration: 24602, easing: "easeOutQuad" },
                { id: "eid334", tween: [ "style", "${_p52}", "left", '0%', { fromValue: '58.72%'}], position: 68571, duration: 14694, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_p52}", "left", '239.26%', { fromValue: '0%'}], position: 83265, duration: 96735, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_p52}", "top", '-51.26%', { fromValue: '65.66%'}], position: 0, duration: 14694, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "style", "${_p52}", "top", '-56.57%', { fromValue: '-51.26%'}], position: 14694, duration: 12245, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_p52}", "top", '-17.93%', { fromValue: '-56.57%'}], position: 26939, duration: 17030, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_p52}", "top", '16.67%', { fromValue: '-17.93%'}], position: 43969, duration: 24602, easing: "easeOutQuad" },
                { id: "eid335", tween: [ "style", "${_p52}", "top", '-30.3%', { fromValue: '16.67%'}], position: 68571, duration: 14694, easing: "easeOutQuad" },
                { id: "eid337", tween: [ "style", "${_p52}", "top", '-176.77%', { fromValue: '-30.3%'}], position: 83265, duration: 96735, easing: "easeOutQuad" }            ]
        }
    }
},
"form_1": {
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
                    type: 'rect',
                    borderRadius: ['57px 57px', '57px 57px', '57px 57px', '57px 57px'],
                    id: 'register_container',
                    opacity: 1,
                    rect: ['10.5%', '0%', '79%', '72.7%', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    boxShadow: ['', 3, 3, 5, 0, 'rgba(0,0,0,0.65)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'ctx',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,0.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ctx}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0%'],
                ["style", "width", '100.01%']
            ],
            "${_register_container}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100%'],
                ["style", "top", '0%'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0%'],
                ["style", "height", '100%'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
            ],
            "${symbolSelector}": [
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-15405259");
