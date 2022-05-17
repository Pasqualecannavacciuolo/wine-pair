import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { supabase } from "../lib/initSupabase";
import form_style from "../styles/Form.module.css";

import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';



export default function Output() {
    const router = useRouter();

    const [ricerca, setRicerca] = useState(null);
    const [piatti_rosso_leggero, setPiattiRossoLeggero] = useState(null);
    const [piatti_rosso_strutturato, setPiattiRossoStruturato] = useState(null);
    const [piatti_bianco_leggero, setPiattiBiancoLeggero] = useState(null);
    const [piatti_bianco_strutturato, setPiattiBiancoStruturato] = useState(null);

    let local_id;

    useEffect(() => {
        // Getting the session id to search the rich SEARCH in the Database
        local_id = sessionStorage.getItem("local_id");
        getRicerca();
    }, []);

    async function getRicerca() {
        try {
            let { data, error, status } = await supabase
                .from('ricerca')
                .select(`antipasto, primo, secondo`)
                .eq('id', local_id)
                .single();

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setRicerca(data)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const antipasto = ricerca && ricerca.antipasto;
    const primo = ricerca && ricerca.primo;
    const secondo = ricerca && ricerca.secondo;
    const dolce = ricerca && ricerca.dolce;

    useEffect(() => {
        getRossoLeggero();
    }, []);

    async function getRossoLeggero() {
        try {
            let { data, error, status } = await supabase
                .from('Wines')
                .select(`rosso_leggero->antipasto, rosso_leggero->primo, rosso_leggero->secondo`)
                .single();

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setPiattiRossoLeggero(data);
            }
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getRossoStrutturato();
    }, []);

    async function getRossoStrutturato() {
        try {
            let { data, error, status } = await supabase
                .from('Wines')
                .select(`rosso_strutturato->antipasto, rosso_strutturato->primo, rosso_strutturato->secondo`)
                .single();

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setPiattiRossoStruturato(data);
            }
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getBiancoLeggero();
    }, []);

    async function getBiancoLeggero() {
        try {
            let { data, error, status } = await supabase
                .from('Wines')
                .select(`bianco_leggero->antipasto, bianco_leggero->primo, bianco_leggero->secondo`)
                .single();

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setPiattiBiancoLeggero(data);
            }
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getBiancoStrutturato();
    }, []);

    async function getBiancoStrutturato() {
        try {
            let { data, error, status } = await supabase
                .from('Wines')
                .select(`bianco_strutturato->antipasto, bianco_strutturato->primo, bianco_strutturato->secondo`)
                .single();

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setPiattiBiancoStruturato(data);
            }
        } catch (error) {
            alert(error.message)
        }
    }

    // Getting all the dishes for every wine and course
    const antipasto_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero.antipasto;
    const primo_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero.primo;
    const secondo_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero.secondo;

    const antipasto_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato.antipasto;
    const primo_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato.primo;
    const secondo_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato.secondo;

    const antipasto_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero.antipasto;
    const primo_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero.primo;
    const secondo_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero.secondo;

    const antipasto_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato.antipasto;
    const primo_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato.primo;
    const secondo_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato.secondo;

    let output = new Set();

    // This object contains the basic information of a wine
    const vino = function (id, image, nome, descrizione) {
        let vino_generale = {};
        vino_generale.id = id;
        vino_generale.image = image;
        vino_generale.nome = nome;
        vino_generale.descrizione = descrizione;
        return vino_generale;
    }

    // Searching the input in the dishes of every courses for every wine
    if (antipasto_rosso_leggero && primo_rosso_leggero && secondo_rosso_leggero) {
        let vino_rosso_leggero = new vino(new Date().getTime() + Math.random(), '/images/rosso-leggero.jpeg', "Rosso Leggero", "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti");
        for (let i = 0; i < antipasto_rosso_leggero.length; i++) {
            if (antipasto_rosso_leggero[i] === antipasto) {
                output.add(vino_rosso_leggero)
            }
        }
        for (let j = 0; j < primo_rosso_leggero.length; j++) {
            if (primo_rosso_leggero[j] === primo) {
                output.add(vino_rosso_leggero)
            }
        }
        for (let i = 0; i < secondo_rosso_leggero.length; i++) {
            if (secondo_rosso_leggero[i] === secondo) {
                output.add(vino_rosso_leggero);
            }
        }
    }

    if (antipasto_rosso_strutturato && primo_rosso_strutturato && secondo_rosso_strutturato) {
        let vino_rosso_strutturato = new vino(new Date().getTime() + Math.random(), '/images/rosso-strutturato.jpeg', "Rosso Strutturato", "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena");
        for (let i = 0; i < antipasto_rosso_strutturato.length; i++) {
            if (antipasto_rosso_strutturato[i] === antipasto) {
                output.add(vino_rosso_strutturato);
            }
        }
        for (let j = 0; j < primo_rosso_strutturato.length; j++) {
            if (primo_rosso_strutturato[j] === primo) {
                output.add(vino_rosso_strutturato)
            }
        }
        for (let i = 0; i < secondo_rosso_strutturato.length; i++) {
            if (secondo_rosso_strutturato[i] === secondo) {
                output.add(vino_rosso_strutturato)
            }
        }
    }


    if (antipasto_bianco_leggero && primo_bianco_leggero && secondo_bianco_leggero) {
        let vino_bianco_leggero = new vino(new Date().getTime() + Math.random(), '/images/bianco-leggero.png', "Bianco Leggero", "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti");
        for (let i = 0; i < antipasto_bianco_leggero.length; i++) {
            if (antipasto_bianco_leggero[i] === antipasto) {
                output.add(vino_bianco_leggero)
            }
        }
        for (let j = 0; j < primo_bianco_leggero.length; j++) {
            if (primo_bianco_leggero[j] === primo) {
                output.add(vino_bianco_leggero)
            }
        }
        for (let i = 0; i < secondo_bianco_leggero.length; i++) {
            if (secondo_bianco_leggero[i] === secondo) {
                output.add(vino_bianco_leggero)
            }
        }
    }

    if (antipasto_bianco_strutturato && primo_bianco_strutturato && secondo_bianco_strutturato) {
        let vino_bianco_strutturato = new vino(new Date().getTime() + Math.random(), '/images/bianco-strutturato.jpeg', "Bianco Strutturato", "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena");
        for (let i = 0; i < antipasto_bianco_strutturato.length; i++) {
            if (antipasto_bianco_strutturato[i] === antipasto) {
                output.add(vino_bianco_strutturato)
            }
        }
        for (let j = 0; j < primo_bianco_strutturato.length; j++) {
            if (primo_bianco_strutturato[j] === primo) {
                output.add(vino_bianco_strutturato)
            }
        }
        for (let i = 0; i < secondo_bianco_strutturato.length; i++) {
            if (secondo_bianco_strutturato[i] === secondo) {
                output.add(vino_bianco_strutturato)
            }
        }
    }


    // Converting the SET into an ARRAY
    let final = Array;
    final = Array.from(output);
    console.log(final)

    

   
    const backToHome = async () => {
        local_id = sessionStorage.getItem("local_id");
        console.log("Local id: " + local_id);
        const { data } = await supabase
            .from('ricerca')
            .delete()
            .match({ id: local_id })
        router.push('/form');
    }


    return (
        <div className={form_style.form_bg_image}>
            <Center className="cards-wrapper-title"><Heading m={10} color={'gray.900'} className="form-title">I vini consigliati</Heading></Center>

            <Center>
                <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                    {final.map((vino) => (
                        <Box
                            className="card"
                            key={vino.id}
                            maxW={'250px'}
                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={6}
                            overflow={'hidden'}>
                            <Box>
                                <img src={vino.image}></img>
                            </Box>
                            <Stack>
                                <Heading
                                    color={'gray.700'}
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    {vino.nome}
                                </Heading>
                                <Text color={'gray.500'}>
                                    {vino.descrizione}
                                </Text>
                            </Stack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Center>

            <Center>
                <Button
                    onClick={backToHome}
                    type='submit'
                    className="margin-TopAndBottom"
                    borderRadius='5px'
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'purple'}
                    bg={'purple.600'}
                    _hover={{ bg: 'purple.700' }}>
                    Ritorna al menu
                </Button>
            </Center>

        </div>
    );
}