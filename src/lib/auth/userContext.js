export const getUser = async () => {
    const {
        data: { session },
    } = await supabase.auth.getSession();
    if(session) { 
        return session.user
    }
}