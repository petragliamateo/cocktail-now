import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home({randomDrink}) {
  
  const [cocktail, setCocktail] = React.useState({});
  let ingredientList = [];

  function getRandomDrink(){
    console.log(randomDrink.drinks[0])
    setCocktail(randomDrink.drinks[0])
    for(let i=1; i<=15; i++){
      console.log(`cocktail.strIngredient${i}`)
      //if([`cocktail.strIngredient${i}`]){}
    }
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cocktail <span className={styles.spanTitle}>Now!</span>
        </h1>

        <p className={styles.description}>
          Find your favorite cocktail
        </p>

        <div className={styles.grid}>
          <a href="#!" className={styles.card}>
            <h2>Search &rarr;</h2>
            <p>Find your favorite cocktail in this list of more than 500 drinks!</p>
          </a>

          <a href="#!" className={styles.card}>
            <h2>Filters! &rarr;</h2>
            <p>Look for a cocktail by your ingredients!</p>
          </a>

          <div onClick={getRandomDrink} className={styles.card + " " + styles.randomCard}>
            
            {!cocktail.strDrink ?
              <h2 className={styles.randomCardFront}>Click Here for a random cocktail!</h2>
              :
              <div>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} width="300px"></img>
                <p>ingredients: </p>
                <ul>
                  {ingredientList}
                </ul>
              </div>
            }

          </div>

        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  const randomDrink = await res.json()
  return{
    props: {
      randomDrink
    }
  }
}
