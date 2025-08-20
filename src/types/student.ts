 interface IUserRef {
  _id: string;
  name: string;
}


export interface IStudent {
    _id:string
  userId: IUserRef | null
  rollNumber: string
  classId:  { name: string }
  guardianName: string
  guardianPhone: string
  contactPhone: string
  address: string
  enrollmentYear: Date
  name?:string | undefined
}

export interface TStudent {
  _id: string;
  userId: string;
  rollNumber: string;
  classId: string;
  guardianName: string;
  guardianPhone: string;
  contactPhone: string;
  address: string;
  enrollmentYear: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
