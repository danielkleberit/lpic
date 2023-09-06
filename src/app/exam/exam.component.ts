import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  Questions: any[] = [];
  currentIndex: number = 0;
  answer: any[] = [];
  correctAnswerZahl: number = 0;
  falseAnswerZahl: number = 0;
  filling: string = '';
  arrayfiling: string[] = [];

  constructor(private service: QuizService, private daniel: Router) { }

  ngOnInit(): void {
    this.currentIndex = 0; 
    this.service.getQuestion().subscribe(data => {this.Questions = data;});
  }
  

  benutzerAnswer(antwort: string | string[]): void {
    this.answer[this.currentIndex] = antwort[0];
  }

  multikulti(option: string, event: any): void {
    // let mcaArray = []
    let mcaArray = this.answer[this.currentIndex] || [];

    console.log('am anfang:', this.answer)
    if (this.answer[this.currentIndex] != undefined) {
      mcaArray = this.answer[this.currentIndex]
    } else {
      mcaArray = []
    }

    if (event.target.checked) {
      mcaArray.push(option);
      console.log('nach push:', mcaArray)
    } else {
      const index = mcaArray.indexOf(option);
      if (index >= 0) {
        mcaArray.splice(index, 1);
      }
      console.log('nach remove:', mcaArray)

    }
    mcaArray.sort();
    console.log('nach sort:', this.answer)
    this.answer[this.currentIndex] = mcaArray
  }

  choosemulti(option: string, event: any) {
    if (this.Questions[this.currentIndex].questionType === 'multiple-choice') {
      this.multikulti(option[0], event);
    }
  }

  isCurrentQuestionAnswered(): boolean {
    let currentQuestion = this.Questions[this.currentIndex];
    const userAnswer = this.answer[this.currentIndex];
    console.log('answer:',this.answer)
    console.log('isCurrentQuestionAnswered called :');
   
    if (currentQuestion.questionType===undefined && currentQuestion.questionType === 'fill-in' && this.filling === '') {
      return false;
    }

    if (
      currentQuestion.questionType === 'single-choice' &&
      userAnswer === undefined
    ) {
      return false;
    }

    if (currentQuestion.questionType===undefined && currentQuestion.questionType === 'fill-in' && this.filling === '') {
      return false;
    }

    if (
      currentQuestion.questionType === 'multiple-choice') {
      console.log('isCurrentQuestionAnswered: mc', userAnswer)
      if (userAnswer === undefined || userAnswer.length == 0) {
        return false;
      }
    }

    return true;
  }
  
  onNext(): void {
    const currentQuestion = this.Questions[this.currentIndex];
    const userAnswer = this.answer[this.currentIndex];

    if (currentQuestion.questionType === 'single-choice') {
      if (userAnswer === currentQuestion.correctAnswer && userAnswer !== undefined) {
        this.correctAnswerZahl++;
      } else {
        this.falseAnswerZahl++;
      }
    } else if (currentQuestion.questionType === 'multiple-choice') {
      if (userAnswer && userAnswer.length > 0) {
        const isUserAnswerCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(currentQuestion.correctAnswer.sort());

        if (isUserAnswerCorrect) {
          this.correctAnswerZahl++;
        } else {
          this.falseAnswerZahl++;
        }
      } else {
        this.falseAnswerZahl++; 
      }
    }

    this.currentIndex++;
    console.log(this.currentIndex, this.Questions)

    if (this.falseAnswerZahl > 6) {
      this.daniel.navigateByUrl('/result');
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
    this.currentIndex = 119;
  }

  die20(): void {
    if (this.currentIndex + 19 < this.Questions.length - 1) {

      this.currentIndex += 20;
    }
  }

  diemin20(): void {
    if (this.currentIndex - 19 > 0) {

      this.currentIndex -= 20;
    }
  }

  onBack(): void {
    if (this.currentIndex > 0)
      this.currentIndex--;
  }
  onSkip(): void {
    if (this.currentIndex < this.Questions.length - 1) {
      this.currentIndex++;
    }
  }

}
