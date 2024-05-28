import React from 'react';

function GradesPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="grades-page">
            <h1>Grades for {selectedCourse.title}</h1>
            <p>{selectedCourse.grades}</p>
        </div>
    );
}

export default GradesPage;
