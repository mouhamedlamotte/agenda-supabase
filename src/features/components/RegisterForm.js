"use client";

import React, { useEffect, useState } from "react";
import { AlertCircle, Loader } from "lucide-react";
import {   Alert,
    AlertDescription,
    AlertTitle, } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserFormValidation } from "./LoginForm";
import { RegisterWithEmailAndPassword } from "@/lib/auth/register";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export const RegisterForm = () => {
    const [user, setUser] = useState({email: '', password: '', confirmPassword: ''})
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

        const userCredential = await RegisterWithEmailAndPassword(user)

        if (userCredential) {
          toast.success("Compte cree avec succes")
          router.push("/auth/login")
        } else {
          toast.error("Email deja utilise")
          // setError({title: 'Invalide', message: 'Email deja utilise'})
        }
      } catch (error) {
        // console.log(error);
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      error && toast.error(error?.message)
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
        <Input className="py-5 dark:border-slate-700 focus:border-cyan-400" type="password" id="password" placeholder="Password" 
        onChange={handleChange}
        />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="confirmPassword">Password</Label>
        <Input className="py-5 dark:border-slate-700 focus:border-cyan-400" type="password" id="confirmPassword" placeholder="confirm your password" 
        onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full py-6 bg-cyan-500 hover:bg-cyan-400">
        {isLoading ? <Loader className="animate-spin" /> : "Log in"}
      </Button>
    </form>
  );
};


