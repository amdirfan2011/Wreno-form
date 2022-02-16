import React, {useState} from 'react'
import TextField from '@mui/material/TextField';



export const PersonalInformation = ({formData, setFormData}) => {
  const [hasTyped, setHasTyped] = useState(false)
  const {name, email} = formData

  const setName = (event) => {
    setHasTyped(true)
    setFormData({...formData, name: event.target.value})
  }

  const setEmail = (event) => {
    setHasTyped(true)
    setFormData({...formData, email: event.target.value})
  }

  return (
  <div className="w-100 flex flex-column">
    <div className="form-group-change">
    <TextField className="w-100" id={name} label="Name" value={name} error={hasTyped && name===''} onChange={setName} />
    </div>
    
    <div className='mt4 form-group-change'>
      <TextField className="w-100" id={name} label="Email" value={email} error={hasTyped && email===''} onChange={setEmail} />
    </div>
  </div>
)}