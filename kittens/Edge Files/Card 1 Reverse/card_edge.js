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
                            id: 'overlay',
                            type: 'rect',
                            rect: ['-22px', '46px', '260px', '44px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-18'],['0','-6'],['1.3318','6.64205']]
                        },
                        {
                            id: 'text',
                            type: 'group',
                            rect: ['80px', '210px', '100px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '96px', '36px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [2,"rgba(255,255,255,1.00)","solid"]
                            },
                            {
                                id: 'view',
                                type: 'text',
                                rect: ['1px', '9px', '99px', '27px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​VIEW</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
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
                            rect: ['15px', '78px', '230px', '97px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Cats make wonderful pets. Their beautiful fur is gorgeous.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(195,195,195,1.00)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['1px', '35px', '260px', '33px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">FROSTY</p>",
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
                            "eid27",
                            "scaleY",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '1',
                            '6.64205'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '0px',
                            '46px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            250,
                            "easeOutSine",
                            "${shade}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            250,
                            "easeOutSine",
                            "${subtitle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            250,
                            "easeOutSine",
                            "${title}",
                            '10px',
                            '35px'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '0deg',
                            '-18deg'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '0px',
                            '-22px'
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            250,
                            "easeOutSine",
                            "${text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "skewY",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '0deg',
                            '-6.2deg'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            0,
                            250,
                            "easeOutSine",
                            "${overlay}",
                            '1',
                            '1.3318'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_edgeActions.js");
})("EDGE-520015278");
