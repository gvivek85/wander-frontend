import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { DashboardService } from '../modules/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Chart } from 'chart.js';
//import { color, Color } from 'highcharts';
import { MatSort } from '@angular/material/sort';

export class CountryData {
  Country: string;
  TotalConfirmed: string;
  TotalDeaths: string;
  TotalRecovered: string;
  //Date: string;

  constructor() {

  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //LineChart
  lineChart1 = [];
  lineChart2 = [];
  lineChart3 = [];
  lineChart4 = [];

  pieChart = [];
  pieData = [];
  pieLabels = [];

  cardData1: string;
  cardData2: string;
  cardData3: string;


  //Table Data
  displayedColumns: string[] = ['Country', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered'];
  dataSource: MatTableDataSource<CountryData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dashboardService: DashboardService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    //Card Data
    this.dashboardService.getCardData().subscribe(
      res => {
        console.log('Global data is ' + res);
        this.cardData1 = res.TotalConfirmed;
        this.cardData2 = res.TotalDeaths;
        this.cardData3 = res.TotalRecovered;
      });
    //Table Data - Start
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dashboardService.getCountryData().subscribe(
      data => {
        this.dataSource.data = data;
      });
    //Table Data - End

    //Line Chart 1 - Start
    this.dashboardService.linChart1().subscribe(
      res => {
        let dataSet1 = res.map(res => res.Confirmed);
        let dataSet2 = res.map(res => res.Date);

        let caseDates = []
        dataSet2.forEach((res) => {
          let jsdate = new Date(res);
          caseDates.push(jsdate.toLocaleDateString('en', { month: 'short', day: 'numeric' }))
        })

        this.lineChart1 = new Chart('lineChart', {
          type: 'line',
          data: {
            labels: caseDates,
            datasets: [
              {
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: '#3cba9f',
                borderColor: '#ffcc00',
                borderWidth: 1,
                data: dataSet1,
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'United States Confirmed Cases'
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'Day',
                  display: true
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'No in Thousands',
                  display: true
                }
              }]
            }
          }
        })
      });
    //Line Chart 1 - End

    //Line Chart 2 - Start
    this.dashboardService.linChart2().subscribe(
      res => {
        let dataSet1 = res.map(res => res.Confirmed);
        let dataSet2 = res.map(res => res.Date);

        let caseDates = []
        dataSet2.forEach((res) => {
          let jsdate = new Date(res);
          caseDates.push(jsdate.toLocaleDateString('en', { month: 'short', day: 'numeric' }))
        })
        this.lineChart2 = new Chart('lineChart2', {
          type: 'line',
          data: {
            labels: caseDates,
            datasets: [
              {
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: '#3cba9f',
                borderColor: '#ffcc00',
                borderWidth: 1,
                data: dataSet1,
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Brazil Confirmed Cases'
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'Day',
                  display: true
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'No in Thousands',
                  display: true
                }
              }]
            }
          },
          title: {
            display: true,
            text: 'India Confirmed Cases'
          }
        })
      });
    //Line Chart 2 - End

    //Line Chart 3 - Start
    this.dashboardService.linChart3().subscribe(
      res => {
        let dataSet1 = res.map(res => res.Confirmed);
        let dataSet2 = res.map(res => res.Date);

        let caseDates = []
        dataSet2.forEach((res) => {
          let jsdate = new Date(res);
          caseDates.push(jsdate.toLocaleDateString('en', { month: 'short', day: 'numeric' }))
        })

        this.lineChart3 = new Chart('lineChart3', {
          type: 'line',
          data: {
            labels: caseDates,
            datasets: [
              {
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: '#3cba9f',
                borderColor: '#ffcc00',
                borderWidth: 1,
                data: dataSet1,
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Russia Confirmed Cases'
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'Day',
                  display: true
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'No in Thousands',
                  display: true
                }
              }]
            }
          },
          title: {
            display: true,
            text: 'India Confirmed Cases'
          }
        })
      });
    //Line Chart 3 - End

    //Line Chart 4 - Start
    this.dashboardService.linChart4().subscribe(
      res => {
        let dataSet1 = res.map(res => res.Confirmed);
        let dataSet2 = res.map(res => res.Date);

        let caseDates = []
        dataSet2.forEach((res) => {
          let jsdate = new Date(res);
          caseDates.push(jsdate.toLocaleDateString('en', { month: 'short', day: 'numeric' }))
        })

        this.lineChart4 = new Chart('lineChart4', {
          type: 'line',
          data: {
            labels: caseDates,
            datasets: [
              {
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: '#3cba9f',
                borderColor: '#ffcc00',
                borderWidth: 1,
                data: dataSet1,
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'India Confirmed Cases'
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'Day',
                  display: true
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  labelString: 'No in Thousands',
                  display: true
                }
              }]
            }
          },
          title: {
            display: true,
            text: 'India Confirmed Cases'
          }
        })
      });
    //Line Chart 4 - End

    //Pie Chart - Start
    
    this.pieChart = new Chart('pieChart', {
			type: 'pie',
			data: {
				datasets: [{
					data: [1,5,40,32],
					backgroundColor: ['#C0392B','#F39C12','#F4D03F','#27AE60'],
					label: 'Dataset 1'
				}],
				labels: ['Red',	'Orange',	'Yellow', 'Green']
			},
			options: {
				responsive: true
      }, 
      title: {
        display: true,
        text: 'India Confirmed Cases'
      }
		});
    //Pie Chart - End

  }
 
  
}
