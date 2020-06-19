import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../modules/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
//import { color, Color } from 'highcharts';
import { MatSort } from '@angular/material/sort';
import { User } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //Table Data
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'roles'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    //Table Data - Start
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dashboardService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      });
    //Table Data - End
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
