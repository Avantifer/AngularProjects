import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budget';

  article : any = {};
  budgetAmount : number = 0;
  expenses = 0;
  balance : number = 0;

  getBudgetAmount(budgetAmount : number) {
    this.budgetAmount = budgetAmount;
    this.calculateBalance();
  }

  getArticle(article : any) {
    this.article = article;
  }

  getExpenses(expenses : number) {
    this.expenses = expenses;
    this.calculateBalance();
  }

  calculateBalance() {
    this.balance = this.budgetAmount - this.expenses;

    let resultBalance = document.querySelector('.balance');

    if (this.balance < 0) {
      resultBalance!.classList.remove('positive');
      resultBalance!.classList.add('negative');
    }else {
      resultBalance!.classList.remove('negative');
      resultBalance!.classList.add('positive');
    }
  }
}
