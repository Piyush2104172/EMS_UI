import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  imports: [BaseChartDirective],
  selector: 'app-employee-distribution',
  styleUrl: './employee-distribution.css',
  templateUrl: './employee-distribution.html',
})
export class EmployeeDistribution {
  departments = [
    { name: 'IT', percentage: 32, color: '#2196F3' },
    { name: 'HR', percentage: 18, color: '#20B981' },
    { name: 'Finance', percentage: 16, color: '#FF9F43' },
    { name: 'Marketing', percentage: 14, color: '#8B5CF6' },
    { name: 'Operations', percentage: 12, color: '#EF476F' },
    { name: 'Others', percentage: 8, color: '#94A3B8' },
  ];

  totalEmployees = 125;

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.departments.map((d) => d.name),

    datasets: [
      {
        data: this.departments.map((d) => d.percentage),
        backgroundColor: this.departments.map((d) => d.color),
        borderWidth: 0,
      },
    ],
  };
  doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '58%',

    plugins: {
      legend: {
        display: false,
      },

      datalabels: {
        color: '#ffffff',
        font: {
          size: 9,
          weight: 'bold',
        },

        formatter: (value) => {
          return value + '%';
        },
      },
    },
  };

  chartPlugins = [ChartDataLabels];
}
