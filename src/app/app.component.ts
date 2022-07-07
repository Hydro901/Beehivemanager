import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beehive } from './beehive';
import { BeehiveService } from './beehive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public beehives: Beehive[] = [];
  /* public editBeehive!: Beehive | null;
  public deleteBeehive!: Beehive | null; */

  constructor(private beehiveService: BeehiveService) { }

  ngOnInit() {
    this.getBeehives();
  }

  public getBeehives(): void {
    this.beehiveService.getBeehives().subscribe(
      (response: Beehive[]) => {
        this.beehives = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  /*  public onAddBeehive(addForm: NgForm): void{
     document.getElementById('add-beehive-form')?.click();  
     this.beehiveService.addBeehive(addForm.value).subscribe(
       (response: Beehive) => {
         console.log(response);
         this.getBeehives();
         addForm.reset();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       }
     );
   }
 
   public onUpdateBeehive(beehive: Beehive): void{
     this.beehiveService.updateBeehive(beehive).subscribe(
       (response: Beehive) => {
         console.log(response);
         this.getBeehives();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }
 
   public onDeletBeehive(beehiveId: number): void{
     this.beehiveService.deleteBeehive(beehiveId).subscribe(
       (response: void) => {
         console.log(response);
         this.getBeehives();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   } */



  public searchBeehives(key: string): void {
    console.log(key);
    const results: Beehive[] = [];
    for (const beehive of this.beehives) {
      if (beehive.model != null && beehive.colony != null) {
        if (beehive.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || beehive.colony.toLowerCase().indexOf(key.toLowerCase()) !== -1

        ) {
          results.push(beehive);
        }
      }
    }
    this.beehives = results;
    if (results.length === 0 || !key) {
      this.getBeehives();
    }
  }


  public onOpenModal(beehive: Beehive | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addBeehiveModal');
    }
    /*  if (mode === 'edit'){
       this.editBeehive = beehive;
       button.setAttribute('data-target', '#updateBeehiveModal');
     }
     if (mode === 'delete'){
       this.deleteBeehive = beehive;
       button.setAttribute('data-target', '#deleteBeehiveModal');
     } */
    container?.appendChild(button);
    button.click();
  }


}
