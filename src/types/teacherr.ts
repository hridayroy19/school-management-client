
export interface IUser {
  _id: string;
  name: string;
}

export interface ITeacher {
    userId: IUser
    employeeId: string
    subjects: string[]
    assignedClasses: []
    contactPhone: string
    address: string
    joinDate: Date
    _id:string
}
