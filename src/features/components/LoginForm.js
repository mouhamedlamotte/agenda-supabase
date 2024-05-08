"use client";

import React, { useEffect, useState } from "react";
import { AlertCircle, Loader } from "lucide-react";
import {   Alert,
    AlertDescription,
    AlertTitle, } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginWithEmailAndPassword } from "@/lib/auth/Login";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export const LoginForm = () => {
    const [user, setUser] = useState({email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      setError(null)
      try {
        if (!UserFormValidation(user, setError)) return
        const userCredential = await LoginWithEmailAndPassword(user)
        if (userCredential) {
          router.push("/")
        } else {
          setError({title: 'Invalide', message: 'identifiants invalides'})
        }
        console.log(user);
      } catch (error) {
        console.log(`une erreur est survenue : ${error}`);
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      error && toast.warning(error.message)
      return () => {
        
      };
    }, [error]);

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
   
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input className="py-5 dark:border-slate-700 focus:border-cyan-400" type="email" id="email" placeholder="Email"
        onChange={handleChange}
        />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="password">Password</Label>
        <Input className="py-5 dark:border-slate-700 focus:border-cyan-400"type="password" id="password" placeholder="Password" 
        onChange={handleChange}
        />
        <Button className="justify-self-end p-0" variant="link">Forgot password?</Button>
      </div>
      <Button type="submit" className="w-full py-6 bg-cyan-500 hover:bg-cyan-400">
        {isLoading ? <Loader className="animate-spin" /> : "Log in"}
      </Button>
    </form>
  );
};


export const UserFormValidation = (user, setError) => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!user.email || !user.password) {
        setError({title: 'Requis', message: 'Veuillez remplir tous les champs'})
        return false
    }
    if (!user.email.match(emailPattern)) {
        setError({title: 'Invalide', message: 'Veuillez entrer une adresse email valide'})
        return false
    }
    if (user.password.length < 6) {
        setError({title: 'Invalide', message: 'Le mot de passe doit contenir au moins 6 caractères'})
        return false
    }
    if (user.confirmPassword) {
        if (user.password !== user.confirmPassword) {
            setError({title: 'Invalide', message: 'Les mots de passe ne sont pas identiques'})
            return false
        }
    }
    return true
}