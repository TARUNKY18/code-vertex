import React from 'react'

function AddCourseSection3({formData, handleFormDataChange}) {

    return (
        <>
            <main className='h-screen w-full'>
                <div className=" w-full">

                    <div>
                        <div className="w-[100%] p-5 bg-gray-800 rounded-lg py-10">
                            <h2 className="text-xl font-bold mb-3 text-center">Publish Settings</h2>
                            <div className="mb-4">
                                <input type="checkbox" id="publicCourse" className="mr-2" />
                                <label htmlFor="publicCourse">Make this Course Public</label>
                            </div>
                        </div>
                        <div className="flex justify-between mt-10">
                            <button className="bg-gray-600 p-2 rounded">Save as a Draft</button>
                            <button className="bg-yellow-500 p-2 rounded">Save and Publish</button>
                        </div>
                    </div>

                </div>


            </main>
        </>
    )
}

export default AddCourseSection3
