import React from 'react'
import useFetch from '../../../customHooks/useFetch'

function LoginForm() {
  const {data, loading, error}=useFetch('test')
  console.log(data)
  return (

    <div>loginForm</div>
  )
}
export default LoginForm