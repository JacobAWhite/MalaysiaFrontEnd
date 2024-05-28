import React from 'react';

function ZoomPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="zoom-page">
            <h1>Lecture information {selectedCourse.title}</h1>
            <p>{selectedCourse.zoom}</p>
        </div>
    );
}

export default ZoomPage;
