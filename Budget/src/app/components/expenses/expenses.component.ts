import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.article.expense != undefined) {
      for (let i = 0; i < this.article.amount; i++) {
        this.allArticles.push(this.article);    
      }

      this.sumAllExpenses();
    }
  }

  allArticles : any[] = [];

  @Output() allExpenses : EventEmitter<number> = new EventEmitter();
  @Input() article : any = undefined;

  deleteArticle(position : number) {
    this.allArticles.splice(position, 1);
    this.sumAllExpenses();
  }

  sumAllExpenses() {
    let sumExpenses = 0;

    for (let i = 0; i < this.allArticles.length; i++) {
      sumExpenses += this.allArticles[0].expense;
    }

    this.allExpenses.emit(sumExpenses);
  }
}
