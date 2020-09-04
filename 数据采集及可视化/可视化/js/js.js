
$(function () {
    echarts_1();
    echarts_2();
    echarts_4();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_5();
    echarts_6();
    function echarts_1() {
            // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
      //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['无言的山丘', '艺术创想', '泰坦尼克号', '星际牛仔', '老友记', '肖申克的救赎', '飞出个未来'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '8',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            min: 5,
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [
            {
            type: 'bar',
            data: [9.684211, 9.671498, 9.368421, 9.324201, 9.200000, 9.196787, 9.134884],
            barWidth:'35%', //柱子宽度
           // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color:'#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }

        ]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow'}
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
           containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: ['千王之王', '异种', '山村老尸', '黄飞鸿之西域雄狮', '醉拳3', '异形3', '一个好人'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '8',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                 textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [
            {

            type: 'bar',
            data: [5.283721, 5.322115, 5.359223, 5.363208, 5.391304, 5.416667, 5.495327],
            barWidth:'35%', //柱子宽度
           // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color:'#27d08a',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }

        ]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    function echarts_5() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart5'));

           option = {
      //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '2%',
           containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: ['经典', '故事', '剧情', '好看', '喜欢', '感觉', '小时候', '不错'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                 textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [3725, 3920, 2511, 2304, 6089, 2672, 2604, 2125],
            barWidth:'35%', //柱子宽度
           // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color:'#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }
        ]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }

    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top:'0%',
                data:['正向评论','负向评论'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel:  {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize:10,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

            }, {

                axisPointer: {show: false},
                axisLine: {  show: false},
                position: 'bottom',
                offset: 20,



            }],

            yAxis: [{
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:  {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize:12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: '正向评论',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#0184d5',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [68, 451, 841, 2365, 2578, 4193, 5439, 4754, 2877, 1637, 751, 1069, 2115, 1463, 1369, 1208]
                },
                {
                    name: '负向评论',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#00d887',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [115, 649, 1341, 3424, 4058, 6649, 8052, 7073, 4005, 2300, 1186, 1826, 3865, 2907, 2398, 1820]
                },

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_6() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart6'));

            var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            //shadowBlur: 40,
            //shadowColor: 'rgba(40, 40, 40, 1)',
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(255,255,255,.05)',
            label: {show: false,},
            labelLine: {show: false}
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    option = {
        color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
        tooltip: {
            show: true,
            formatter: "{a} : {c} "
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 12,
            bottom: '3%',

            data: ['明星', '音效', '画质', '剧情' ],
            // 12588 4304 122 16993
            textStyle: {
                        color: 'rgba(255,255,255,.6)',
                    }
        },

        series: [
            {
            name: '明星',
            type: 'pie',
            clockWise: false,
            center: ['50%', '42%'],
            radius: ['59%', '70%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                value: 16993,
                name: '01'
            }, {
                value: 20,
                name: 'invisible',
                tooltip: {show: false},
                itemStyle: placeHolderStyle
            }]
        },
            {
            name: '音效',
            type: 'pie',
            clockWise: false,
            center: ['50%', '42%'],
            radius: ['49%', '60%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                value: 12588,
                name: '02'
            }, {
                value: 30,
                name: 'invisible',
                tooltip: {show: false},
                itemStyle: placeHolderStyle
            }]
        },
            {
            name: '画质',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            center: ['50%', '42%'],
            radius: ['39%', '50%'],
            itemStyle: dataStyle,
            data: [{
                value: 4304,
                name: '03'
            }, {
                value: 35,
                name: 'invisible',
                tooltip: {show: false},
                itemStyle: placeHolderStyle
            }]
        },
            {
            name: '剧情',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            center: ['50%', '42%'],
            radius: ['29%', '40%'],
            itemStyle: dataStyle,
            data: [{
                value: 122,
                name: '04'
            }, {
                value: 40,
                name: 'invisible',
                tooltip: {show: false},
                itemStyle: placeHolderStyle
            }]
        },]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    function echarts_31() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('fb1'));
    option = {

            title: [{
            text: '画质星级分布',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize:'16'
            }

        }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
    position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {

    top:'70%',
           itemWidth: 10,
            itemHeight: 10,
            data:['1★','2★','3★','4★','5★'],
                    textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },
        series: [
            {
                name:'画质星级分布',
                type:'pie',
                center: ['50%', '42%'],
                radius: ['40%', '60%'],
                      color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
                label: {show:false},
                labelLine: {show:false},
                data:[
                    {value:31, name:'1★'},
                    {value:218, name:'2★'},
                    {value:1117, name:'3★'},
                    {value:1868, name:'4★'},
                    {value:1326, name:'5★'},
                ]
            }
        ]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '音效星级分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position:function(p){   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top:'70%',
                itemWidth: 10,
                itemHeight: 10,
                data:['1★','2★','3★','4★','5★'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'12',
                }
            },
            series: [
                {
                    name:'音效星级分布',
                    type:'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
                    label: {show:false},
                    labelLine: {show:false},
                    data:[
                        {value:13, name:'1★'},
                        {value:57, name:'2★'},
                        {value:304, name:'3★'},
                        {value:661, name:'4★'},
                        {value:562, name:'5★'},
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {

            title: [{
                text: '剧情星级分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position:function(p){   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top:'70%',
                itemWidth: 10,
                itemHeight: 10,
                data:['1★','2★','3★','4★','5★'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize:'12',
                }
            },
            series: [
                {
                    name:'剧情星级分布',
                    type:'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
                    label: {show:false},
                    labelLine: {show:false},
                    data:[
                        {value:93, name:'1★'},
                        {value:406, name:'2★'},
                        {value:2405, name:'3★'},
                        {value:4029, name:'4★'},
                        {value:2869, name:'5★'},
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    // function echarts_32() {
    //         // 基于准备好的dom，初始化echarts实例
    //         var myChart = echarts.init(document.getElementById('fb2'));
    // option = {
    //
    //         title: [{
    //         text: '职业分布',
    //         left: 'center',
    //         textStyle: {
    //             color: '#fff',
    //             fontSize:'16'
    //         }
    //
    //     }],
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b}: {c} ({d}%)",
    // position:function(p){   //其中p为当前鼠标的位置
    //             return [p[0] + 10, p[1] - 10];
    //         }
    //     },
    //     legend: {
    //
    //     top:'70%',
    //        itemWidth: 10,
    //         itemHeight: 10,
    //         data:['电子商务','教育','IT/互联网','金融','学生','其他'],
    //                 textStyle: {
    //            color: 'rgba(255,255,255,.5)',
    //             fontSize:'12',
    //         }
    //     },
    //     series: [
    //         {
    //             name:'年龄分布',
    //             type:'pie',
    //             center: ['50%', '42%'],
    //             radius: ['40%', '60%'],
    //             color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
    //             label: {show:false},
    //             labelLine: {show:false},
    //             data:[
    //                 {value:5, name:'电子商务'},
    //                 {value:1, name:'教育'},
    //                 {value:6, name:'IT/互联网'},
    //                 {value:2, name:'金融'},
    //                 {value:1, name:'学生'},
    //                 {value:1, name:'其他'},
    //             ]
    //         }
    //     ]
    // };
    //
    //         // 使用刚指定的配置项和数据显示图表。
    //         myChart.setOption(option);
    //         window.addEventListener("resize",function(){
    //             myChart.resize();
    //         });
    //     }
    // function echarts_33() {
    //         // 基于准备好的dom，初始化echarts实例
    //         var myChart = echarts.init(document.getElementById('fb3'));
    // option = {
    //         title: [{
    //         text: '兴趣分布',
    //         left: 'center',
    //         textStyle: {
    //             color: '#fff',
    //             fontSize:'16'
    //         }
    //
    //     }],
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b}: {c} ({d}%)",
    // position:function(p){   //其中p为当前鼠标的位置
    //             return [p[0] + 10, p[1] - 10];
    //         }
    //     },
    //     legend: {
    //     top:'70%',
    //        itemWidth: 10,
    //         itemHeight: 10,
    //         data:['汽车','旅游','财经','教育','软件','其他'],
    //                 textStyle: {
    //             color: 'rgba(255,255,255,.5)',
    //             fontSize:'12',
    //         }
    //     },
    //     series: [
    //         {
    //             name:'兴趣分布',
    //             type:'pie',
    //             center: ['50%', '42%'],
    //             radius: ['40%', '60%'],
    //                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
    //             label: {show:false},
    //             labelLine: {show:false},
    //             data:[
    //                 {value:2, name:'汽车'},
    //                 {value:3, name:'旅游'},
    //                 {value:1, name:'财经'},
    //                 {value:4, name:'教育'},
    //                 {value:8, name:'软件'},
    //                 {value:1, name:'其他'},
    //             ]
    //         }
    //     ]
    // };
    //
    //         // 使用刚指定的配置项和数据显示图表。
    //         myChart.setOption(option);
    //         window.addEventListener("resize",function(){
    //             myChart.resize();
    //         });
    //     }

	
})



		
		
		


		









