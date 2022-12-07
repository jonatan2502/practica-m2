import Styles from './Card.module.css'

export default function Card (props) {

    return (
        <div className={Styles.container}>
            <h4>Card</h4>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Content: {props.content}</p>
            <p>User: {props.user}</p>
        </div>
    )
}


// {
//     id: 1,
//     title: '...',
//     body: '...',
//     userId: 1
//   }
