import { useState } from "react"
import Head from "next/head"

const Register = () => {
    const [name, setName ] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status1, setStatus1] = useState("")
    const [status2, setStatus2] = useState("")

    const handleSubmit = async(event) => {
        event.preventDefault()        
        try{
            const response = await fetch("http://localhost:3000/api/user/register",{
                method: "POST",
                headers:{
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    status1: status1,
                    status2: status2
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        } catch(err){
            alert("ユーザー登録失敗")
        }
    }
    return (
        <div>
            <Head><title>ユーザー登録</title></Head>
            <h1 className = "page-title">ユーザー登録</h1>
            <form onSubmit = { handleSubmit }>
                <input value = {name} onChange={(event) => setName(event.target.value)} type = "text" name="name" placeholder = "名前" required/>
                <input value = {email} onChange={(event) => setEmail (event.target.value)} type = "text" name="email" placeholder = "メールアドレス" required/>
                <label><input value = {status1} onChange={(event) => setStatus1 (event.target.value) }  type="radio" name="status" /> 採用担当者</label>
                <label><input value = {status2} onChange={(event) => setStatus2 (event.target.value) }  type="radio" name="status" /> 営業</label>
                <input value = {password} onChange= {(event) => setPassword(event.target.value)} type = "text" name= "password" placeholder = "パスワード" required/>
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register