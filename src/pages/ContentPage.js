import React from 'react';

function ContentPage({ selectedCourse }) {
    if (!selectedCourse) {
        return <h2>Please select a course first.</h2>;
    }

    return (
        <div className="content-page">
            <h1>Content for {selectedCourse.title}</h1>
            <p>{selectedCourse.content}</p>
        </div>
    );
}

export default ContentPage;
