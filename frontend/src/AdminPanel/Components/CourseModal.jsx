import React, { useState } from 'react';

function CourseModal({ isOpen, onClose, onSave }) {
    if (!isOpen) return null;

    const [lectureDetails, setLectureDetails] = useState({
        lectureTitle: '',
        lectureDescription: '',
        lecturePlayTimeH: '',
        lecturePlayTimeM: '',
        lecturePlayTimeS: '',
        lectureVideo: null
    });

    const handleChange = (field, value) => {
        setLectureDetails(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleFileChange = (e) => {
        setLectureDetails(prevState => ({
            ...prevState,
            lectureVideo: e.target.files[0]
        }));
    };

    const handleSave = () => {
        onSave(lectureDetails);
        onClose();
    };

    return (
        <form className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 w-[40%] rounded-lg p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-white text-lg font-semibold mb-4">Editing Lecture</h2>

                {/* Lecture Video */}
                <div className="mb-4">
                    <label htmlFor="lectureVideo" className='block mb-2'>
                        Lecture Video <span className='text-red-600'>*</span>
                    </label>
                    <div className="text-center bg-gray-700 p-8 rounded-md border border-dashed border-gray-500">
                        <div className="p-5">
                            <span className='text-2xl'>🗃️</span>
                        </div>
                        <label htmlFor="lectureVideo" className="cursor-pointer">
                            <input
                                type="file"
                                id="lectureVideo"
                                name="lectureVideo"
                                accept="video/*"
                                onChange={handleFileChange}
                                className="hidden"
                                required
                            />
                            <span className="text-blue-300">Drag and Drop a Video or </span>
                            <span className="text-orange-500">Click to Browse</span>
                        </label>
                        <div className="mt-2 flex place-content-center">
                            <p className="text-sm m-2">Aspect ratio 16:9</p>
                            <p className="text-sm m-2">Recommended size 1024*576</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Lecture Title <span className='text-red-600'>*</span></label>
                    <input
                        type="text"
                        id="lectureTitle"
                        name="lectureTitle"
                        value={lectureDetails.lectureTitle}
                        onChange={(e) => handleChange('lectureTitle', e.target.value)}
                        placeholder="Enter Lecture Title"
                        className='w-full pl-4 py-2 border bg-gray-800 rounded-md outline-gray-900 focus:outline-none focus:ring-2'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Video Playback Time <span className='text-red-600'>*</span></label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            value={lectureDetails.lecturePlayTimeH}
                            onChange={(e) => handleChange('lecturePlayTimeH', e.target.value)}
                            className="w-1/3 bg-gray-800 outline outline-1 outline-white focus:outline-none focus:ring-2 text-white rounded p-2"
                            placeholder="HH"
                            required
                        />
                        <input
                            type="number"
                            value={lectureDetails.lecturePlayTimeM}
                            onChange={(e) => handleChange('lecturePlayTimeM', e.target.value)}
                            className="w-1/3 bg-gray-800 outline outline-1 outline-white focus:outline-none focus:ring-2 text-white rounded p-2"
                            placeholder="MM"
                            required
                        />
                        <input
                            type="number"
                            value={lectureDetails.lecturePlayTimeS}
                            onChange={(e) => handleChange('lecturePlayTimeS', e.target.value)}
                            className="w-1/3 bg-gray-800 outline outline-1 outline-white focus:outline-none focus:ring-2 text-white rounded p-2"
                            placeholder="SS"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block mb-2">Lecture Description <span className='text-red-600'>*</span></label>
                    <textarea
                        id="lectureDescription"
                        value={lectureDetails.lectureDescription}
                        onChange={(e) => handleChange('lectureDescription', e.target.value)}
                        className='w-full p-4 h-32 border bg-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        placeholder="Enter description"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type='button'
                        onClick={handleSave}
                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                    >
                        Save Edits
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CourseModal;
