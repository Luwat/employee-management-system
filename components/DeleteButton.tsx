import { deleteEmployee } from '@/lib/action'
import React from 'react'

const DeleteEmployeeButton = ({id}: {id: number}) => {
    
  return (
    <form action={deleteEmployee.bind(null, id)}>
        <button type='submit'>Delete</button>
    </form>
  )
}

export default DeleteEmployeeButton
