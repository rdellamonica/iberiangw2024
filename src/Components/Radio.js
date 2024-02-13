import React from 'react'
import './Radio.css'

export default function Radio() {
  return (
    <div className="radio-inputs">
        <label className="radio">
            <input type="radio" name="contrib_type" value = "poster"/>
            <span className="name">Poster</span>
        </label>
        <label className="radio">
            <input type="radio" defaultChecked name="contrib_type" value = "talk"/>
            <span className="name">Short Talk</span>
        </label>
    </div>
  )
}
