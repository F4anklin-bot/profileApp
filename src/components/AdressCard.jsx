import { useState } from 'react';

export default function Address() {
    const adress= {
        country : 'United Kingdom',
        city : 'Leeds, East London',
        postalCode : 'ERT 2354',
        taxID : 'AS45645756',
    }
    const [editing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true);
    }
    const handleSave = () => {
        setEditing(false);
    }
    const [formData, setFormData] = useState(adress);
    const handleChange = (e) => {
        const {name, value}= e.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <div className="flex border-1 shadow-sm mb-5 rounded-2xl p-4 mt-2 mx-5 border-gray-200">
            <div className=" w-5/6">
                <div className="grid grid-cols-2 gap-6 mt-2">
                    {editing ? (
                        <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border-1 border-gray-200 rounded-2xl p-2"
                        />
                    ) : (
                        <p className="flex flex-col">Country : <span className="text-gray-500">{formData.country}</span></p>
                    )}
                    
                    {/* code pour modifier le city/state */}
                    {/* <p className="flex flex-col">City/State : <span className="text-gray-500">{adress.city}</span></p> */}

                    {
                        editing ? (
                            <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="border-1 border-gray-200 rounded-2xl p-2"
                            />
                        ) : (
                            <p className="flex flex-col">City/State : <span className="text-gray-500">{formData.city}</span></p>
                        )
                    }


                    <p className="flex flex-col">Postal Code : <span className="text-gray-500">{adress.postalCode}</span></p>
                    <p className="flex flex-col">TAX ID : <span className="text-gray-500">{adress.taxID}</span></p>
                    
                </div>
                <div>
                    {editing ? (
                        <button className='cursor-pointer border-gray-300 text-gray-500 py-2 px-6 rounded-3xl border-1' onClick={handleSave}>Save</button>
                    ) : (
                        <button className='cursor-pointer border-gray-300 text-gray-500 py-2 px-6 border-1 rounded-3xl' onClick={handleEdit}>Edit </button>
                    )}
                </div>
            </div>
        </div>
    )
} 