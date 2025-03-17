import { useState } from 'react';

export default function PersoInfo(){
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState()
    const info = {
        firstname : 'Franklin',
        lastname : 'Akalo',
        email : 'akalofranklin1@gmail.com',
        phone : '+228 90192593',
        bio : 'Junior Web Dev'
    }
    const handleEdit = () => {
        setEditing(true);
    }
    const handleSave = () => {
        setEditing(false);
    }
    return (
        <div className="flex border-1 shadow-sm rounded-2xl p-4 mt-2 mx-5 border-gray-200">
            <div className="w-5/6">
                <div className="grid grid-cols-2 gap-6 mt-2">
                    <p className="flex flex-col">First Name: <span className="text-gray-500">{info.firstname}</span></p>
                    <p className="flex flex-col mx-8">Last Name: <span className="text-gray-500">{info.lastname}</span></p>
                    <p className="flex flex-col">Email: <span className="text-gray-500">{info.email}</span></p>
                    <p className="flex flex-col mx-8 whitespace-nowrap">Phone: <span className="text-gray-500">{info.phone}</span></p>
                    <p className="flex flex-col">Bio: <span className="text-gray-500">{info.bio}</span></p>
                </div>
            </div>
            <div>
                {editing ? (
                    <button className='border-gray-300 text-gray-500 p-6 rounded-3xl border-1' onClick={handleSave}>Save</button>
                ) : (
                    <button className='border-gray-300 text-gray-500 p-6 border-1 rounded-3xl' onClick={handleEdit}>Edit</button>
                )}
            </div>
        </div>
    )
}