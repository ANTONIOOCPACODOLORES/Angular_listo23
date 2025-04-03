import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  imports: [],
  template: `
    <table mat-table dataSource="dataSource" class="mat-elevation-z8">
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef> ID </th>
    <td mat-cell *matCellDef="let element"> {{element.id}} </td>
  </ng-container>

  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <ng-container matColumnDef="sport">
    <th mat-header-cell *matHeaderCellDef> Sport </th>
    <td mat-cell *matCellDef="let element"> {{element.sport}} </td>
  </ng-container>

  <ng-container matColumnDef="country">
    <th mat-header-cell *matHeaderCellDef> Country </th>
    <td mat-cell *matCellDef="let element"> {{element.country}} </td>
  </ng-container>

  <ng-container matColumnDef="medal">
    <th mat-header-cell *matHeaderCellDef> Medal </th>
    <td mat-cell *matCellDef="let element"> {{element.medal}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

  `,
  styleUrl: './tables.component.css',
})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'sport', 'country', 'medal'];
  dataSource = new MatTableDataSource<any>([]);
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('../../assets/data.json').subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
