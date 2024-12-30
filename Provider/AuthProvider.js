import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import LoadingScreen from "../screens/LoadingScreen";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            // setUser(user);
            // setLoading(false);
            if (user) {
                try {
                    const userDoc = doc(db, 'users', user.uid);
                    const docSnapshot = await getDoc(userDoc);
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data();
                        setUser(userData);
                    } else {
                        setUser(null); // User document doesn't exist
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setUser(null); // No authenticated user
                setLoading(false);
            }
        });
        return () => unsubscribe();

    }, []);

    if (loading) {
        return <LoadingScreen />
    }
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;