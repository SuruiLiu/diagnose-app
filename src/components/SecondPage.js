import React from 'react';
import { useNavigate } from 'react-router-dom';

function SecondPage() {
    const navigate = useNavigate();

    const handleChat = () => {
        navigate('/third');
    };

    return (
        <div class="h-screen flex justify-center items-center p-6 bg-gray-100">
            <div class="flex flex-col w-full max-w-lg text-center">
                <h1 class="text-3xl font-bold mb-6">Conclusion</h1>
                <p class="text-lg mb-4">Diagnosis: <span class="font-semibold">[Diagnosis Here]</span></p>
                <p class="text-lg mb-4">Recommended Hospital: <span class="font-semibold">[Hospital Name]</span></p>
                <p class="text-lg mb-4">Specialist Department: <span class="font-semibold">[Specialist Department]</span></p>
                <p class="text-lg mb-4">Doctor: <span class="font-semibold">[Doctor Name]</span></p>
                <button
                    onClick={handleChat}
                    class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4"
                >
                    Chat
                </button>
            </div>
        </div>
    );
}

export default SecondPage;
