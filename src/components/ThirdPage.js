import React from 'react';

function ThirdPage() {
    return (
        <div class="h-screen flex flex-col justify-center items-center p-6 bg-gray-100">
            <div class="flex flex-col w-full max-w-lg text-center">
                <h1 class="text-3xl font-bold mb-6">Doctor Conversation</h1>
                <p class="text-lg mb-4">Date: <span class="font-semibold">2024/xx/xx</span></p>
                <div class="chat mb-6 p-4 border border-gray-300 rounded bg-white shadow-md">
                    <div class="patient-message mb-2 p-2 bg-blue-100 rounded text-left">I have a problem</div>
                    <div class="doctor-message mb-2 p-2 bg-green-100 rounded text-left">Do this, do that...</div>
                    <div class="patient-message mb-2 p-2 bg-blue-100 rounded text-left">...</div>
                </div>
                <div class="questions space-y-2">
                    <button class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Q1. What time and what date</button>
                    <button class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Q2. What time and what date</button>
                    <button class="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Q3. What time and what date</button>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;
