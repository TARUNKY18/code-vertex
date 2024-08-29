import React from 'react'

function AdminDashboard() {
  return (
    <>
        <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-8">Dashboard</h1>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>📊</span>
                <span>DASHBOARD</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>📘</span>
                <span>MY COURSE</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>➕</span>
                <span>ADD COURSE</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>🎓</span>
                <span>Internship</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>💻</span>
                <span>Add Internship</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                <span>⚙️</span>
                <span>Setting</span>
              </a>
            </li>
           
          </ul>
        </div>
      </aside>
    </>
  )
}

export default AdminDashboard
