// 引入 ECharts 主模块
import {authors} from '../lib/author';
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
let myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title: {
        text: 'test'
    },
    tooltip: {},
    xAxis: {
        data: authors
    },
    yAxis: {},
    series: [
        {
            name: '文章数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,2,2,2,22]
        }
    ]
});
