import React, { useState, useRef } from 'react';
import axios from 'axios';

function AssignmentForm({ assignmentId, assignmentName }) {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [studentID, setStudentID] = useState('');
    const fileInputRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (file && file.type !== "application/pdf") {
            alert("Only PDF files are allowed.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('description', description);
        formData.append('studentID', studentID);
        formData.append('assignmentName', assignmentName);
        formData.append('assignmentId', assignmentId);

        try {
            await axios.post('http://localhost:4001/submittedAssignments', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Assignment submitted successfully!");
            // Clear the form
            setFile(null);
            setDescription('');
            setStudentID('');
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error("Error submitting assignment:", error);
            alert("There was an error submitting your assignment. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="assignment-form">
            <label htmlFor="file-upload">Upload your assignment (PDF only):</label>
            <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                required
                ref={fileInputRef}
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
