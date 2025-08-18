
export interface IUserData {
  _id: string;
  name: string;
}

export interface ITeacher {
    _id: string
  userId:IUserData
  employeeId: string
  subjects: string[]
  assignedClasses: []
  contactPhone: string
  address: string
  joinDate: Date

}
