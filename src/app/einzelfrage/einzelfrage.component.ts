import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-einzelfrage',
  templateUrl: './einzelfrage.component.html',
  styleUrls: ['./einzelfrage.component.css']
})
export class EinzelfrageComponent {
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

  onSkipBack(): void {
    if (this.currentIndex > 0) {
    this.currentIndex--;
    }
  }

  dieErste(): void {
    this.currentIndex = 0;
  }

  dieLEtzte(): void {
    if (this.currentIndex < this.Questions.length - 1) {

      this.currentIndex = 119;
    }
  }

  die20(): void {
    if (this.currentIndex + 19 < this.Questions.length - 1){

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
    if (this.currentIndex < this.Questions.length - 1) {
      this.currentIndex++;}
  }

  ngOnInit(): void {
    this.service.getQuestion().subscribe(data => { this.Questions = data })
  }

  showAnswerForQuestion(index: number) {
    this.Questions[index].showAnswer = true;
  }
    
}

