import { useState } from "react";
import { CiEdit } from "react-icons/ci";


export default function ProfileCard() {
    const user={
        img: "/src/images/digital-art.png",
        nom: "Franklin Akalo",
        poste: "Web dev Junior",
        location: "Leeds, United Kingdom"

    }
    const [editing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true);
    }
    const handleSave = () => {
        setEditing(false);
    }
    return (
        <div className="flex justify-between">
            <div className="flex rounded-2xl shadow-sm border-1 border-gray-200 p-2 m-5">
                <img src={user.img} alt="profile" className="m-4 h-[80px] w-[80px] rounded-full" />
                <div className=" mx-4 flex flex-col">
                    <h1 className="text-2xl font-bold whitespace-nowrap">{user.nom}</h1>
                    <p className='text-gray-500'>{user.poste}</p>
                    <p className='text-gray-400'>{user.location}</p>
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