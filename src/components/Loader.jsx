import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>           {/* //  If we use in 3D then we have to wrap it in the <Html></Html> tag. */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='w-[10vw] h-[10vw] rounded-full'>
                Loading...
            </div>
        </div>
    </Html>    
  )
}

export default Loader