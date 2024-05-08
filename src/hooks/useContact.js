import { supabaseClient } from "@/lib/supabase";
import { useState, useEffect } from "react";

export const useContact = () => {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState(null);
    const [user, setUser] = useState(null);


    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const { data: {session}, error } = await supabaseClient.auth.getSession();
            if (error) {
                throw error;
            }
            if (session) {
                setUser(session.user);
            }
        } catch (error) {
            console.error("Error fetching user session:", error.message);
        }
    };


    const getContacts = async () => {
        try {
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (user) {
                console.log("user", user);
                const { data, error } = await supabaseClient
                    .from("Contact")
                    .select('*')
                    .eq("uuid", user.id);
                
                if (error) {
                    throw error;
                }
                if (data) {
                    setContacts(data);
                    console.log("data", data);
                }
            }
        } catch (error) {
            console.error("Error fetching contacts:", error.message);
        }
    };

    const getContact = async (contact_id) => {
        try {
            let { data , error } = await supabaseClient
                .from("Contact")
                .select('*')
                .eq("id", contact_id);
            if (error) {
                throw error;
            }
            if (data) {
                setContact(data[0]);
                console.log("contact", data[0]);
                return data[0];
            }
        } catch (error) {
           console.log("Error fetching contact:", error.message); 
        }
    }

    const getPhones = async (contact_id) => {
        try {
            const { data, error } = await supabaseClient
                .from("Phone")
                .select('*')
                .eq("c_id", contact_id);
            if (error) {
                throw error;
            }
            if (data) {
                return data;
            }
        } catch (error) {
            console.error("Error fetching contacts:", error.message);
        }
    }

    const deleteContact = async (contact_id) => {
        try {
            const { error } = await supabaseClient
                .from("Contact")
                .delete()
                .eq("id", contact_id);
            if (error) {
                throw error;
            }
        } catch (error) {
            console.error("Error deleting contact:", error.message);
        }
    }

    return { contacts,contact, setContact, getContacts, getUser, getPhones, getContact , deleteContact };
};
