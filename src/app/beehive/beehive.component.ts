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

  public getBeehives(): void{
    this.beehiveService.getBeehives().subscribe(
      (response: Beehive[]) => {
        this.beehives = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onAddBeehive(addForm: NgForm): void{
    document.getElementById('add-beehive-form')?.click();  /* chiude */
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
  }



  public onOpenModal(beehive:Beehive|null, mode: string): void{
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none'; /* per non mostrare il button da nessuna parte */
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-target', '#addBeehiveModal');
    }
    if (mode === 'edit'){
      this.editBeehive = this.arniaTest;
      console.log(this.editBeehive)
      button.setAttribute('data-target', '#updateBeehiveModal');
    }
    if (mode === 'delete'){
      this.deleteBeehive = this.arniaTest;
      button.setAttribute('data-target', '#deleteBeehiveModal');
    }
    /* if (mode === 'add'){
      button.setAttribute('data-target', 'addBeehiveModal');
    } */
    container?.appendChild(button);
    button.click();
  }


}
