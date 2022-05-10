import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function Output() {
    const [ricerca, setRicerca] = useState(null);
    const [piatti_rosso_leggero, setPiattiRossoLeggero] = useState(null);
    const [piatti_rosso_strutturato, setPiattiRossoStruturato] = useState(null);
    const [piatti_bianco_leggero, setPiattiBiancoLeggero] = useState(null);
    const [piatti_bianco_strutturato, setPiattiBiancoStruturato] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/ricerca/1')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setRicerca(data)
            });
    }, []);

    const antipasto = ricerca && ricerca.antipasto;
    const primo = ricerca && ricerca.primo;
    const secondo = ricerca && ricerca.secondo;
    const dolce = ricerca && ricerca.dolce;

    useEffect(() => {
        fetch('http://localhost:5000/rosso_leggero')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setPiattiRossoLeggero(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/rosso_strutturato')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setPiattiRossoStruturato(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/bianco_leggero')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setPiattiBiancoLeggero(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/bianco_strutturato')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setPiattiBiancoStruturato(data);
            });
    }, []);

    const antipasto_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero[0].antipasto;
    const primo_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero[0].primo;
    const secondo_rosso_leggero = piatti_rosso_leggero && piatti_rosso_leggero[0].secondo;

    const antipasto_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato[0].antipasto;
    const primo_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato[0].primo;
    const secondo_rosso_strutturato = piatti_rosso_strutturato && piatti_rosso_strutturato[0].secondo;

    const antipasto_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero[0].antipasto;
    const primo_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero[0].primo;
    const secondo_bianco_leggero = piatti_bianco_leggero && piatti_bianco_leggero[0].secondo;

    const antipasto_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato[0].antipasto;
    const primo_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato[0].primo;
    const secondo_bianco_strutturato = piatti_bianco_strutturato && piatti_bianco_strutturato[0].secondo;

    let output = new Set();
    let vino_rosso_leggero = {
        image: '',
        nome: '',
        descrizione: ''
    }
    let vino_rosso_strutturato = {
        image: '',
        nome: '',
        descrizione: ''
    }
    let vino_bianco_leggero = {
        image: '',
        nome: '',
        descrizione: ''
    }
    let vino_bianco_strutturato = {
        image: '',
        nome: '',
        descrizione: ''
    }

    if (antipasto_rosso_leggero && primo_rosso_leggero && secondo_rosso_leggero) {
        for (let i = 0; i < antipasto_rosso_leggero.length; i++) {
            if (antipasto_rosso_leggero[i] === antipasto) {
                //console.log("Uguali antipasti")
                vino_rosso_leggero.image = 'images/rosso-leggero.jpeg';
                vino_rosso_leggero.nome = "Rosso Leggero";
                vino_rosso_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_rosso_leggero)
            }
        }
        for (let j = 0; j < primo_rosso_leggero.length; j++) {
            if (primo_rosso_leggero[j] === primo) {
                //console.log("Uguali primi")
                vino_rosso_leggero.image = 'images/rosso-leggero.jpeg';
                vino_rosso_leggero.nome = "Rosso Leggero";
                vino_rosso_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_rosso_leggero)
            }
        }
        for (let i = 0; i < secondo_rosso_leggero.length; i++) {
            if (secondo_rosso_leggero[i] === secondo) {
                //console.log("Uguali secondi")
                vino_rosso_leggero.image = 'images/rosso-leggero.jpeg';
                vino_rosso_leggero.nome = "Rosso Leggero";
                vino_rosso_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_rosso_leggero)
            }
        }
    }

    if (antipasto_rosso_strutturato && primo_rosso_strutturato && secondo_rosso_strutturato) {
        for (let i = 0; i < antipasto_rosso_strutturato.length; i++) {
            if (antipasto_rosso_strutturato[i] === antipasto) {
                //console.log("Uguali antipasti")
                vino_rosso_strutturato.image = 'images/rosso-strutturato.jpeg';
                vino_rosso_strutturato.nome = "Rosso Strutturato";
                vino_rosso_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_rosso_strutturato)
            }
        }
        for (let j = 0; j < primo_rosso_strutturato.length; j++) {
            if (primo_rosso_strutturato[j] === primo) {
                //console.log("Uguali primi")
                vino_rosso_strutturato.image = 'images/rosso-strutturato.jpeg';
                vino_rosso_strutturato.nome = "Rosso Strutturato";
                vino_rosso_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_rosso_strutturato)
            }
        }
        for (let i = 0; i < secondo_rosso_strutturato.length; i++) {
            if (secondo_rosso_strutturato[i] === secondo) {
                //console.log("Uguali secondi")
                vino_rosso_strutturato.image = 'images/rosso-strutturato.jpeg';
                vino_rosso_strutturato.nome = "Rosso Strutturato";
                vino_rosso_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_rosso_strutturato)
            }
        }
    }


    if (antipasto_bianco_leggero && primo_bianco_leggero && secondo_bianco_leggero) {
        for (let i = 0; i < antipasto_bianco_leggero.length; i++) {
            if (antipasto_bianco_leggero[i] === antipasto) {
                vino_bianco_leggero.image = 'images/bianco-leggero.png';
                vino_bianco_leggero.nome = "Bianco Leggero";
                vino_bianco_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_bianco_leggero)
            }
        }
        for (let j = 0; j < primo_bianco_leggero.length; j++) {
            if (primo_bianco_leggero[j] === primo) {
                vino_bianco_leggero.image = 'images/bianco-leggero.png';
                vino_bianco_leggero.nome = "Bianco Leggero";
                vino_bianco_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_bianco_leggero)
            }
        }
        for (let i = 0; i < secondo_bianco_leggero.length; i++) {
            if (secondo_bianco_leggero[i] === secondo) {
                vino_bianco_leggero.image = 'images/bianco-leggero.png';
                vino_bianco_leggero.nome = "Bianco Leggero";
                vino_bianco_leggero.descrizione = "Un vino leggero da accompagnare a piatti con gusti delicati non troppo travolgenti"
                output.add(vino_bianco_leggero)
            }
        }
    }

    if (antipasto_bianco_strutturato && primo_bianco_strutturato && secondo_bianco_strutturato) {
        for (let i = 0; i < antipasto_bianco_strutturato.length; i++) {
            if (antipasto_bianco_strutturato[i] === antipasto) {
                vino_bianco_strutturato.image = 'images/bianco-strutturato.jpeg';
                vino_bianco_strutturato.nome = "Bianco Strutturato";
                vino_bianco_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_bianco_strutturato)
            }
        }
        for (let j = 0; j < primo_bianco_strutturato.length; j++) {
            if (primo_bianco_strutturato[j] === primo) {
                vino_bianco_strutturato.image = 'images/bianco-strutturato.jpeg';
                vino_bianco_strutturato.nome = "Bianco Strutturato";
                vino_bianco_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_bianco_strutturato)
            }
        }
        for (let i = 0; i < secondo_bianco_strutturato.length; i++) {
            if (secondo_bianco_strutturato[i] === secondo) {
                vino_bianco_strutturato.image = 'images/bianco-strutturato.jpeg';
                vino_bianco_strutturato.nome = "Bianco Strutturato";
                vino_bianco_strutturato.descrizione = "Un vino strutturato da accompagnare a piatti con gusti forti e decisi per godersi al meglio la cena"
                output.add(vino_bianco_strutturato)
            }
        }
    }


    // Converting the SET into an ARRAY
    let final = Array;
    final = Array.from(output);
    console.log(final)

    return (
        <div className="centered-container">
            <div className="card-group">
                {final.map((vino) => (
                    <div className="card border-15 outer-shadow-2">
                    <div className="card-image border-15"><img src={vino.image} layout='fill'></img></div>
                    <div className="card-body">
                        <h3 className="card-title">{vino.nome}</h3>
                        <p className="card-paragraph">
                            {vino.descrizione}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div >
    );
}