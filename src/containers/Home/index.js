import React from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css';
import {NavLink } from 'react-router-dom';
/**
* @author
* @function Home
**/
const Home = (props) => {
  return (
    <Layout sidebar>
    
      { /* <Jumbotron style={{margin:'5rem'}} className='text-center'>
           
           <h1> welcome to Giffies dashboard</h1>
           <p>ghghv bvbbhbhbh nbhbhbh bbjjkgffsdf bvbjbjghjffsdfxc vvbnbjjbjggfdfxdzccbbnnmjhhiughhghdfdzcv  cbbnn bnbhghcfcx b vcbvbvgfcxcv  vbfgbmnnmbvb 
               cvvnbmnbbnvbn mbnvbn mmnnbnbncxvvbmnbbncvx hbmbmjbkgbccfxc bnvnbnmbbvbvv bvbvghfhjkjkjgjjhbgvnbbv bvbvnbvghvnbmjgghvmnvvbcvvnnvvbcc nbnvnvbvbccb
               vxv b nmbm,n,bhj hhbhjhbhbhjmnbn nbmbnbnb nbmbmnbcxvcg
           </p>
  </Jumbotron>*/}
    </Layout>
  )

}
export default Home