import { Component } from '@angular/core';

enum MENU{USERS,BOOKS,BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu=MENU;
  actualMenu: MENU= MENU.USERS;

  user={userId:"",userName:"",contact:""}
  book={bookId:"",bookName:"",author:"",available:""}
  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}
  users:any=[];
  books:any=[];
  borrowings:any=[];


 public pridaj(): void {
   if (this.actualMenu == this.menu.USERS) {
     this.users.push({userId: this.user.userId, userName: this.user.userName, contact: this.user.contact});
   }else if(this.actualMenu == this.menu.BOOKS){
     this.books.push({bookId: this.book.bookId,bookName: this.book.bookName,author:this.book.author,available:this.book.available})
   }else
     this.borrowings.push({borrowingId:this.borrowing.borrowingId,borrowingBook:this.borrowing.borrowingBook,borrowingUser: this.borrowing.borrowingUser});
   }

public openMenu(m:MENU){
  this.actualMenu=m;
}

}
