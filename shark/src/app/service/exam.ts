import { Section } from './section';

export class Exam {

    instructions: any;

    remainingTime: number;

    sectionList: any;

    constructor(examConfig) {
        this.instructions = examConfig.instructions

        this.remainingTime = examConfig.remainingTime;

        let section = new Section();
        this.sectionList = section.getSectionList(examConfig.sectionList);
    }

    get(examId: number){

    }

    parse(exam){

    }


}