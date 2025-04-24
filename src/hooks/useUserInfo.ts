interface UserInfo{
    userId:string,
    token:string
}


export function useUserInfo():UserInfo{
    return {
        userId:'ab0315c2-15c6-40b9-ab71-ab1364df7724',
        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJjdXN0b21lciJdLCJ1c2VybmFtZSI6IiIsInVzZXJpZCI6ImFiMDMxNWMyLTE1YzYtNDBiOS1hYjcxLWFiMTM2NGRmNzcyNCIsImlzVGVtcG9yYXJ5Ijp0cnVlLCJpc3MiOiJCQU5YwqkgZmluYW5jaWFsIHNlcnZpY2VzIiwiZXhwIjoxNzQ1NTA2MDU4LCJpYXQiOjE3NDU1MDI0NTh9.NTQYQFWYW4_-RgJtCfvu0z4BwS4dIFRnRHUeoTtmLsk'
    }
}