import { Course } from "../../courses/models/course.model";

export interface Inscription {
    id: string;
    userId:string;
    course?: Course[]
  }
  