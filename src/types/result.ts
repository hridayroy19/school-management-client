export interface IResult {
    studentId: string
    classId: string
    subjectId: string
    term: 'Midterm' | 'Final'
    marksObtained: number
    maxMarks: number
    grade: string
    gradePoint: number
    createdBy: string
    _id:string
}



export interface ResultStudent {
  _id: string;
  term: string;
  classId: { name: string };
  subjectId: { name: string };
  grade: string;
  marksObtained: number;
  gradePoint: number;
}
