import React from 'react'
import './Checkbox.css'


export default function Checkbox({checked, setChecked, label, htmlName, htmlId, required}) {

    const checkHandler = () => {
        setChecked((current) => !current)
      }

  return (
    <div className="checkbox-wrapper-42">
        <label className="lbl" htmlFor={htmlId}>{label}</label>
        <input id={htmlId} name = {htmlName} type="checkbox" checked={checked} onChange={checkHandler} value = "true" required = {required ? required : false}/>
        <label className="cbx" htmlFor={htmlId}></label>
    </div>
  )
}

