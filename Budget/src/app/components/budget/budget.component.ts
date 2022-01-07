import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor(private fb : FormBuilder) {
    this.budgetForm = this.fb.group({
      'budgetAmount' : ''
    });

    this.articleForm = this.fb.group({
      'articleExpense' : '',
      'articleAmount' : '',
    })

    this.budgetForm.valueChanges.subscribe( (form) => {
      if (!isNaN(parseFloat(form.budgetAmount))) {
        this.sendBudgetAmount(parseFloat(form.budgetAmount));
      }
    });
  }

  ngOnInit(): void {
  }

  budgetForm : FormGroup = new FormGroup({});
  articleForm : FormGroup = new FormGroup({});

  @Output() budgetAmount : EventEmitter<number> = new EventEmitter();
  @Output() article : EventEmitter<any> = new EventEmitter();

  sendBudgetAmount(budgetAmount : number) {
    this.budgetAmount.emit(budgetAmount);
  }

  sendArticle() {
    if (!isNaN(parseFloat(this.articleForm.controls['articleExpense'].value)) && !isNaN(parseFloat(this.articleForm.controls['articleAmount'].value))) {
      this.article.emit({'expense' : parseFloat(this.articleForm.controls['articleExpense'].value),
                        'amount' : parseInt(this.articleForm.controls['articleAmount'].value)});
    }
  }
}
