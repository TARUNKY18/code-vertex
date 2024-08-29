import React from 'react';

function AddCourseSection1({ formData, handleFormDataChange }) {
    return (
        <main className='w-full p-8'>
            <form className='w-full'>
                {/* Course Title */}
                <div className='w-full mb-6'>
                    <label htmlFor="CourseName" className='block w-full mb-2'>
                        Course Title <span className='text-red-600'>*</span>
                    </label>
                    <input
                        type="text"
                        id="CourseName"
                        name="CourseName"
                        placeholder="Enter Course Title"
                        value={formData.courseTitle}
                        onChange={(e) => handleFormDataChange('courseTitle', e.target.value)}
                        className='w-full pl-4 py-2 border bg-gray-800 rounded-md outline-gray-900 focus:outline-none focus:ring-2'
                        required
                    />
                </div>

                {/* Course Description */}
                <div className='w-full mb-6'>
                    <label htmlFor="CourseDescription" className='block w-full mb-2'>
                        Course Description <span className='text-red-600'>*</span>
                    </label>
                    <textarea
                        id="CourseDescription"
                        name="CourseDescription"
                        placeholder="Description"
                        value={formData.courseDescription}
                        onChange={(e) => handleFormDataChange('courseDescription', e.target.value)}
                        className='w-full p-4 h-32 border bg-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        required
                    />
                </div>

                {/* Course Price */}
                <div className='w-full mb-6'>
                    <label htmlFor="price" className='block w-full mb-2'>
                        Course Price <span className='text-red-600'>*</span>
                    </label>
                    <input
                        type='text'
                        id="price"
                        name="price"
                        placeholder="Enter Course Price"
                        value={formData.price}
                        onChange={(e) => handleFormDataChange('price', e.target.value)}
                        className='w-full py-2 pl-4 border bg-gray-800 rounded-md focus:outline-none focus:ring-2'
                        required
                    />
                </div>

                {/* Course Category */}
                <div className='w-full mb-6'>
                    <label htmlFor="courseContent" className='block w-full mb-2'>
                        Course Category <span className='text-red-600'>*</span>
                    </label>
                    <select
                        name="courseContent"
                        id="courseContent"
                        value={formData.category}
                        onChange={(e) => handleFormDataChange('category', e.target.value)}
                        className='w-full py-2 pl-4 border bg-gray-800 rounded-md focus:outline-none focus:ring-2'>
                        <option value="webDevelopment" className='bg-gray-900'>Web Development</option>
                        <option value="AppDevelopment" className='bg-gray-900'>App Development</option>
                        <option value="AiAndMl" className='bg-gray-900'>AI and ML</option>
                        <option value="softwareDevelopment" className='bg-gray-900'>Software Development</option>
                    </select>
                </div>

                {/* Tags */}
                <div className='w-full mb-6'>
                    <label htmlFor="Tag" className='block w-full mb-2'>
                        Tags<span className='text-red-600'>*</span>
                    </label>
                    <input
                        type='text'
                        id="Tag"
                        name="Tag"
                        placeholder="Enter Tag and Press Enter"
                        value={formData.tags}
                        onChange={(e) => handleFormDataChange('tags', e.target.value)}
                        className='w-full py-2 pl-4 border bg-gray-800 rounded-md focus:outline-none focus:ring-2'
                        required
                    />
                </div>

                {/* Thumbnail */}
                <div className='w-full mb-6'>
                    <label htmlFor="thumbnail" className='block w-full mb-2'>
                        Thumbnail<span className='text-red-600'>*</span>
                    </label>
                    <div className="place-content-center text-center bg-gray-800 p-8 rounded-md border border-dashed border-gray-500">
                        <div className="p-5">
                            <span className='text-2xl'>🗃️</span>
                        </div>
                        <label htmlFor="thumbnail" className="cursor-pointer">
                            <input 
                                type="file" 
                                id="thumbnail" 
                                name="thumbnail" 
                                className="hidden" 
                                onChange={(e) => handleFormDataChange('thumbnail', e.target.files[0])}
                                required 
                            />
                            <span className="text-blue-300">Drag and Drop an Image or </span>
                            <span className="text-orange-500">Click to Browse</span>
                        </label>
                        <div className="mt-2 flex place-content-center">
                            <p className="text-sm m-2">Aspect ratio 16:9</p>
                            <p className="text-sm m-2">Recommended size 1024*576</p>
                        </div>
                    </div>
                </div>

                {/* Benefits of course */}
                <div className='w-full mb-6'>
                    <label htmlFor="WhatYouWillLearn" className='block w-full mb-2'>
                        Benefits of Course <span className='text-red-600'>*</span>
                    </label>
                    <textarea
                        id="WhatYouWillLearn"
                        name="WhatYouWillLearn"
                        placeholder="Description"
                        value={formData.benefits}
                        onChange={(e) => handleFormDataChange('benefits', e.target.value)}
                        className='w-full p-4 h-32 border bg-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        required
                    />
                </div>

                {/* Requirements */}
                <div className='w-full mb-6'>
                    <label htmlFor="CourseRequirements" className='block w-full mb-2'>
                        Requirements <span className='text-red-600'>*</span>
                    </label>
                    <textarea
                        id="CourseRequirements"
                        name="CourseRequirements"
                        placeholder="Description"
                        value={formData.requirements}
                        onChange={(e) => handleFormDataChange('requirements', e.target.value)}
                        className='w-full p-4 h-32 border bg-gray-800 rounded-md focus:outline-none focus:ring-2 resize-none'
                        required
                    />
                </div>
            </form>
        </main>
    );
}

export default AddCourseSection1;
