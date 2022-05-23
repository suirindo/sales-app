

const UpdateItem = (props) => {


}

export default UpdateItem

export const getServerSideProps = async(context) => {
    const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)
    const singleItem = await response.json()

    return {
        props: singleItem
    }
}