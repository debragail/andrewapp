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
                            id: 'text',
                            type: 'group',
                            rect: ['80px', '230px', '100px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '96px', '36px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [2,"rgba(0,0,0,1.00)","solid"]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['100px', '20px', '45px', '0px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['-45px', '20px', '45px', '0px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"]
                            },
                            {
                                id: 'viewCopy',
                                type: 'text',
                                rect: ['1px', '9px', '99px', '27px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​VIEW</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
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
                            id: 'overlay',
                            type: 'rect',
                            rect: ['0px', '0px', '260px', '146px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                            rect: ['15px', '86px', '230px', '97px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Cats make wonderful pets. Their beautiful fur is gorgeous.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(195,195,195,1.00)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['1px', '10px', '260px', '33px', 'auto', 'auto'],
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
                            "eid49",
                            "top",
                            0,
                            250,
                            "easeOutCirc",
                            "${title}",
                            '10px',
                            '37px'
                        ],
                        [
                            "eid51",
                            "height",
                            0,
                            250,
                            "easeOutCirc",
                            "${overlay}",
                            '48px',
                            '146px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            250,
                            "easeOutCirc",
                            "${shade}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid50",
                            "opacity",
                            0,
                            250,
                            "easeOutCirc",
                            "${subtitle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_edgeActions.js");
})("EDGE-520015278");
