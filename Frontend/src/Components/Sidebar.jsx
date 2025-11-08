import React from 'react';
import { X, LogOut} from 'lucide-react';

function Sidebar() {
    return <div className='h-full flex flex-col bg-[#232327]'>
        {/* Header Area in Sidebar */}
        <div className='p-4 border-b border-gray-700 flex items-center justify-between'>
            <div className='text-xl font-bold text-white'>Chatterly</div>
            <button className='text-gray-300 w-6 h-6'><X/></button>
        </div>

        {/* Chat History Area in Sidebar */}
        <div className='flex-1 overflow-y-auto px-4 py-3 space-y-2'>
            <button className='w-full bg-indigo-600 hover:bg-indigo-400 text-white px-4 py-2 rounded-xl mb-4'>+ New Chat</button>
            <div className='text-gray-500 text-sm mt-20 text-center'>No Chat History</div>
        </div>

        {/* Profile and Logout area on sidebar */}
        <div className='p-4 border-t border-gray-700'>
            <div className='flex flex-col gap-3'>
                <div className='flex item-center gap-2 cursor-pointer'>
                    <img className = " rounded-full w-8 h-8" src="" alt="" />
                    <span className='text-gray-300'>My Profile</span>
                </div>
                <button className='flex item-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-gray-700 duration-300 transition'><LogOut/>Logout</button>
            </div>
        </div>
    </div>
}   

export default Sidebar