export interface QuestionStatus {
   
  }

export class Question {
    visited:boolean;
    answered:boolean;
    markForReview:boolean;
    number: number;
    statement:any;
    options: any;
    answerSelected: any;
    constructor() {
        this.visited = false;
        this.answered =  false;
        this.markForReview = false;
    }

    select(question){

    }

    getQuestionList(raw_list){
        let list = [];
        let question = new Question();
        for (const section of raw_list) {
            let question = new Question();
            list.push(question);
            
        }
        return list;
    }

    get(questionId: number){

    }

    parse(question){

    }

    
}