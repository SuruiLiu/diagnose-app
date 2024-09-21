import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function FirstPage() {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        condition: '',
        history: '',
        specialist: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // 这里可以添加AI检查逻辑
        console.log('AI check initiated with: ', formData);
        navigate('/second');
    };

    return (
        <div class="h-screen flex justify-center items-center p-6 bg-gray-100 ">
            <div class="flex flex-col w-full max-w-lg">
                <h1 class="text-3xl font-bold text-center mb-6">Patient Information</h1>
                <form class="patient-form space-y-4">
                    <div class="flex space-x-4">
                        <div class="form-group flex-1">
                            <label for="gender" class="block font-semibold mb-1">Gender</label>
                            <input type="text" id="gender" name="gender" placeholder="Gender" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="form-group flex-1">
                            <label for="age" class="block font-semibold mb-1">Age</label>
                            <input type="text" id="age" name="age" placeholder="Age" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="condition" class="block font-semibold mb-1 text-lg">Condition</label>
                        <textarea id="condition" name="condition" placeholder="Condition" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24" />
                    </div>
                    <div class="form-group">
                        <label for="history" class="block font-semibold mb-1 text-lg">History</label>
                        <textarea id="history" name="history" placeholder="History" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24" />
                    </div>
                    <div class="form-group">
                        <label for="specialist" class="block font-semibold mb-1 text-lg">Specialist</label>
                        <textarea id="specialist" name="specialist" placeholder="Specialist" onChange={handleChange} class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24" />
                    </div>
                    <button class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4" onClick={handleSubmit}>AI Check</button>
                </form>
            </div>
        </div>
    );
}

export default FirstPage;
