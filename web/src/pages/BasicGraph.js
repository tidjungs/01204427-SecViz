import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
// import './App.css';

const ipOption = {
  title: {
    text: 'Ratio IP usage',
    right: '30px',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['ipv4', 'ipv6', 'dual stack'],
  },
  series: [
    {
      name: 'Usage',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        { value: 4000, name: 'ipv4' },
        { value: 10, name: 'ipv6' },
        { value: 3127, name: 'dual stack' },
      ],
    },
  ],
};

const activityOption = {
  title: {
    text: 'Login Activity',
    right: '30px',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['login', 'timeout', 're-login', 'logout'],
  },
  series: [
    {
      name: 'Activity',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        { value: 3574, name: 'login' },
        { value: 3312, name: 'timeout' },
        { value: 229, name: 're-login' },
        { value: 22, name: 'logout' },
      ],
    },
  ],
};

const serverOption = {
  title: {
    text: 'Server Distribution',
    right: '30px',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: { lineStyle: { type: 'dashed' } },
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      '201',
      '202',
      '203',
      '204',
      '205',
      '206',
      '207',
      '208',
      '209',
      '210',
      '211',
      '212',
    ],
  },
  series: [
    {
      name: 'request',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: true,
          formatter: '{b}',
        },
      },
      data: [644, 643, 553, 665, 570, 570, 589, 567, 548, 592, 523, 673],
    },
  ],
};

const data = [
  ['0:00', 64],
  ['0:15', 58],
  ['0:30', 54],
  ['0:45', 50],
  ['1:00', 50],
  ['1:15', 47],
  ['1:30', 40],
  ['1:45', 35],
  ['2:00', 26],
  ['2:15', 29],
  ['2:30', 26],
  ['2:45', 20],
  ['3:00', 14],
  ['3:15', 18],
  ['3:30', 20],
  ['3:45', 16],
  ['4:00', 18],
  ['4:15', 13],
  ['4:30', 11],
  ['4:45', 14],
  ['5:00', 14],
  ['5:15', 15],
  ['5:30', 11],
  ['5:45', 13],
  ['6:00', 21],
  ['6:15', 24],
  ['6:30', 27],
  ['6:45', 34],
  ['7:00', 36],
  ['7:15', 48],
  ['7:30', 47],
  ['7:45', 39],
  ['8:00', 52],
  ['8:15', 71],
  ['8:30', 84],
  ['8:45', 87],
  ['9:00', 111],
  ['9:15', 123],
  ['9:30', 117],
  ['9:45', 127],
  ['10:00', 126],
  ['10:15', 116],
  ['10:30', 123],
  ['10:45', 118],
  ['11:00', 115],
  ['11:15', 121],
  ['11:30', 116],
  ['11:45', 136],
  ['12:00', 146],
  ['12:15', 144],
  ['12:30', 171],
  ['12:45', 163],
  ['13:00', 142],
  ['13:15', 148],
  ['13:30', 131],
  ['13:45', 124],
  ['14:00', 125],
  ['14:15', 142],
  ['14:30', 138],
  ['14:45', 138],
  ['15:00', 153],
  ['15:15', 134],
  ['15:30', 129],
  ['15:45', 133],
  ['16:00', 124],
  ['16:15', 113],
  ['16:30', 119],
  ['16:45', 116],
  ['17:00', 110],
  ['17:15', 102],
  ['17:30', 89],
  ['17:45', 90],
  ['18:00', 104],
  ['18:15', 112],
  ['18:30', 113],
  ['18:45', 111],
  ['19:00', 111],
  ['19:15', 117],
  ['19:30', 117],
  ['19:45', 119],
  ['20:00', 132],
  ['20:15', 125],
  ['20:30', 103],
  ['20:45', 93],
  ['21:00', 108],
  ['21:15', 115],
  ['21:30', 105],
  ['21:45', 109],
  ['22:00', 100],
  ['22:15', 86],
  ['22:30', 80],
  ['22:45', 71],
  ['23:00', 62],
  ['23:15', 53],
  ['23:30', 53],
  ['23:45', 26],
];

const dateList = data.map(function(item) {
  return item[0];
});
const valueList = data.map(function(item) {
  return item[1];
});

const userTimeOption = {
  // Make gradient line here
  visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400,
    },
  ],

  title: [
    {
      left: 'center',
      text: 'User Time Series',
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
  xAxis: [
    {
      data: dateList,
    },
  ],
  yAxis: [
    {
      splitLine: { show: false },
    },
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: valueList,
    },
  ],
};

