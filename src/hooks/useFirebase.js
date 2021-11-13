import { useState , useEffect } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut ,onAuthStateChanged ,GoogleAuthProvider,signInWithPopup , updateProfile ,getIdToken } from "firebase/auth";



initializeFirebase()

const useFirebase = () => {
    
    const [user ,setUser] =  useState({})

    const auth = getAuth();
    
    const [isLoading,setIsLoading] = useState(true)
    
    const [authError,setAuthError] = useState('')
  
    const [admin,setAdmin] = useState(false)

     
     // admin setup 


      useEffect(()=> {
        fetch(`https://infinite-cove-73906.herokuapp.com/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data.admin))
      },[user.email])


    // Sign In Google
    
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location,history) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {

        const user = result.user;
        saveUser(user.email , user.displayName , "PUT")
        setAuthError('')
        const destination = location?.state?.from  || '/'
        history.replace(destination)

      }).catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=> setIsLoading(false));;

    }

    
    const registerUser = (email,password , name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          setAuthError('')

           const newUser = {email  , displayName: name}
            setUser(newUser)

            //// save user to database 
             
              saveUser( email, name , "POST")  


            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            })
            .then(() => {

            })
            .catch((error) => {

            });
           history.push('/')

        })
        .catch((error) => {
          setAuthError(error.message);
          // ..
        })
        .finally(()=> setIsLoading(false));
    }

// Login user 

   const loginUser  = (email,password , location,history  ) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       const destination = location?.state?.from  || '/'
       history.replace(destination)
         setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally(()=> setIsLoading(false));

   }



    // Observe user state
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {         
               setUser(user)
              
            } else {
                   setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe
    },[])
    

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false))  ;



  }      

      const saveUser = ( email ,displayName ,method ) => {

        const  user = { email , displayName}
        fetch('https://infinite-cove-73906.herokuapp.com/users',{
          method: method,
          headers:{
            'content-type': 'application/json'
          },
          body : JSON.stringify(user)
        })
        .then()

      }

          

     return {
           user,
           isLoading,
           authError,
           registerUser,
           loginUser,
           signInWithGoogle,
           admin,
           logOut
         
     }
}

export default useFirebase