import React from 'react'
import "./patient_detail.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form"
import { Modal } from 'react-bootstrap'
import { useContext } from 'react'
import { LoginInfoContext } from '../LoginContext/DataContext'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Patient_detail = (props) => {
    const navigate = useNavigate();
    const {data,setAccess} = useContext(LoginInfoContext)
    const [show,setShow] = useState(false)
    const handleClose = ()=>setShow(false)
    const handleShow = ()=>{
        setShow(true)
        setEqual(false)
    }
    const [value,setValue] = useState(0)
    const [Error,setError] = useState(false)
    const [equal,setEqual] = useState(false)
    const handleAdd=()=>{
        console.log(value)
        console.log(data.Otp === value)
        setShow(false)
        if(data.Otp === value){
            setError(true)
            setEqual(true)
            setAccess({
                name:"docter",
                access:true
            })
            console.log("df")
            return
        }
        setTimeout(()=>{
            setError(false)
        },500)
        setError(true)   
        return     
    }
    if(!data){
        return (
            <div
            style={{margin:"auto",
            marginTop:"5rem"    
    }}
            >
                <Alert
                style={{
                    padding:"5rem",
                    color:"red",
                    fontSize:"2rem"
                }}
            variant='danger'>
                No Any Patient is Present
            </Alert>
            </div>            
        )
    }
   
    return (
        <>
            <div className='_patient'>
                <button 
                onClick = {handleShow}>
                    {(Error && equal) ?
                    navigate("/login/Docter/patient")
                    :
            <Link to="/login/Docter">
                        <div className='_patient_name'>
                            {props.name}
                        </div>
                        <div className='_Address_container'>
                            {props.address}
                        </div>
                    </Link>
            }
                </button>
                <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    
                    <Modal.Body>
                        <Form.Control
                        placeholder = "Enter Otp"
                        aria-label='Otp'
                        onChange={(e)=>{
                            setValue(e.target.value)
                        }}
                        ></Form.Control>
                        <div
                        style={{
                            marginLeft:"7rem"
                        }}
                        >
                        <Button variant="primary"
                        
                onClick = {handleAdd}>
                    Submit
                </Button>   
                </div>                     
                    </Modal.Body>
                    </Modal.Header>
                </Modal>

                {
                    (Error)?
                    <div
                    style={{margin:"auto",
                    marginTop:"5rem"    
            }}
                    >
                        <Alert
                        style={{
                            // padding:"2rem",
                            // color:"red",
                            // fontSize:"2rem",
                            zIndex:'1',
                            top:"1rem",
                            position:"absolute",
                            margin:"0 auto"
                        }}
                    variant='danger'>
                        Otp Doesn't Match
                    </Alert>
                    </div>
                    :
                    null
                }                
            </div>
        </>
    )
}
