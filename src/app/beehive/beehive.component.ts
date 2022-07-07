import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beehive } from '../beehive';
import { BeehiveService } from '../beehive.service';

@Component({
  selector: 'app-beehive',
  templateUrl: './beehive.component.html',
  styleUrls: ['./beehive.component.css']
})
export class BeehiveComponent implements OnInit {
  public beehives: Beehive[] = [];
  /* public beehive?: Beehive; */
  public editBeehive!: Beehive|null;
  public deleteBeehive!: Beehive|null;


@Input() arniaTest!: Beehive



  constructor(private beehiveService: BeehiveService) { }

  ngOnInit(): void {
  }

 


}
