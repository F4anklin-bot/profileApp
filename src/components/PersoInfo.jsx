export default function PersoInfo(){
    const info = {
        firstname : 'Rafiqur',
        lastname : 'Rahman',
        email : 'rafiqurrahman51@gmail.com',
        phone : '+09 345 346 46',
        bio : 'Team Manager'
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
            
        </div>
    )
}