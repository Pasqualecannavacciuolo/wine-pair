import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
        antipasto: event.target.antipasto.value,
        primo: event.target.primo.value,
        secondo: event.target.secondo.value,
        dolce: event.target.dolce.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)


    fetch('http://localhost:5000/ricerca', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSONdata
    });

    //console.log(result);
    alert(`I dati sono stati registrati`);
    
    // Redirecting to output page
    router.push('/output')
  }

  return (
    <div className={styles.main_container}>
      <form onSubmit={handleSubmit} className={styles.form} method="post">

          <label className={styles.label} htmlFor="antipasto">Antipasto </label>
          <select className={styles.select} name="antipasto" id="antipasto">
            <option value="antipasto a base di carne rossa">A base di carne rossa</option>
            <option value="antipasto a base di carne bianca">A base di carne bianca</option>
            <option value="antipasto a base di pesce leggero">A base di pesce leggero</option>
            <option value="antipasto a base di pesce ricco">A base di pesce ricco</option>
            <option value="salumi affettati">Salumi affettati</option>
            <option value="formaggi freschi">Formaggi freschi</option>
            <option value="formaggi stagionati">Formaggi stagionati</option>
            <option value="verdure">Verdure</option>
          </select>

          <label className={styles.label} htmlFor="primo">Primo </label>
          <select className={styles.select} name="primo" id="primo">
            <option value="primo a base di carne rossa">A base di carne rossa</option>
            <option value="primo a base di carne bianca">A base di carne bianca</option>
            <option value="primo a base di sugo di carne">A base di sugo di carne</option>
            <option value="primo a base di pesce leggero">A base di pesce leggero</option>
            <option value="primo a base di pesce ricco">A base di pesce ricco</option>
          </select>

          <label className={styles.label} htmlFor="secondo">Secondo </label>
          <select className={styles.select} name="secondo" id="secondo">
            <option value="secondo a base di carne rossa">A base di carne rossa</option>
            <option value="secondo a base di pesce leggero">A base di pesce leggero</option>
            <option value="secondo a base di pesce ricco">A base di pesce ricco</option>
            <option value="secondo a base di carne bianca">A base di carne bianca</option>
          </select>

          <label className={styles.label} htmlFor="dolce">Dolce </label>
          <select className={styles.select} name="dolce" id="dolce">
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>

          <input className={styles.form_button} type="submit" value="Submit" />

      </form>
    </div>
  )
}
