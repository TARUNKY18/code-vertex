import React, { useState } from 'react';
import CourseModal from './CourseModal';

function AddCourseSection2({ formData, handleFormDataChange }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lessons, setLessons] = useState([]);
    const [editing, setEditing] = useState({ lessonId: null, lectureIndex: null });
    const [newTitle, setNewTitle] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentLessonId, setCurrentLessonId] = useState(null);

    const openModal = (lessonId = null) => {
        setIsEditing(lessonId !== null);
        setCurrentLessonId(lessonId);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const addLecture = (lessonId, lectureDetails) => {
        setLessons(lessons.map(lesson =>
            lesson.id === lessonId
                ? { ...lesson, lectures: [...lesson.lectures, lectureDetails] }
                : lesson
        ));
    };

    const addSection = () => {
        openModal();
    };

    const handleSaveSection = (newLessonTitle, lectureDetails) => {
        if (isEditing) {
            setLessons(lessons.map(lesson =>
                lesson.id === currentLessonId
                    ? { ...lesson, title: newLessonTitle }
                    : lesson
            ));
            if (lectureDetails) {
                addLecture(currentLessonId, lectureDetails);
            }
        } else {
            const newLessonId = lessons.length + 1;
            setLessons([...lessons, { id: newLessonId, title: newLessonTitle, lectures: [] }]);
        }
        closeModal();
    };

    const deleteLesson = (lessonId) => {
        setLessons(lessons.filter(lesson => lesson.id !== lessonId));
    };

    const deleteLecture = (lessonId, lectureIndex) => {
        setLessons(lessons.map(lesson =>
            lesson.id === lessonId
                ? { ...lesson, lectures: lesson.lectures.filter((_, index) => index !== lectureIndex) }
                : lesson
        ));
    };

    const startEditing = (lessonId, lectureIndex = null) => {
        setEditing({ lessonId, lectureIndex });
        if (lectureIndex !== null) {
            setNewTitle(lessons.find(lesson => lesson.id === lessonId).lectures[lectureIndex].lectureTitle);
        } else {
            setNewTitle(lessons.find(lesson => lesson.id === lessonId).title);
        }
    };

    const saveEdit = () => {
        if (editing.lectureIndex !== null) {
            setLessons(lessons.map(lesson =>
                lesson.id === editing.lessonId
                    ? {
                          ...lesson,
                          lectures: lesson.lectures.map((lecture, index) =>
                              index === editing.lectureIndex ? { ...lecture, lectureTitle: newTitle } : lecture
                          ),
                      }
                    : lesson
            ));
        } else {
            setLessons(lessons.map(lesson =>
                lesson.id === editing.lessonId
                    ? { ...lesson, title: newTitle }
                    : lesson
            ));
        }
        setEditing({ lessonId: null, lectureIndex: null });
        setNewTitle('');
    };

    return (
        <>
            <main className='w-11/12 lg:w-10/12 p-8 mx-auto h-screen'>
                <CourseModal
                    formData={formData}
                    handleFormDataChange={handleFormDataChange}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSave={handleSaveSection}
                />
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-3">Course Builder</h2>
                        {lessons.map((lesson, lessonIndex) => (
                            <div key={lesson.id} className="mb-2">
                                <div className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                                    {editing.lessonId === lesson.id && editing.lectureIndex === null ? (
                                        <input
                                            type="text"
                                            value={newTitle}
                                            onChange={(e) => setNewTitle(e.target.value)}
                                            className="w-full p-2 text-black rounded"
                                        />
                                    ) : (
                                        <span>{lesson.title}</span>
                                    )}
                                    <div className="flex items-center space-x-2">
                                        {editing.lessonId === lesson.id && editing.lectureIndex === null ? (
                                            <button onClick={saveEdit} className="text-green-500 hover:text-green-700">✔️</button>
                                        ) : (
                                            <button onClick={() => startEditing(lesson.id)} className="text-gray-300 hover:text-white">✏️</button>
                                        )}
                                        <button onClick={() => deleteLesson(lesson.id)} className="text-red-500 hover:text-red-700">🗑️</button>
                                    </div>
                                </div>
                                {lesson.lectures.map((lecture, lectureIndex) => (
                                    <div key={lectureIndex} className="ml-5 mt-2 bg-gray-600 p-2 rounded-lg flex justify-between items-center">
                                        {editing.lessonId === lesson.id && editing.lectureIndex === lectureIndex ? (
                                            <input
                                                type="text"
                                                value={newTitle}
                                                onChange={(e) => setNewTitle(e.target.value)}
                                                className="w-full p-2 text-black rounded"
                                            />
                                        ) : (
                                            <span>{lecture.lectureTitle}</span>
                                        )}
                                        <div className="flex items-center space-x-2">
                                            {editing.lessonId === lesson.id && editing.lectureIndex === lectureIndex ? (
                                                <button onClick={saveEdit} className="text-green-500 hover:text-green-700">✔️</button>
                                            ) : (
                                                <button onClick={() => startEditing(lesson.id, lectureIndex)} className="text-gray-300 hover:text-white">✏️</button>
                                            )}
                                            <button onClick={() => deleteLecture(lesson.id, lectureIndex)} className="text-red-500 hover:text-red-700">🗑️</button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={() => openModal(lesson.id)}
                                    className="ml-5 mt-2 text-yellow-500 hover:text-yellow-700"
                                >
                                    + Add Lecture
                                </button>
                            </div>
                        ))}
                        <div className="mt-5">
                            <button
                                onClick={addSection}
                                className="bg-yellow-500 p-2 rounded-lg w-full"
                            >
                                Create Section
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AddCourseSection2;
