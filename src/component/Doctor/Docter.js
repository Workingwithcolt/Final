import React from 'react'
import './docter.css'
export const Docter = () => {
  return (
    <div className='container'>
        <div className='_container_first'>
            {/* name */}
            <div className='_Name_container'>
                Dr.Rokde
            </div>
            {/* addres */}
            <div className='_Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
        </div>
        <div className="_container_second">
            {/* medicines */}
            <div className='_patient'>
                <div className='_patient_name'>
                    Chetan
                </div>
                <div className='_Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>

            <div className='_patient'>
                <div className='_patient_name'>
                    Manisha
                </div>
                <div className='_Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>

            <div className='_patient'>
                <div className='_patient_name'>
                    Athrav
                </div>
                <div className='_Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>
            
        </div>
        </div>
  )
}
