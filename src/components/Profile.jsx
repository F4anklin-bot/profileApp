import ProfileCard from "./ProfileCard"
import PersoInfo from "./PersoInfo"
import Address from "./AdressCard"
export default function Profile() {
    return (
        <div className="border-l  h-auto border-gray-200">
            <h1 className="ml-5 mt-3 font-bold text-xl">My Profile</h1>
            <div className="flex flex-col gap-4">
                <ProfileCard />
                <PersoInfo />
                <Address />
            </div>
        </div>
    )
}
