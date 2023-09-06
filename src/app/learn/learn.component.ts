import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {

  Questions:any []=[];
  currentIndex:number=0;
  answer:string[]=[];

  constructor(private service: QuizService){};


selectedQuestionIndex: number | null=null;

ngOnInit():void{
  this.service.getQuestion().subscribe(data=> {this.Questions=data})
}

toggleAnswerVisibility(index: number) {
  this.Questions[index].showAnswer = !this.Questions[index].showAnswer;
}


onBack(): void {
  if (this.currentIndex > 0)
    this.currentIndex--;
}

onNext(): void {
  if (this.currentIndex < this.Questions.length - 1) {
    this.currentIndex++;

  }
}

}

