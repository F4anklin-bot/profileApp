export default function Address() {
    const adress= {
        country : 'United Kingdom',
        city : 'Leeds, East London',
        postalCode : 'ERT 2354',
        taxID : 'AS45645756',
    }
    return (
        <div className="flex border-1 shadow-sm mb-5 rounded-2xl p-4 mt-2 mx-5 border-gray-200">
            <div className="w-5/6">
                <div className="grid grid-cols-2 gap-6 mt-2">
                    <p className="flex flex-col">Country : <span className="text-gray-500">{adress.country}</span></p>
                    <p className="flex flex-col">City/State : <span className="text-gray-500">{adress.city}</span></p>
                    <p className="flex flex-col">Postal Code : <span className="text-gray-500">{adress.postalCode}</span></p>
                    <p className="flex flex-col">TAX ID : <span className="text-gray-500">{adress.taxID}</span></p>
                    
                </div>
            </div>
            <button onClick={() => {
                const inputs = document.querySelectorAll('.address-value');
                inputs.forEach(input => {
                    input.contentEditable = true;
                    input.focus();
                });
                const saveBtn = document.createElement('button');
                saveBtn.textContent = 'Save';
                saveBtn.className = 'ml-2 bg-blue-500 text-white px-2 py-1 rounded';
                saveBtn.onclick = () => {
                    inputs.forEach(input => {
                        input.contentEditable = false;
                    });
                    saveBtn.remove();
                };
                document.querySelector('.address-container').appendChild(saveBtn);
            }}>Edit</button>
        </div>
    )
} 