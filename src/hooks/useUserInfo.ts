import { useState, useEffect } from "react";

interface UserInfo {
    userId: string;
    token: string;
}

export function useUserInfo(): UserInfo {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        userId: "",
        token: "",
    });

    useEffect(() => {
        const getToken = localStorage.getItem('token');
        const getUserId = localStorage.getItem('user_id');
        if (getToken && getUserId) {
            setUserInfo({
                userId: getUserId,
                token: `Bearer ${getToken}`,
            });
        }
    }, []);

    return userInfo;
}
