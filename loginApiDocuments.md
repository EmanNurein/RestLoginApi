# Rest login Api part

# GetAllUser
(GET)> http://localhost:5000/api/auth/users

# Register

(POST)> http://localhost:5000/api/auth/register
(body) =>  
    {
        "name":"Wagea",
        "email":"wagea@gmail.com",
        "password":"wagea@1997",
        "phone":"0123123124",
        "role":"user"
    }

# Login

(POST) => http://localhost:5000/api/auth/login
(body)  =>  {
                "email":"wagea@gmail.com",
                "password":"wagea@1997"
            }
(response)=> {"auth": true,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'}

# UserInfo

(GET) => http://localhost:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}
