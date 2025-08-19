
import {
    Bell,
    Book,
    BookMarked,
    BookOpen,
    FileText,
    GraduationCap,
    House,
    Pen,
    SquareTerminal,
    User,
    UserRound,
} from "lucide-react";
import { NavItem } from "./nav-menu";


export const data: { navMain: NavItem[] } = {
    navMain: [
        // Admin
        {
            id: "dashboard-admin",
            title: "Dashboard",
            url: "/dashboard/admin",
            icon: SquareTerminal,
            isActive: true,
            roles: ["ADMIN"],
        },
        {
            id: "user",
            title: "User",
            url: "/dashboard/admin/user",
            icon: User,
            roles: ["ADMIN"],
        },
        {
            id: "class",
            title: "Class",
            url: "/dashboard/admin/class",
            icon: House,
            roles: ["ADMIN"],
        },
        {
            id: "subject",
            title: "Subject",
            url: "/dashboard/admin/subject",
            icon: Book,
            roles: ["ADMIN"],
        },
        {
            id: "student",
            title: "Student",
            url: "/dashboard/admin/student",
            icon: GraduationCap,
            roles: ["ADMIN"],
        },
        {
            id: "teacher",
            title: "Teacher",
            url: "/dashboard/admin/teacher",
            icon: UserRound,
            roles: ["ADMIN"],
        },
        {
            id: "create-result-admin",
            title: "Create-Result",
            url: "/dashboard/admin/result",
            icon: Pen,
            roles: ["ADMIN"],
        },

        // Teacher
        {
            id: "dashboard-teacher",
            title: "Dashboard",
            url: "/dashboard/teacher",
            icon: SquareTerminal,
            roles: ["TEACHER"],
        },
        {
            id: "myClasses",
            title: "My Classes",
            url: "/dashboard/teacher/myClasses",
            icon: BookOpen,
            roles: ["TEACHER"],
        },
        {
            id: "result",
            title: "Result Entry",
            url: "/dashboard/teacher/result",
            icon: FileText,
            roles: ["TEACHER"],
        },
        {
            id: "subject-management",
            title: "Subject Management",
            url: "/dashboard/teacher/subject",
            icon: BookMarked,
            roles: ["TEACHER"],
        },
        {
            id: "notifications",
            title: "Notifications",
            url: "/dashboard/teacher/notifications",
            icon: Bell,
            roles: ["TEACHER"],
        },


        // Student
        {
            id: "dashboard-student",
            title: "Dashboard",
            url: "/dashboard/student",
            icon: SquareTerminal,
            isActive: true,
            roles: ["STUDENT"],
        },
    ],
};
