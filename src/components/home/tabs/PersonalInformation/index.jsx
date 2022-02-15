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
  <div className="w-50 flex flex-column">
    <TextField className="w-100" id={name} label="Name" value={name} error={hasTyped && name===''} onChange={setName} />
    <div className='mt4'>
      <TextField className="w-100" id={name} label="Email" value={email} error={hasTyped && email===''} onChange={setEmail} />
    </div>
  </div>
)}