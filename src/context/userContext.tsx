"use client";

import { appAxios } from "@/lib/axios";
import { IUser } from "@/lib/types/user";
import React from "react";
import { toast } from "sonner";

interface IUserContext {
    user: IUser | null;
    loading: boolean;
    isAuthenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => Promise<void>;
    updateName: (name: string) => Promise<void>;
}

interface IUserProviderProps {
    children: React.ReactNode;
}

const UserContext = React.createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

    async function fetchUser() {
        try {
            setLoading(true);
            const response = await appAxios.get("/users/me");
            setUser(response.data.result);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    }

    async function logout() {
        try {
            setLoading(true);
            await appAxios.post("/auth/logout");
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            setLoading(false);
            toast.success("Logged out successfully");
        }
    }

    async function updateName(name: string) {
        try {
            setLoading(true);
            const response = await appAxios.post("/users/profile", { name });
            setUser(response.data.user);
            toast.success("Profile updated successfully");
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                loading,
                isAuthenticated,
                setUser,
                setIsAuthenticated,
                logout,
                updateName,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): IUserContext => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};
