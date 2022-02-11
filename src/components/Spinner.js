import React from 'react'
import loading from './gif.gif'

const Spinner = () => {
        return (
            <div className='text-center my-3'>
                <img src={loading} alt="loading" height={100} />
            </div>
        )
}

export default Spinner
