import React from 'react'
import { supabaseClient } from '../supabase';

export const RegisterWithEmailAndPassword = async (user) => {
    try {
        let { data, error } = await supabaseClient.auth.signUp({
            email: user.email,
            password: user.password
          })
        if (error) {
            console.log("une erreur est survenue : ", error);
            return null
        }
        return data
    } catch (error) {
        console.log("une erreur est survenue dans catch : ", error);
    }

}
