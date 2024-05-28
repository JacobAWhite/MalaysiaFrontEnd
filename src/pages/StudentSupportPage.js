import React from 'react';

function StudentSupportPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="student-support-page">
            <h1>Student Support for {selectedCourse.title}</h1>
            <p>{selectedCourse.support}</p>
        </div>
    );
}

export default StudentSupportPage;
