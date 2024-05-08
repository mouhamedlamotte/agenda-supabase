import { supabaseClient } from "../supabase";

export const LoginWithEmailAndPassword = async (user) => {
    try {
        let { data, error } = await supabaseClient.auth.signInWithPassword({
            ...user
          })
        if (error) {
            console.error(error);
            return null
        }
        return data
    } catch (error) {
        console.error(error);
    }
}