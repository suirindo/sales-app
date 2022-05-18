import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const registerUser = (req, res) => {
    return res.status(200).json({message: "ユーザー登録成功"})
}

export default registerUser = async(req, res) => {
    try{
        await connectDB()
        await UserModel.create(req.body)

        return res.status(200).json({message: "ユーザー登録成功"})
    } catch(err) {
        return res.status(400).json({message: "ユーザー登録失敗"})
    }
}