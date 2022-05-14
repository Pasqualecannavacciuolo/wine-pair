import { useRouter } from 'next/router'
import { supabase } from "../lib/initSupabase";
import form_style from "../styles/Form.module.css";
import { Container } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Heading,
  Center,
} from '@chakra-ui/react';

export default function MenuForm() {
  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      antipasto: antipasto.value,
      primo: primo.value,
      secondo: secondo.value,
      dolce: dolce.value
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
    <div className={form_style.form_bg_image}>
    <Container maxW='2xl' centerContent>
    
        <form className="border-25 outer-shadow-2" onSubmit={handleSubmit} method="post">
          <Center><Heading m={10} color={'gray.900'} className="form-title">Indicaci il tuo menu</Heading></Center>
          <FormControl>
            <FormLabel htmlFor='antipasto'>Antipasto</FormLabel>
            <Select color={'gray.500'} name="antipasto" id="antipasto" placeholder='Inserire antipasto'>
              <option value='antipasto a base di carne rossa'>A base di carne rossa</option>
              <option value='antipasto a base di carne bianca'>A base di carne bianca</option>
              <option value='antipasto a base di pesce leggero'>A base di pesce leggero</option>
              <option value='antipasto a base di pesce ricco'>A base di pesce ricco</option>
              <option value='salumi affettati'>Salumi affettati</option>
              <option value='formaggi freschi'>Formaggi freschi</option>
              <option value='formaggi stagionati'>Formaggi stagionati</option>
              <option value='verdure'>Verdure</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='primo'>Primo</FormLabel>
            <Select color={'gray.500'} name="primo" id="primo" placeholder='Inserire primo piatto'>
              <option value="primo a base di carne rossa">A base di carne rossa</option>
              <option value="primo a base di carne bianca">A base di carne bianca</option>
              <option value="primo a base di sugo di carne">A base di sugo di carne</option>
              <option value="primo a base di pesce leggero">A base di pesce leggero</option>
              <option value="primo a base di pesce ricco">A base di pesce ricco</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='secondo'>Secondo</FormLabel>
            <Select color={'gray.500'} name="secondo" id="secondo" placeholder='Inserire secondo piatto'>
              <option value="secondo a base di carne rossa">A base di carne rossa</option>
              <option value="secondo a base di carne bianca">A base di carne bianca</option>
              <option value="secondo a base di pesce leggero">A base di pesce leggero</option>
              <option value="secondo a base di pesce ricco">A base di pesce ricco</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='dolce'>Dolce</FormLabel>
            <Select color={'gray.500'} name="dolce" id="dolce" placeholder='Presenza di un dolce'>
              <option value="si">Si</option>
              <option value="no">No</option>
            </Select>
          </FormControl>

          <Button
              onClick={handleSubmit}
              type='submit'
              className="margin-TopAndBottom"
              borderRadius='5px'
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'purple'}
              bg={'purple.600'}
              _hover={{ bg: 'purple.700' }}>
              Invia
            </Button>
        </form>
      
    </Container>
    </div>
  )
}
