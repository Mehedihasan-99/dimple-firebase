import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLoginGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => console.log('Error', error))
    }

    const handleLoginGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => console.log('Error', error))
        console.log("hello")
    }

    const handleLogOut = () => {
        setUser(null);
    }

    return (
        <div>
            {user ?
                <button onClick={handleLogOut}>Log Out </button> :
                <div>
                    <button onClick={handleLoginGoogle}>Google Login </button>
                    <button onClick={handleLoginGithub}>Github Login </button>
                </div>}

            {
                user && 
                <div>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;