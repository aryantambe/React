import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor="text-white",
     className='', // {/*this is kept blank so that when an user wants to add his own modifications of tailwind classes, we can just add them directly using {className}*/}
    ...props
}) {
    return (
        <button className='{`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}'{...props}>{children}</button>
    )
}

export default Button
