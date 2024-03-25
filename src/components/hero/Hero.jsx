import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './hero.module.css'

const Hero = () => {
  const [type, setType] = useState("1BHK")
  const [continent, setContinent] = useState("0")
  const [priceRange, setPriceRange] = useState("0")
  const navigate = useNavigate()

  // TODO here or somewhere home(fetching properties)

  const handleSearch = () => {
    // navigating to properties
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {/* <h2>Searching a better place to live and Best Place to eat everyday </h2> */}
        <h5>Welcome <br/> to <br/>  <h3 className={classes.name}> DORMDINE</h3></h5>
        <div className={classes.options}>
          <select onChange={(e) => setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="1RK">1RK</option>
            <option value="PG">PG</option>
            <option value="HOSTEL">HOSTEL</option>
          </select>
          <select onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-5000</option>
            <option value="1">5000 - 10,000</option>
            <option value="2">10,000 - 20,000 </option>
            <option value="3">20,000 - 30,000</option>
            <option value="4">30,000-50,000</option>
          </select>
          <select onChange={(e) => setContinent(e.target.value)}>
            <option disabled>Select Location in Chembur</option>
            <option value="0">Navjeevan Society</option>
            <option value="1">Sindhi Society</option>
            <option value="2">Nityanand Society</option>
            <option value="3">Gurumukh Sadan Society</option>
            <option value="4">Tolaram Colony</option>
            <option value="5">Collector Colony</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Hero