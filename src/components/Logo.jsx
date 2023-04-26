import { useId } from 'react'
import Image from 'next/image'

export function Logo(props) {
  let id = useId()

  return (
    <div className="flex items-center space-x-4">
      <h1 className="font-sans text-4xl font-black text-white">Front Seat</h1>
    </div>
  )
}
