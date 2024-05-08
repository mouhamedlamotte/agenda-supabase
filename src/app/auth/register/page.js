"use client"

import { RegisterForm } from '@/features/components/RegisterForm'
import { AuthLayout } from '@/features/layout/AuthLayout'
import React from 'react'

const Register = () => {
  return (
    <AuthLayout image="/li.png">
     <RegisterForm />
    </AuthLayout>
  )
}

export default Register;