"use client"

import { LoginForm } from '@/features/components/LoginForm'
import { AuthLayout } from '@/features/layout/AuthLayout'
import React from 'react'

const Login = () => {
    
  return (
    <AuthLayout image="/li.png">
      <LoginForm />
    </AuthLayout>
  )
}

export default Login