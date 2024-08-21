import { deleteEmployee } from '@/lib/action'
import React from 'react'

const DeleteEmployeeButton = ({id}: {id: number}) => {
    
  return (
    <form action={deleteEmployee.bind(null, id)}>
        <button className='text-red-700 hover:text-red-900' type='submit'>Delete</button>
    </form>
  )
}

export default DeleteEmployeeButton
