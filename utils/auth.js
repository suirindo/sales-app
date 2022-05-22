import jwt from "jsonwebtoken"
const secret_key = "sales-app"

const auth = (handler) => {
    return async(req, res) => {
        if(req.method === "GET"){
            return handler(req, res)
        }
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lbmVjaEBnbWFpbC5jb20iLCJpYXQiOjE2NTMxODgzMzQsImV4cCI6MTY1MzI3MTEzNH0.23ePYRkZ0q8GhH6QQbgoCjAk96g7Qe2pEkkhwQ65iTY"
        //await req.headers.authorization.split(" ")[1]
            if(!token){
                return res.status(401).json({message: "トークンがありません"})
            }
            try{
                const decoded = jwt.verify(token, secret_key)
                req.body.email = decoded.email
                return handler(req, res)
            } catch(err){
                return res.status(401).json({message: "トークンが正しくないので、ログインしてください"})
            }
    }
}

export default auth