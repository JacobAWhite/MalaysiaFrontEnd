import React, { useState } from 'react';

function AssignmentForm({ assignmentName }) {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [studentID, setStudentID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log(`Submitted for ${assignmentName}`);
        console.log('File:', file);
        console.log('Description:', description);
        console.log('Student ID:', studentID);
    };

    return (
        <form onSubmit={handleSubmit} className="assignment-form">
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Optional description"
            />
            <input
                type="text"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="Student ID"
                required
            />
            <button type="submit">Submit Assignment</button>
        </form>
    );
}

export default AssignmentForm;
