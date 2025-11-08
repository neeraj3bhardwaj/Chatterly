import React from 'react'
import { Paperclip, Globe, ArrowUp, Bot } from 'lucide-react'

function Prompt() {
    return <div className='flex flex-col flex-1 w-full items-center justify-center px-4 pb-4'>
        {/* Greetings from chatterly */}
        <div className='mt-16 text-center'>
            <div className='flex items-center justify-center gap-2'>
                <img className='h-8' src="" alt="" />
                <h1 className='text-3xl text-white font-semibold mb-2'>Hi, I am chatterly</h1>
            </div>
            <p className='text-gray-400 text-base mt-2'>How can i Help you ?</p>
        </div>

        {/* Prompt */}
        <div className='w-full max-w-4xl flex-1 overflow-y-auto mt-6 mb-4 space-y-4 max-h-[60vh] px-1'>
            <div className=''>

            </div>
        </div>

        {/* input box */}
        <div className='w-full max-w-4xl relative mt-auto'>
            <div className='bg-[#2f2f2f] rounded-[2rem] px-6 py-8 shadow-md'>
                <input className='bg-transparent w-full text-white placeholder-gray-400 text-lg outline-none ovverflow-y-auto' type="text" placeholder='Ask Chatterly ?' />
                <div className='flex items-center justify-between mt-4 gap-4'>
                <div className='flex gap-2'>
                    <button className='flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition'><Bot className='w-4 h-4'/>DeepThink</button>
                    <button className='flex items-center gap-2 border border-gray-500 text-white text-base px-3 py-1.5 rounded-full hover:bg-gray-600 transition'><Globe className='w-4 h-4'/>search</button>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='text-gray-400 hover:text-white transition '><Paperclip className='w-5 h-5'/></button>
                    <button className='bg-gray-500 hover:bg-blue-400 p-2 rounded-full text-white transition'><ArrowUp className='w-4 h-4'/></button>
                </div>
                </div>
            </div>
                
        </div>
    </div>
}

export default Prompt