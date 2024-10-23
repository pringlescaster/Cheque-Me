import React from 'react'
import { Loader2 } from 'lucide-react'
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Image from 'next/image'
import logo from "../../../../../public/cheque.png";

function page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='h-full lg:flex flex-col items-center justify-center px-4'> 
            <div className='text-center space-y-4 pt-16'>
                <h1 className='font-bold text-3xl text-[#2E2A47]'>
                    Welcome Back!
                </h1>
                <p className='text-base text-[#7E8CA0]'>
                    Log in or Creaate account to get back to your dashboard!
                </p>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <ClerkLoaded>
                <SignIn path='/sign-in' />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='animate-spin text-muted-foreground'></Loader2>
                </ClerkLoading>
            
            </div>
        
        </div>
        <div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
<Image width={300} height={300} src={logo} />
        </div>
    </div>
  
  )
}

export default page