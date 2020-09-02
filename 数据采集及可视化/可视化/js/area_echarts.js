
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var chart = echarts.init(document.getElementById('map_1'));
        // var option = {
        //     tooltip: {},
        //     series: [ {
        //         type: 'wordCloud',
        //         gridSize: 2,
        //         sizeRange: [12, 50],
        //         rotationRange: [-90, 90],
        //         shape: 'pentagon',
        //         width: 600,
        //         height: 400,
        //         drawOutOfBound: true,
        //         textStyle: {
        //             normal: {
        //                 color: function () {
        //                     return 'rgb(' + [
        //                         Math.round(Math.random() * 160),
        //                         Math.round(Math.random() * 160),
        //                         Math.round(Math.random() * 160)
        //                     ].join(',') + ')';
        //                 }
        //             },
        //             emphasis: {
        //                 shadowBlur: 10,
        //                 shadowColor: '#333'
        //             }
        //         },
        //         data: [
        //             {
        //                 name: 'Sam S Club',
        //                 value: 10000,
        //                 textStyle: {
        //                     normal: {
        //                         color: 'black'
        //                     },
        //                     emphasis: {
        //                         color: 'red'
        //                     }
        //                 }
        //             },
        //             {
        //                 name: 'Macys',
        //                 value: 6181
        //             },
        //             {
        //                 name: 'Amy Schumer',
        //                 value: 4386
        //             },
        //             {
        //                 name: 'Jurassic World',
        //                 value: 4055
        //             },
        //             {
        //                 name: 'Charter Communications',
        //                 value: 2467
        //             },
        //             {
        //                 name: 'Chick Fil A',
        //                 value: 2244
        //             },
        //             {
        //                 name: 'Planet Fitness',
        //                 value: 1898
        //             },
        //             {
        //                 name: 'Pitch Perfect',
        //                 value: 1484
        //             },
        //             {
        //                 name: 'Express',
        //                 value: 1112
        //             },
        //             {
        //                 name: 'Home',
        //                 value: 965
        //             },
        //             {
        //                 name: 'Johnny Depp',
        //                 value: 847
        //             },
        //             {
        //                 name: 'Lena Dunham',
        //                 value: 582
        //             },
        //             {
        //                 name: 'Lewis Hamilton',
        //                 value: 555
        //             },
        //             {
        //                 name: 'KXAN',
        //                 value: 550
        //             },
        //             {
        //                 name: 'Mary Ellen Mark',
        //                 value: 462
        //             },
        //             {
        //                 name: 'Farrah Abraham',
        //                 value: 366
        //             },
        //             {
        //                 name: 'Rita Ora',
        //                 value: 360
        //             },
        //             {
        //                 name: 'Serena Williams',
        //                 value: 282
        //             },
        //             {
        //                 name: 'NCAA baseball tournament',
        //                 value: 273
        //             },
        //             {
        //                 name: 'Point Break',
        //                 value: 265
        //             }
        //         ]
        //     } ]
        // };
        // var colors = ['#0696ab', '#06a0ab','#06b4ab','#06c8ab'];
        // var bgColor = '#FFFFFF00';
        // var fontColor = '#2E2733';
        //
        // var itemStyle = {
        //     star5: {
        //         color: colors[0]
        //     },
        //     star4: {
        //         color: colors[1]
        //     },
        //     star3: {
        //         color: colors[2]
        //     },
        //     star2: {
        //         color: colors[3]
        //     }
        // };
        //
        // var data = [{
        //     name: '虚构',
        //     itemStyle: {
        //         color: colors[1]
        //     },
        //     children: [{
        //         name: '小说',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '疼'
        //             }, {
        //                 name: '慈悲'
        //             }, {
        //                 name: '楼下的房客'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '虚无的十字架'
        //             }, {
        //                 name: '无声告白'
        //             }, {
        //                 name: '童年的终结'
        //             }]
        //         }, {
        //             name: '3☆',
        //             children: [{
        //                 name: '疯癫老人日记'
        //             }]
        //         }]
        //     }, {
        //         name: '其他',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '纳博科夫短篇小说全集'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '安魂曲'
        //             }, {
        //                 name: '人生拼图版'
        //             }]
        //         }, {
        //             name: '3☆',
        //             children: [{
        //                 name: '比起爱你，我更需要你'
        //             }]
        //         }]
        //     }]
        // }, {
        //     name: '非虚构',
        //     itemStyle: {
        //         color: colors[2]
        //     },
        //     children: [{
        //         name: '设计',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '无界面交互'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '数字绘图的光照与渲染技术'
        //             }, {
        //                 name: '日本建筑解剖书'
        //             }]
        //         }, {
        //             name: '3☆',
        //             children: [{
        //                 name: '奇幻世界艺术\n&RPG地图绘制讲座'
        //             }]
        //         }]
        //     }, {
        //         name: '社科',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '痛点'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '卓有成效的管理者'
        //             }, {
        //                 name: '进化'
        //             }, {
        //                 name: '后物欲时代的来临',
        //             }]
        //         }, {
        //             name: '3☆',
        //             children: [{
        //                 name: '疯癫与文明'
        //             }]
        //         }]
        //     }, {
        //         name: '心理',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '我们时代的神经症人格'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '皮格马利翁效应'
        //             }, {
        //                 name: '受伤的人'
        //             }]
        //         }, {
        //             name: '3☆',
        //         }, {
        //             name: '2☆',
        //             children: [{
        //                 name: '迷恋'
        //             }]
        //         }]
        //     }, {
        //         name: '居家',
        //         children: [{
        //             name: '4☆',
        //             children: [{
        //                 name: '把房子住成家'
        //             }, {
        //                 name: '只过必要生活'
        //             }, {
        //                 name: '北欧简约风格'
        //             }]
        //         }]
        //     }, {
        //         name: '绘本',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '设计诗'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: '假如生活糊弄了你'
        //             }, {
        //                 name: '博物学家的神秘动物图鉴'
        //             }]
        //         }, {
        //             name: '3☆',
        //             children: [{
        //                 name: '方向'
        //             }]
        //         }]
        //     }, {
        //         name: '哲学',
        //         children: [{
        //             name: '4☆',
        //             children: [{
        //                 name: '人生的智慧'
        //             }]
        //         }]
        //     }, {
        //         name: '技术',
        //         children: [{
        //             name: '5☆',
        //             children: [{
        //                 name: '代码整洁之道'
        //             }]
        //         }, {
        //             name: '4☆',
        //             children: [{
        //                 name: 'Three.js 开发指南'
        //             }]
        //         }]
        //     }]
        // }];
        //
        // for (var j = 0; j < data.length; ++j) {
        //     var level1 = data[j].children;
        //     for (var i = 0; i < level1.length; ++i) {
        //         var block = level1[i].children;
        //         var bookScore = [];
        //         var bookScoreId;
        //         for (var star = 0; star < block.length; ++star) {
        //             var style = (function (name) {
        //                 switch (name) {
        //                     case '5☆':
        //                         bookScoreId = 0;
        //                         return itemStyle.star5;
        //                     case '4☆':
        //                         bookScoreId = 1;
        //                         return itemStyle.star4;
        //                     case '3☆':
        //                         bookScoreId = 2;
        //                         return itemStyle.star3;
        //                     case '2☆':
        //                         bookScoreId = 3;
        //                         return itemStyle.star2;
        //                 }
        //             })(block[star].name);
        //
        //             block[star].label = {
        //                 color: style.color,
        //                 downplay: {
        //                     opacity: 0.5
        //                 }
        //             };
        //
        //             if (block[star].children) {
        //                 style = {
        //                     opacity: 1,
        //                     color: style.color
        //                 };
        //                 block[star].children.forEach(function (book) {
        //                     book.value = 1;
        //                     book.itemStyle = style;
        //
        //                     book.label = {
        //                         color: style.color
        //                     };
        //
        //                     var value = 1;
        //                     if (bookScoreId === 0 || bookScoreId === 3) {
        //                         value = 5;
        //                     }
        //
        //                     if (bookScore[bookScoreId]) {
        //                         bookScore[bookScoreId].value += value;
        //                     }
        //                     else {
        //                         bookScore[bookScoreId] = {
        //                             color: colors[bookScoreId],
        //                             value: value
        //                         };
        //                     }
        //                 });
        //             }
        //         }
        //
        //         level1[i].itemStyle = {
        //             color: data[j].itemStyle.color
        //         };
        //     }
        // }
        //
        // option = {
        //     backgroundColor: bgColor,
        //     color: colors,
        //     series: [{
        //         type: 'sunburst',
        //         center: ['50%', '48%'],
        //         data: data,
        //         sort: function (a, b) {
        //             if (a.depth === 1) {
        //                 return b.getValue() - a.getValue();
        //             }
        //             else {
        //                 return a.dataIndex - b.dataIndex;
        //             }
        //         },
        //         label: {
        //             rotate: 'radial',
        //             color: fontColor,
        //         },
        //         itemStyle: {
        //             borderColor: bgColor,
        //             borderWidth: 2
        //         },
        //         levels: [{}, {
        //             r0: 0,
        //             r: 40,
        //             label: {
        //                 rotate: 0
        //             }
        //         }, {
        //             r0: 40,
        //             r: 105
        //         }, {
        //             r0: 115,
        //             r: 140,
        //             itemStyle: {
        //                 shadowBlur: 2,
        //                 shadowColor: colors[2],
        //                 color: 'transparent'
        //             },
        //             label: {
        //                 rotate: 'tangential',
        //                 fontSize: 10,
        //                 color: colors[0]
        //             }
        //         }, {
        //             r0: 140,
        //             r: 145,
        //             itemStyle: {
        //                 shadowBlur: 80,
        //                 shadowColor: colors[0]
        //             },
        //             label: {
        //                 position: 'outside',
        //                 textShadowBlur: 5,
        //                 textShadowColor: '#333',
        //             },
        //             downplay: {
        //                 label: {
        //                     opacity: 0.5
        //                 }
        //             }
        //         }]
        //     }]
        // };
        var dataBJ = [
            [55,9,56,0.46,18,6,1],
            [25,11,21,0.65,34,9,2],
            [56,7,63,0.3,14,5,3],
            [33,7,29,0.33,16,6,4],
            [42,24,44,0.76,40,16,5],
            [82,58,90,1.77,68,33,6],
            [74,49,77,1.46,48,27,7],
            [78,55,80,1.29,59,29,8],
            [267,216,280,4.8,108,64,9],
            [185,127,216,2.52,61,27,10],
            [39,19,38,0.57,31,15,11],
            [41,11,40,0.43,21,7,12],
            [64,38,74,1.04,46,22,13],
            [108,79,120,1.7,75,41,14],
            [108,63,116,1.48,44,26,15],
            [33,6,29,0.34,13,5,16],
            [94,66,110,1.54,62,31,17],
            [186,142,192,3.88,93,79,18],
            [57,31,54,0.96,32,14,19],
            [22,8,17,0.48,23,10,20],
            [39,15,36,0.61,29,13,21],
            [94,69,114,2.08,73,39,22],
            [99,73,110,2.43,76,48,23],
            [31,12,30,0.5,32,16,24],
            [42,27,43,1,53,22,25],
            [154,117,157,3.05,92,58,26],
            [234,185,230,4.09,123,69,27],
            [160,120,186,2.77,91,50,28],
            [134,96,165,2.76,83,41,29],
            [52,24,60,1.03,50,21,30],
            [46,5,49,0.28,10,6,31]
        ];

        var dataGZ = [
            [26,37,27,1.163,27,13,1],
            [85,62,71,1.195,60,8,2],
            [78,38,74,1.363,37,7,3],
            [21,21,36,0.634,40,9,4],
            [41,42,46,0.915,81,13,5],
            [56,52,69,1.067,92,16,6],
            [64,30,28,0.924,51,2,7],
            [55,48,74,1.236,75,26,8],
            [76,85,113,1.237,114,27,9],
            [91,81,104,1.041,56,40,10],
            [84,39,60,0.964,25,11,11],
            [64,51,101,0.862,58,23,12],
            [70,69,120,1.198,65,36,13],
            [77,105,178,2.549,64,16,14],
            [109,68,87,0.996,74,29,15],
            [73,68,97,0.905,51,34,16],
            [54,27,47,0.592,53,12,17],
            [51,61,97,0.811,65,19,18],
            [91,71,121,1.374,43,18,19],
            [73,102,182,2.787,44,19,20],
            [73,50,76,0.717,31,20,21],
            [84,94,140,2.238,68,18,22],
            [93,77,104,1.165,53,7,23],
            [99,130,227,3.97,55,15,24],
            [146,84,139,1.094,40,17,25],
            [113,108,137,1.481,48,15,26],
            [81,48,62,1.619,26,3,27],
            [56,48,68,1.336,37,9,28],
            [82,92,174,3.29,0,13,29],
            [106,116,188,3.628,101,16,30],
            [118,50,0,1.383,76,11,31]
        ];

        var dataSH = [
            [91,45,125,0.82,34,23,1],
            [65,27,78,0.86,45,29,2],
            [83,60,84,1.09,73,27,3],
            [109,81,121,1.28,68,51,4],
            [106,77,114,1.07,55,51,5],
            [109,81,121,1.28,68,51,6],
            [106,77,114,1.07,55,51,7],
            [89,65,78,0.86,51,26,8],
            [53,33,47,0.64,50,17,9],
            [80,55,80,1.01,75,24,10],
            [117,81,124,1.03,45,24,11],
            [99,71,142,1.1,62,42,12],
            [95,69,130,1.28,74,50,13],
            [116,87,131,1.47,84,40,14],
            [108,80,121,1.3,85,37,15],
            [134,83,167,1.16,57,43,16],
            [79,43,107,1.05,59,37,17],
            [71,46,89,0.86,64,25,18],
            [97,71,113,1.17,88,31,19],
            [84,57,91,0.85,55,31,20],
            [87,63,101,0.9,56,41,21],
            [104,77,119,1.09,73,48,22],
            [87,62,100,1,72,28,23],
            [168,128,172,1.49,97,56,24],
            [65,45,51,0.74,39,17,25],
            [39,24,38,0.61,47,17,26],
            [39,24,39,0.59,50,19,27],
            [93,68,96,1.05,79,29,28],
            [188,143,197,1.66,99,51,29],
            [174,131,174,1.55,108,50,30],
            [187,143,201,1.39,89,53,31]
        ];

        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        option = {
            backgroundColor: '#FFFFFF00',
            title: {
                text: '特征-评分',
                left: 'center',
                textStyle: {
                    color: '#eee'
                }
            },
            legend: {
                bottom: 0,
                data: ['很差', '还行', '力推'],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                selectedMode: 'single'
            },
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
                indicator: [
                    {name: '画质', max: 300},
                    {name: '音效', max: 250},
                    {name: '剧情', max: 300},
                    {name: '明星', max: 5},
                    // {name: '其他', max: 200},
                    // {name: 'SO2', max: 100}
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '很差',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        color: '#FFCC00'
                    },
                    areaStyle: {
                        opacity: 0.1
                    }
                },
                {
                    name: '还行',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataSH,
                    symbol: 'none',
                    itemStyle: {
                        color: '#FF7F00'
                    },
                    areaStyle: {
                        opacity: 0.1
                    }
                },
                {
                    name: '力推',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        color: '#CC6600'
                    },
                    areaStyle: {
                        opacity: 0.1
                    }
                }
            ]
        };

        chart.setOption(option);
        window.addEventListener("resize",function(){
            chart.resize();
        });
    }

})

