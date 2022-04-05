import Head from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import Heading from "../../components/layout/Heading";
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { BASE_URL_ID } from '../../constants/api';
import Image from 'next/image'

export default function Drink({drink}) {

  return (
    <Layout>
      <Head />
      <Heading content="Drink details" />

           <div key={drink[0].idDrink}>
              <h3 >{drink[0].strDrink}</h3>
              <i>{drink[0].strAlcoholic}</i>
              <i>{drink[0].strCategory}</i>
              <p>{drink[0].strInstructions}</p>
               <Image src={drink[0].strDrinkThumb} width="200" height="200" alt="My image"></Image> 
					 </div>  
    </Layout>
  );
} 

export async function getStaticPaths() {
  try {
   const response = await axios.get(BASE_URL);
   console.log(response.data);
   const drinks = response.data;
 
   const paths = drinks.drinks.map((drink) => ({
    params: { id: drink.idDrink},
   }));
 
   return { paths: paths, fallback: false };
  } catch (error) {
   console.log(error);
  }
 }
export async function getStaticProps({ params }) {
  const url = `${BASE_URL_ID}${params.id}`;
  
  let drink = null;
 
  try {
   const response = await axios.get(url);
   drink = response.data;
  } catch (error) {
   console.log(error);
  }
  return {
    props: { drink: drink.drinks },
  };

} 