const llData = [
  ['0:00', 74, 69],
  ['0:15', 50, 25],
  ['0:30', 16, 8],
  ['0:45', 42, 21],
  ['1:00', 32, 16],
  ['1:15', 28, 14],
  ['1:30', 22, 11],
  ['1:45', 12, 6],
  ['2:00', 18, 9],
  ['2:15', 8, 4],
  ['2:30', 16, 8],
  ['2:45', 0, 0],
  ['3:00', 10, 5],
  ['3:15', 10, 5],
  ['3:30', 4, 2],
  ['3:45', 8, 4],
  ['4:00', 12, 6],
  ['4:15', 2, 1],
  ['4:30', 8, 4],
  ['4:45', 10, 5],
  ['5:00', 16, 8],
  ['5:15', 2, 1],
  ['5:30', 6, 3],
  ['5:45', 18, 9],
  ['6:00', 27, 13],
  ['6:15', 18, 9],
  ['6:30', 36, 18],
  ['6:45', 24, 12],
  ['7:00', 46, 23],
  ['7:15', 48, 24],
  ['7:30', 26, 13],
  ['7:45', 46, 23],
  ['8:00', 64, 32],
  ['8:15', 78, 39],
  ['8:30', 92, 46],
  ['8:45', 94, 47],
  ['9:00', 122, 61],
  ['9:15', 90, 45],
  ['9:30', 124, 62],
  ['9:45', 124, 62],
  ['10:00', 100, 50],
  ['10:15', 86, 43],
  ['10:30', 126, 63],
  ['10:45', 104, 52],
  ['11:00', 108, 54],
  ['11:15', 106, 53],
  ['11:30', 124, 62],
  ['11:45', 111, 55],
  ['12:00', 139, 69],
  ['12:15', 150, 75],
  ['12:30', 131, 65],
  ['12:45', 114, 57],
  ['13:00', 140, 70],
  ['13:15', 94, 47],
  ['13:30', 114, 57],
  ['13:45', 102, 51],
  ['14:00', 110, 55],
  ['14:15', 126, 63],
  ['14:30', 100, 50],
  ['14:45', 158, 79],
  ['15:00', 106, 53],
  ['15:15', 98, 49],
  ['15:30', 140, 70],
  ['15:45', 96, 48],
  ['16:00', 81, 40],
  ['16:15', 101, 50],
  ['16:30', 106, 53],
  ['16:45', 86, 43],
  ['17:00', 100, 50],
  ['17:15', 58, 29],
  ['17:30', 70, 35],
  ['17:45', 104, 52],
  ['18:00', 110, 54],
  ['18:15', 100, 50],
  ['18:30', 96, 48],
  ['18:45', 120, 59],
  ['19:00', 88, 44],
  ['19:15', 126, 63],
  ['19:30', 105, 52],
  ['19:45', 121, 60],
  ['20:00', 116, 58],
  ['20:15', 104, 51],
  ['20:30', 97, 48],
  ['20:45', 98, 49],
  ['21:00', 106, 53],
  ['21:15', 100, 50],
  ['21:30', 104, 52],
  ['21:45', 91, 45],
  ['22:00', 85, 42],
  ['22:15', 87, 43],
  ['22:30', 66, 32],
  ['22:45', 55, 27],
  ['23:00', 60, 30],
  ['23:15', 55, 27],
  ['23:30', 40, 11],
  ['23:45', 25, 0],
  ['24:00', 10, 0],
];

const llDateList = llData.map(item => item[0]);
const loginList = llData.map(item => item[1]);
const logoutList = llData.map(item => item[2]);

