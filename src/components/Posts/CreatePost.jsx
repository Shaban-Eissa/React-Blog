import React, { useState } from 'react'

const CreatePost = (props) => {
    const[title , setTitle] = useState('');
    const[url , setUrl] = useState('')
    const[body , setBody] = useState('');
    const[author , setAuthor] = useState ('admin')
    const handleForm = (e) => {
        e.preventDefault() ; 

        const post = {
            title , 
            body ,
            image : url ,
            author
        }

        fetch('http://localhost:3000/posts' , {
            method : 'POST' ,
            headers : {'Content-Type' : 'application/json'} ,
            body : JSON.stringify(post)
        }).then(() => {
            props.history.push('/')
        })

    }

    return (
        <section className = 'create-post'>
            <h2>Add New Post</h2>
            <form onSubmit = {handleForm}>
                <label>Blog Title</label>
                <input type='text' required
                value = {title}
                onChange = { (e) => setTitle(e.target.value)}
                ></input>
                <label>Blog Image URL</label>
                <input type='url' required
                value = {url} 
                onChange = {(e) => setUrl(e.target.value)}
                ></input>
                <label>Blog Body</label>
                <textarea 
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                required rows='10'></textarea>
                <label>Blog Author</label>
                <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value='admin'>Admin</option>
                    <option value='user'>User</option>
                </select>
                <button type='submit' className='btn'>Add Blog</button>

            </form>

        </section>
    )
}

export default CreatePost
