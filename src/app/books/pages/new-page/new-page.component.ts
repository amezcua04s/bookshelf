import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

import { __values } from "tslib";
import { filter, switchMap, tap } from "rxjs";

import { BookInterface, Theme } from "../../interfaces/book-interface";
import { BooksService } from "../../services/books.service";
import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  public themes = Object.values(Theme);

  owned  = true;
  readed = false;

  public bookForm = new FormGroup({
    id:       new FormControl<string>(''),
    title:    new FormControl('',{ nonNullable : true }),
    theme:    new FormControl<Theme>( Theme.notSpecified ),
    author:   new FormControl('', {nonNullable:true}),
    release:  new FormControl(''),
    owned:    new FormControl(this.owned),
    readed:   new FormControl(this.readed),
    img:      new FormControl(''),
});

  constructor(
    private bookService    : BooksService,
    private activatedRoute : ActivatedRoute,
    private router         : Router,
    private snackBar       : MatSnackBar,
    private dialog         : MatDialog,
  ){}

    get newBook () : BookInterface{
      const newBook = this.bookForm.value as BookInterface;
      return newBook;
    }

  toggleBool( check : Boolean) : Boolean {
    return !check
  }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.bookService.getBookById( id ) ),
      ).subscribe ( book => {
        if(!book) return this.router.navigateByUrl('/');

        this.bookForm.reset( book)
        return;
      })

  }


  onSumbit () :void {
    if (this.bookForm.invalid) return;

    if(this.newBook.id) {
      this.bookService.updateBook(this.newBook)
        .subscribe ( newBook => {
          this.showSnackbar(`${newBook.title} actualizado!`)
        });
        return;
    }

    this.bookService.addBook (this.newBook)
      .subscribe( book =>{
        this.router.navigate(['/books/edit', book.id])
        this.showSnackbar(`Se ha registrado: "${book.title}" exitosamente!`)
      });

  }

  onDeleteBook(){
    if (!this.newBook.id) throw Error('El libro no existe');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.bookForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( result => result ), //filter that allows the flow only if result is true
        switchMap( () =>  this.bookService.deleteBookByName( this.newBook.id )),
        filter( ifDeleted => ifDeleted ) //filter that allows the flow only if ifDeleted is true
      )
      .subscribe(result => {
        if(result){ this.router.navigate(['books/list'])}
      })

  }

  showSnackbar ( message : string )  : void {
    this.snackBar.open( message, 'OK', {
      duration : 200,
    })
  }

}
