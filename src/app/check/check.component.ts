import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  Questions: any[] = [];
  currentIndex: number = 0;
  answer: string[] = [];

  constructor(private service: QuizService) { };


  selectedQuestionIndex: number | null = null;

  onNext(): void {
    if (this.currentIndex < this.Questions.length - 1) {
      this.currentIndex++;

    }
  }


  dieLEtzte(): void {
    if (this.currentIndex < this.Questions.length - 1) {

      this.currentIndex = 119;
    }
  }

  die20(): void {
    if (this.currentIndex+20 < this.Questions.length - 1){

      this.currentIndex += 20;
    }
  }

  diemin20(): void {
    if(this.currentIndex-19>0){

      this.currentIndex -= 20;
    }
  }


  onBack(): void {
    if (this.currentIndex > 0)
      this.currentIndex--;
  }
  onSkip(): void {
    this.currentIndex++;
  }

  ngOnInit(): void {
    this.service.getQuestion().subscribe(data => { this.Questions = data })
  }

  toggleAnswerVisibility(index: number) {
    this.Questions[index].showAnswer = !this.Questions[index].showAnswer;
  }

}
