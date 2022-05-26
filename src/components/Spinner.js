import React  from 'react'
import loading from './loading.gif'
const Spinner=()=> {
    return (
      <div>
          <img style={{display:'block'}} className='mx-auto' src={loading} alt="loading..." />
      </div>
    )
}
export default Spinner;
