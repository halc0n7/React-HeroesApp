import React from 'react'

export const LoginScreen = ({history}) => {
    const handleClick = ()=>{
       history.replace('/'); //para q cuando de click en el botton login y luego regrese no vuelva a mostrar el login
       //history.push('/');
    }
    return (
        <div className="container mt-5">
            <h1 className='animate__animated animate__zoomInDown'>LoginScreen</h1>
            <hr/>

            <button 
            onClick={handleClick}
            className="btn btn-success">
              Login
            </button>
        </div>
    )
}