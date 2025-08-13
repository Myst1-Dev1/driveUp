'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function SalesGraph() {
  const [series] = useState([
    {
      name: 'Vendas',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ]);

  const [options]:any = useState({
    chart: {
      height: 350,
      type: 'line',
      toolbar: { show: false },
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2000-11-01',
        '2000-11-02',
        '2000-11-03',
        '2000-11-04',
        '2000-11-05',
        '2000-11-06',
        '2000-11-07',
        '2000-11-08',
        '2000-11-09',
        '2000-11-10',
        '2000-11-11',
        '2000-11-12',
        '2001-11-01',
        '2001-11-02',
        '2001-11-03',
        '2001-11-04',
        '2001-11-05',
        '2001-11-06',
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value: any, timestamp: number, opts: any) {
          return opts.dateFormatter(new Date(timestamp), 'dd MMM');
        },
      },
    },
    title: {
      text: 'Vendas Mensáis',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#808080',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    colors: ['#4F46E5'],
  });

  return (
    <div className="w-full mt-10">
      {/* <h2 className="font-bold text-xl mb-4">Gráfico de Vendas</h2> */}
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
