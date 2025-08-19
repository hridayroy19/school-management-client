// app/student/page.tsx
import DashboardManegement from '@/components/modules/student/studentProfile';
import { getCurrentUser } from '@/services/AuthService';
import { getResultById } from '@/services/result';
import React from 'react';

const page = async () => {
    const user = await getCurrentUser(); 
    const resultsResponse = await getResultById({ id: user.id });
    
    const results = resultsResponse?.data?.results || [];
    const student = resultsResponse?.data?.student;

    return (
        <div>
            <DashboardManegement results={results} student={student} user={user} />
        </div>
    );
};

export default page;
