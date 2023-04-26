import { useId } from 'react'

import { Button } from '@/components/Button'

const GOOGLE_APPS_SCRIPT_DEPLOYED_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbz7EQLvNVmhKNqGoeCPTZNN9vNYJfp_3y62SL6BS-dJhcY_BQ1eqFN6zpG-Jfd72Jur/exec'

export function SignUpForm() {
  let id = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch(GOOGLE_APPS_SCRIPT_DEPLOYED_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        console.log('Success!', response)
        alert('Thank you for subscribing!')
      })
      .catch((error) => {
        console.error('Error!', error.message)
        alert('Oops! Something went wrong. Please try subscribing again.')
      })
  }

  return (
    <form
      className="relative isolate mt-8 flex items-center pr-1"
      onSubmit={handleSubmit}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="Email"
        id={id}
        placeholder="Your email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[1rem]/6"
      />
      <Button type="submit" arrow className="text-xs sm:text-[0.8125rem]/6">
        Get updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}
