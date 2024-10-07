import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/config/firbase.config";
 
const SignUpWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();

        const result=await signInWithPopup(auth, provider)
        
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential){
            console.error("Error in user Credential")
            return
        }
        const token = credential.accessToken;
        const user = result.user;
        return {user,token}
        
    } catch (error) {
        
        return{error:error.message}
        

    }
    };

export default SignUpWithGoogle