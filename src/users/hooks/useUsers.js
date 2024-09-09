import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { login, signup } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeUser from "../helpers/normalization/normalizeUser";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
        } catch (err) {
            console.log(err);
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
    }, [setUser]);

    const handleSignup = useCallback(async (userSignup) => {
        try {
            const normalizedUser = normalizeUser(userSignup);
            await signup(normalizedUser);
            await handleLogin({ email: userSignup.email, password: userSignup.password });
        } catch (err) {
            console.log(err);
            setError(err.message);
            setSnack("error", err.message);
        }
    }, []);

    return {
        isLoading,
        error,
        handleLogin,
        handleLogout,
        handleSignup
    };
}