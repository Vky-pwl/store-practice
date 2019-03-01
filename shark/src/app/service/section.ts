import { listener } from '@angular/core/src/render3';
import { Question } from './question';

export class Section {

    remainingTime: number;

    questionList: any = [] ;

    constructor() {

    }

    select(section){

    }

    get(sectionId: number){

    }

    parse(section){

    }

    getNotAnswered(){
        return this.questionList.filter((q)=> {
            return !q.answered
        }).length;
    }
    getAnswered(){
        return this.questionList.filter((q)=> {
            return q.answered
        }).length;
    }
    getNotVisited(){
        return this.questionList.filter((q)=> {
            return !q.visited
        }).length;
    }
    getMarkedForReview(){
        return this.questionList.filter((q)=> {
            return q.markedForReview
        }).length;
    }
    getAnsweredAndMarkedForReview(){
        return this.questionList.filter((q)=> {
            return q.markedForReview && q.answered
        }).length;
    }


    getSectionList(raw_list){
        let list = [];
        let question = new Question();
        for (const section of raw_list) {
            let section = new Section();
            section.questionList = question.getQuestionList(section);
        }
        return list;
    }

    
}