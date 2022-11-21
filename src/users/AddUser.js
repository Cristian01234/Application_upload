import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const {id} = useParams()

    const [users, setUsers] =useState ({
        name:"",
        username:"",
        email:""

    })


   const{name, username, email} = users

    const onImputChange = (e) => {

        setUsers({... users,[e.target.name]: e.target.value})


    };

    useEffect(() =>{
        loadUsers();
    }, []);


    const onSubmit=async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8081/user/${id}`, users);
        navigate("/");

    };

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8081/user/${id}`)
        setUsers(result.data)
    }




  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>


    <h2 className="text-center m-4">Register User</h2>

   <form onSubmit={(e)=>onSubmit(e)}> 
    <div className="mb-3">
    <label htmlFor="Name" className="form-label">


    Name
    </label>
    <input 
        type={"text"}
       className = "form-control"
       placeholder="Enter your name"
       name="name"
       value={name}
       onChange={(e) => onImputChange(e)}/>
    </div>



    


    
   

    <div className="mb-3">
    <label htmlFor="Username" className="form-label">


    Username
    </label>
    <input 
        type={"text"}
       className = "form-control"
       placeholder="Enter your username"
       name="username" 
       value={username}
       onChange={(e) => onImputChange(e)}/>
    </div>


    <div className="mb-3">
    <label htmlFor="Email" className="form-label">


    E-mail
    </label>
    <input 
        type={"text"}
       className = "form-control"
       placeholder="Enter your e-mail adress"
       name="email" 
       value={email}
       onChange={(e) => onImputChange(e)}/>
    </div>
    <button type="submit" className="btn btn-outline-primary">
    Submit
    </button>

    <Link  className="btn btn-outline-danger mx-2" to="/">
    Cancel
    </Link>
    </form>

    </div>
</div>
    </div>
  )
}
