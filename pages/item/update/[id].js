import { useState } from "react"
import useAuth from "../../../utils/useAuth"

const UpdateItem = (props) => {
    const [title, setTitle] = useState(props.singleItem.title)
    const [price, setPrice] = useState(props.singleItem.price)
    const [image, setImage] = useState(props.singleItem.image)
    const [description, setDescription] = useState(props.singleItem.description)

    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
            const response = await fetch(`http://localhost:3000/api/item/update/${props.songleItem._id}`,{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        } catch(err){
            alert("アイテム編集失敗")
        }
    }
    const loginUser = useAuth()

    if(loginUser === props.singleItem.email){
        return (
            <div>
                <h1>アイテム編集</h1>
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(event) => setTitle(event.target.value)}  type="text" name="title" placeholder="アイテム名" required/>
                    <input value={price} onChange={(event) => setPrice(event.target.value)}  type="text" name="price" placeholder="価格" required />
                    <input value={image} onChange={(event) => setImage(event.target.value)}  type="text" name="image" placeholder="画像" required />
                    <textarea value={description} onChange={(event) => setDescription(event.target.value)}  type="text" name="description" rows="15" placeholder="商品説明" required></textarea>
                    <button>編集</button>
                </form>
            </div>
        )
    } else {
        return <h1>権限がありません</h1>
    }
}

export default UpdateItem

export const getServerSideProps = async(context) => {
    const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)
    const singleItem = await response.json()

    return {
        props: singleItem
    }
}