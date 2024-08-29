import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import AddCourseSection1 from './Components/AddCourseSection1';
import AddCourseSection2 from './Components/AddCourseSection2';
import AddCourseSection3 from './Components/AddCourseSection3';

function AddCourse() {
    // State to manage form data and step
    const [formData, setFormData] = useState({
        courseTitle: '',
        courseDescription: '',
        price: '',
        category: '',
        tags: '',
        thumbnail: null,
        benefits: '',
        requirements: '',
        lessons: [],
        public: false
    });

    const [step, setStep] = useState(1);

    // Function to handle form data change
    const handleFormDataChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className='flex text-white bg-gray-950 h-full'>
            <AdminDashboard />

            <div className="w-[70%] mx-auto mt-10 p-5 bg-gray-900 text-white rounded-lg">
                {/* Step Indicator */}
                <div className="flex justify-evenly mb-5">
                    <div className={step === 1 ? 'text-yellow-500 bg-orange-500 bg-opacity-5 border-yellow-600 border-2 rounded-full px-4 py-2' : 'bg-gray-700 rounded-full px-4 py-2'}>1</div>
                    <div className={step === 2 ? 'text-yellow-500 bg-orange-500 bg-opacity-5 border-yellow-600 border-2 rounded-full px-4 py-2' : 'bg-gray-700 rounded-full px-4 py-2'}>2</div>
                    <div className={step === 3 ? 'text-yellow-500 bg-orange-500 bg-opacity-5 border-yellow-600 border-2 rounded-full px-4 py-2' : 'bg-gray-700 rounded-full px-4 py-2'}>3</div>
                </div>

                {/* Render sections based on step */}
                {step === 1 && <AddCourseSection1 formData={formData} handleFormDataChange={handleFormDataChange} />}
                {step === 2 && <AddCourseSection2 formData={formData} handleFormDataChange={handleFormDataChange} />}
                {step === 3 && <AddCourseSection3 formData={formData} handleFormDataChange={handleFormDataChange} />}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-5">
                    {step > 1 && <button onClick={handlePrevious} className="bg-gray-600 p-2 rounded">Previous</button>}
                    {step < 3 && <button onClick={handleNext} className="bg-yellow-500 p-2 rounded">Next</button>}
                </div>
            </div>
        </div>
    );
}

export default AddCourse;
