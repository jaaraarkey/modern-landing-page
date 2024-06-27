// todo Fix the model view
// import { View } from '@react-three/drei'
// import React, { Suspense } from 'react'
// import { Lights } from './Lights'
// import { Model } from './IPhone'   


// const ModelView = (index, groupRef, gsapType, controlRef, setRotationSize, size, item) => {
//     return (
//         <View
//         index={index}
//         id={gsapType}
//         className={` border-2 border-blue w-full h-full ${index === 2 ?'right-[-100%]':''} `}>
//             <ambientLight intensity={0.3} />

//             <perspectiveCamera makeDefault position={[0,0,4]}/>
//             <Lights/>
//             <Suspense fallback={<div>Loading ...</div>}>
//             <Model/>
//             </Suspense>

//         </View>
//     )
// }

// export default ModelView


import { View } from '@react-three/drei'
import React from 'react'


const ModelView = (index, groupRef, gsapType, controlRef, setRotationSize, size, item) => {
    return (
        <View
        index={index}
        id={gsapType}
        className={` border-2 border-blue w-full h-full ${index === 2 ?'right-[-100%]':''} `}>
            
        </View>
    )
}

export default ModelView