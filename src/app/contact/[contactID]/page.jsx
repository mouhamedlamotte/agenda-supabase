"use client"
import { useContact } from '@/hooks/useContact'
import { useRouter, useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ContactDetails = () => {
  const router = useRouter()
  const { contactID } = useParams()
  const { contact , getContact, getPhones } = useContact()


  const fetchContact = async () => {
    try {
      const data = await getContact(contactID)
      if (!data) return

      const phones = await getPhones(contactID)
      
      console.log(phones);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContact(contactID)
    getPhones(contactID)
  }, [])

  return (
    <div>
      <h1>{contact?.first_name}</h1>
    </div>
  )
}
    
export default ContactDetails