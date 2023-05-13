import React from 'react'
import { useState } from 'react';
import { createContext} from 'react';
export const LoginInfoContext = createContext({}); 

const data = {
    name:"Chetan",
    Address:"12121224498409384983759837493874934879384",
    Ether:"23ETh",
    Otp:"1212",
    Assign_medicine:[
        {
            Name:"Cyclone",
            Quantity:12
        },
        {
            Name:"Cyclone",
            Quantity:12
        },{
            Name:"Cyclone",
            Quantity:12
        },
        {
            Name:"Cyclone",
            Quantity:12
        }
    ],
    Medical_Medicine:[
        {
            Name:"Rm-100"
        },
        {
            Name:"MR"
        }
    ]
}

export const LoginContext = ({children})=> {
    const [searchvalue,SetSearchValue] = useState()
    const [Access,setAccess] = useState({})
    const AddMedicineByDocter = (obj)=>{
        const temp = {
            Name:obj.name,
            Quantity:obj.quantity
        }
        data.Assign_medicine.push(temp)
    }
    return (
        <LoginInfoContext.Provider value={{data,AddMedicineByDocter,SetSearchValue,Access,setAccess}}>
            {children}
        </LoginInfoContext.Provider>
  )
}
