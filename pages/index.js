import { useRouter } from 'next/router'
import { supabase } from "../lib/initSupabase";
import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

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
    //const JSONdata = JSON.stringify(data)


    /*fetch('http://localhost:5000/ricerca', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSONdata
    });*/


    const { dati } = await supabase
      .from("ricerca")
      .insert([
        {
          id: 1,
          antipasto: data.antipasto,
          primo: data.primo,
          secondo: data.secondo
        }
      ]);

    //console.log(result);
    alert(`I dati sono stati registrati`);

    // Redirecting to output page
    router.push('/output')
  }

  return (
    <Container maxW='2xl' centerContent>
      
        <form className="border-25 outer-shadow-2" onSubmit={handleSubmit} method="post">
          <FormControl>
            <FormLabel htmlFor='antipasto'>Antipasto</FormLabel>
            <Select name="antipasto" id="antipasto" placeholder='Inserire antipasto'>
            <option value="antipasto a base di carne rossa">A base di carne rossa</option>
            <option value="antipasto a base di carne bianca">A base di carne bianca</option>
            <option value="antipasto a base di pesce leggero">A base di pesce leggero</option>
            <option value="antipasto a base di pesce ricco">A base di pesce ricco</option>
            <option value="salumi affettati">Salumi affettati</option>
            <option value="formaggi freschi">Formaggi freschi</option>
            <option value="formaggi stagionati">Formaggi stagionati</option>
            <option value="verdure">Verdure</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='primo'>Primo</FormLabel>
            <Select name="primo" id="primo" placeholder='Inserire primo piatto'>
            <option value="primo a base di carne rossa">A base di carne rossa</option>
            <option value="primo a base di carne bianca">A base di carne bianca</option>
            <option value="primo a base di sugo di carne">A base di sugo di carne</option>
            <option value="primo a base di pesce leggero">A base di pesce leggero</option>
            <option value="primo a base di pesce ricco">A base di pesce ricco</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='secondo'>Primo</FormLabel>
            <Select name="secondo" id="secondo" placeholder='Inserire secondo piatto'>
            <option value="secondo a base di carne rossa">A base di carne rossa</option>
            <option value="secondo a base di carne bianca">A base di carne bianca</option>
            <option value="secondo a base di pesce leggero">A base di pesce leggero</option>
            <option value="secondo a base di pesce ricco">A base di pesce ricco</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='dolce'>Dolce</FormLabel>
            <Select name="dolce" id="dolce" placeholder='Presenza di un dolce'>
              <option value="si">Si</option>
              <option value="no">No</option>
            </Select>
          </FormControl>

          <Button type='Submit' className="button button-default margin-TopAndBottom border-5">Invia</Button>
        </form>
      
    </Container>
  )
}
