import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import attendance from '../../../assests/attendance.json';

@Component({
  selector: 'app-attendance',
  imports: [BaseChartDirective],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {
  week = attendance.August.week4;

  data: ChartData<'bar'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Present',
        data: Object.values(this.week).map((day) => day.present),
        backgroundColor: '#20B981',
        barThickness: 6,
      },
      {
        label: 'Absent',
        data: Object.values(this.week).map((day) => day.absent),
        backgroundColor: '#EF476F',
        barThickness: 6,
      },
    ],
  };

  options: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 6,
          boxHeight: 6,
          padding: 5,
          font: {
            size: 7,
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        max: 120,
      },
    },
  };
}