const loginLogoutOption = {
  title: {
    text: 'Login-Logout Time Series',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['login', 'logout'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: llDateList,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'login',
      type: 'line',
      data: loginList,
    },
    {
      name: 'logout',
      type: 'line',
      data: logoutList,
    },
  ],
};
const ipTypeData = [
  ['0:00', 35, 0, 39],
  ['0:15', 24, 0, 26],
  ['0:30', 10, 0, 6],
  ['0:45', 24, 0, 18],
  ['1:00', 24, 0, 8],
  ['1:15', 10, 0, 18],
  ['1:30', 10, 0, 12],
  ['1:45', 6, 0, 6],
  ['2:00', 6, 0, 12],
  ['2:15', 4, 0, 4],
  ['2:30', 10, 0, 6],
  ['2:45', 0, 0, 0],
  ['3:00', 4, 0, 6],
  ['3:15', 4, 0, 6],
  ['3:30', 2, 0, 2],
  ['3:45', 4, 0, 4],
  ['4:00', 10, 0, 2],
  ['4:15', 0, 0, 2],
  ['4:30', 4, 0, 4],
  ['4:45', 8, 0, 2],
  ['5:00', 8, 0, 8],
  ['5:15', 0, 0, 2],
  ['5:30', 6, 0, 0],
  ['5:45', 2, 0, 16],
  ['6:00', 18, 0, 9],
  ['6:15', 14, 0, 4],
  ['6:30', 16, 0, 20],
  ['6:45', 10, 0, 14],
  ['7:00', 26, 0, 20],
  ['7:15', 26, 0, 22],
  ['7:30', 14, 0, 12],
  ['7:45', 24, 0, 22],
  ['8:00', 48, 0, 16],
  ['8:15', 52, 0, 26],
  ['8:30', 74, 0, 18],
  ['8:45', 52, 0, 42],
  ['9:00', 72, 0, 50],
  ['9:15', 50, 0, 40],
  ['9:30', 58, 0, 66],
  ['9:45', 78, 0, 46],
  ['10:00', 54, 2, 44],
  ['10:15', 50, 0, 36],
  ['10:30', 78, 0, 48],
  ['10:45', 68, 2, 34],
  ['11:00', 56, 0, 52],
  ['11:15', 62, 0, 44],
  ['11:30', 66, 0, 58],
  ['11:45', 51, 0, 60],
  ['12:00', 80, 0, 59],
  ['12:15', 88, 0, 62],
  ['12:30', 66, 0, 65],
  ['12:45', 68, 0, 46],
  ['13:00', 84, 0, 56],
  ['13:15', 66, 0, 28],
  ['13:30', 58, 0, 56],
  ['13:45', 62, 0, 40],
  ['14:00', 58, 0, 52],
  ['14:15', 60, 0, 66],
  ['14:30', 48, 0, 52],
  ['14:45', 72, 0, 86],
  ['15:00', 56, 0, 50],
  ['15:15', 56, 2, 40],
  ['15:30', 92, 2, 46],
  ['15:45', 54, 0, 42],
  ['16:00', 41, 0, 40],
  ['16:15', 56, 0, 45],
  ['16:30', 60, 0, 46],
  ['16:45', 30, 0, 56],
  ['17:00', 56, 0, 44],
  ['17:15', 40, 0, 18],
  ['17:30', 42, 0, 28],
  ['17:45', 64, 0, 40],
  ['18:00', 55, 0, 55],
  ['18:15', 50, 0, 50],
  ['18:30', 52, 0, 44],
  ['18:45', 59, 0, 61],
  ['19:00', 56, 0, 32],
  ['19:15', 76, 2, 48],
  ['19:30', 60, 0, 45],
  ['19:45', 70, 0, 51],
  ['20:00', 62, 0, 54],
  ['20:15', 59, 0, 45],
  ['20:30', 58, 0, 39],
  ['20:45', 52, 0, 46],
  ['21:00', 60, 0, 46],
  ['21:15', 58, 0, 42],
  ['21:30', 62, 0, 42],
  ['21:45', 48, 0, 43],
  ['22:00', 59, 0, 26],
  ['22:15', 52, 0, 35],
  ['22:30', 34, 0, 32],
  ['22:45', 31, 0, 24],
  ['23:00', 38, 0, 22],
  ['23:15', 29, 0, 26],
  ['23:30', 12, 0, 28],
  ['23:45', 14, 0, 11],
  ['24:00', 5, 0, 5],
];

const ipTypeDateList = ipTypeData.map(item => item[0]);
const ipv4 = ipTypeData.map(item => item[1]);
const ipv6 = ipTypeData.map(item => item[2]);
const dual = ipTypeData.map(item => item[3]);

const ipTypeOption = {
  title: {
    text: 'IP Type Time Series',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['ipv4', 'ipv6', 'dual-stack'],
  },
  grid: {
    containLabel: false,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ipTypeDateList,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'ipv4',
      type: 'line',
      data: ipv4,
    },
    {
      name: 'ipv6',
      type: 'line',
      data: ipv6,
    },
    {
      name: 'dual-stack',
      type: 'line',
      data: dual,
    },
  ],
};
class BasicGraph extends Component {
  render() {
    return (
      <div className="BasicGraph">
        <div className="group">
          <div className="box">
            <ReactEcharts option={ipOption} theme={'dark'} />
          </div>
          <div className="box">
            <ReactEcharts option={activityOption} theme={'dark'} />
          </div>
          <div className="box">
            <ReactEcharts option={serverOption} theme={'dark'} />
          </div>
        </div>
        <div className="group">
          <div className="box-3">
            <ReactEcharts option={userTimeOption} theme={'dark'} />
          </div>
        </div>
        <div className="group">
          <div className="box-2">
            <ReactEcharts option={loginLogoutOption} theme={'dark'} />
          </div>
          <div className="box-2">
            <ReactEcharts option={ipTypeOption} theme={'dark'} />
          </div>
        </div>
      </div>
    );
  }
}

export default BasicGraph;
