import React from 'react';

function AssessmentsPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="assessments-page">
            <h1>Assessments for {selectedCourse.title}</h1>
            <p>{selectedCourse.assessments}</p>
        </div>
    );
}

export default AssessmentsPage;
