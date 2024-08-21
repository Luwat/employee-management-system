import React, { CSSProperties } from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode,
}

const Button = ({children, className, ...props}: ButtonProps) => {
  return (
    <div>
      <button className={`py-2 px-4 rounded-md ${className}`} {...props}>{children}</button>
    </div>
  )
}

export default Button
