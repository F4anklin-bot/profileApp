import { useState } from "react";

const Sidebar2 = () => {
    const [activeSection, setActiveSection] = useState("profile"); // Section active par défaut
    const items = [
        { id: "profile", name: "My Profile" },
        { id: "security", name: "Security" },
        { id: "teams", name: "Teams" },
        { id: "notifications", name: "Notifications" },
        { id: "billing", name: "Billing" },
        { id: "data-export", name: "Data Export" }
    ];

    return (
        <div className="w-1/4 h-screen border-r border-gray-200">
            <ul className="mx-5 list-none flex flex-col gap-2 text-gray-500">
                {items.map((item) => (
                    <li 
                        key={item.id} 
                        className={`cursor-pointer p-3 rounded-xl hover:bg-blue-50 ${
                            activeSection === item.id 
                            ? "bg-blue-100 text-blue-500" 
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            <button className="mx-8 mt-3 cursor-pointer text-center text-red-500 hover:text-red-600">
                Delete Account
            </button>
        </div>
    )
}

export default Sidebar2; 