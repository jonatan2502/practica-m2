import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "../../redux/actions"
import Card from "../Card/Card"
import Styles from './Cards.module.css'

export default function Cards(props) {
    const dispatch = useDispatch()
    const posts = useSelector( state => state.allPosts)
console.log(posts)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <>
            <h3>Lista de posts</h3>
            <div className={Styles.container}>
                {
                    posts.map((post, index) => {
                        return (
                            <Card
                            key={index}
                            id={post.id}
                            title={post.title}
                            content={post.body}
                            user={post.userId}
                            >
                            </Card>
                    )})
                }
            </div>
        </>
    )
}

