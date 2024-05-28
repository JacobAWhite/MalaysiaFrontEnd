import React from 'react';

function CourseToolsPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="course-tools-page">
            <h1>Course Tools for {selectedCourse.title}</h1>
            <p>{selectedCourse.tools}</p>
        </div>
    );
}

export default CourseToolsPage;
