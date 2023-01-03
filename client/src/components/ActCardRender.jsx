import React from 'react'
import { Link } from 'react-router-dom'
import s from './card.module.css'


function ActCardRender({ name, flag, continent, id }) {


    console.log(flag)

    return(


<div>
        
        {name.map((n) => {
  { console.log(n)}
            return(
              
             
                <Link to={`/country/${id}`} style={{ textDecoration: 'none' }}>

                    <div className={`${s.home_cardEach}`}   key={`${id}`} >
                        <h1> { name}</h1>
                        <img src={flag} alt="flag" height='150px' width='210px' />
                        <p>Continenttt: {continent[n]}</p>
                    </div>

                </Link>
            

        
        )
        
            })}
            
            </div>)
            

        }



export default ActCardRender