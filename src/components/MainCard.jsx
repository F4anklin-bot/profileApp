import Sidebar from './Sidebar'
import Profile from './Profile'
import { useState } from 'react'
export default function MainCard() {
    const [selected, setSelected] = useState("Profile")

    const selectedComponent = () => {
        switch (selected) {
            case "Profile":
                return <Profile />
            case "Security":
                return <Security />
            default:
                return <Profile />
        }
    }

    
    return (
        <div className="flex bg-white h-auto my-5 w-[95%] rounded-xl shadow-md">
            <Sidebar setSelected={setSelected} />
            <div className='w-full h-full'>{selectedComponent()}</div>
        </div>
    )
}
