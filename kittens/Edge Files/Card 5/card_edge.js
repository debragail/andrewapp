/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cat',
                            type: 'image',
                            rect: ['0px', '0px', '260px', '420px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cat.jpg",'0px','0px']
                        },
                        {
                            id: 'shade',
                            type: 'rect',
                            rect: ['0px', '0px', '260px', '420px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'overlay_2',
                            type: 'rect',
                            rect: ['-64px', '-228px', '164px', '313px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-70'],[],['1.29633']]
                        },
                        {
                            id: 'overlay_1',
                            type: 'rect',
                            rect: ['157px', '-228px', '164px', '313px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['70'],[],['1.29633']]
                        },
                        {
                            id: 'text',
                            type: 'group',
                            rect: ['1px', '420px', '259', '48px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '259px', '48px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [2,"rgba(255,255,255,1.00)","none"]
                            },
                            {
                                id: 'view',
                                type: 'text',
                                rect: ['0px', '15px', '259px', '27px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​VIEW</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(2,164,177,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'border',
                            type: 'rect',
                            rect: ['0px', '0px', '258px', '418px', 'auto', 'auto'],
                            fill: ["rgba(120,120,120,0.00)"],
                            stroke: [1,"rgba(208,208,208,1.00)","solid"]
                        },
                        {
                            id: 'subtitle',
                            type: 'text',
                            rect: ['15px', '79px', '230px', '97px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Cats make wonderful pets. Their beautiful fur is gorgeous.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(195,195,195,1.00)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['1px', '33px', '260px', '33px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​SHADOW</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(2,164,177,1.00)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'mouse_over',
                            type: 'rect',
                            rect: ['0px', '0px', '260px', '420px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.01',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '260px', '420px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "in": 0
                    },
                    data: [
                        [
                            "eid13",
                            "opacity",
                            0,
                            250,
                            "easeOutCirc",
                            "${shade}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            250,
                            "easeOutCirc",
                            "${subtitle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_1}",
                            '-60deg',
                            '70deg'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_2}",
                            '-1px',
                            '-64px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            250,
                            "easeOutCirc",
                            "${title}",
                            '33px',
                            '15px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_1}",
                            '95px',
                            '157px'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_2}",
                            '60deg',
                            '-70deg'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_2}",
                            '-116px',
                            '-228px'
                        ],
                        [
                            "eid42",
                            "top",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay_1}",
                            '-120px',
                            '-228px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            250,
                            "easeOutCirc",
                            "${text}",
                            '420px',
                            '372px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_edgeActions.js");
})("EDGE-520015278");
