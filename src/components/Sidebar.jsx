import { useState } from "react";

export default function Sidebar() {

    const [isSelected, setSelected] = useState("Profile");
    return (
        <div className="bg-white h-full rounded-l-xl p-4 w-1/5">
            <ul className="list-none items-center flex flex-col gap-4">
                <li className={"cursor-pointer p-2 rounded-3xl " + (isSelected === "Profile" ? "bg-blue-200 text-blue-500" : "text-gray-500")} onClick={() => setSelected("Profile")}>My Profile</li>
                <li className={"cursor-pointer p-2 rounded-3xl " + (isSelected === "Security" ? "bg-blue-200 text-blue-500" : "text-gray-500")} onClick={() => setSelected("Security")}>Security</li>
            </ul>
        </div>
    )
}
