import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from "../components/layout/Heading";
import axios from 'axios';
import { BASE_URL } from '../constants/api';
import Image from 'next/image'

export default function Results(props) {
  return (
      <Layout>
        <Head />
        <Heading content="Drinks" />

        {props.drinks.drinks.map((drink) => {
          return (
                <a key={drink.idDrink} href={`detail/${drink.idDrink}`} >
                  <div className="card">
                    <Image src={drink.strDrinkThumb} width="200" height="200" alt="My image"></Image>
                    <h3>{drink.strDrink}</h3>
                    <p>{drink.strAlcoholic}</p>
                  </div> 
                </a> 
          );
        })} 
      
      </Layout>
  );
}

export async function getStaticProps() {
  let drinks = [];  

  try {
    const response = await axios.get(BASE_URL);
    
     drinks = response.data; 
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      drinks: drinks,
    },
  };
} 