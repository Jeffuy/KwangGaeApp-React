import React from "react";
//DEFINO LOS DESAFIOS
const challenge = [
    { text: "6 puntos con dollyo", points: 2, completed: false },
    { text: "dos blitz", points: 2, completed: false },
    { text: "la combinacion puño, puño, puño, dolyo 2 veces", points: 3, completed: false },
    { text: "3 puntos con una patada zona alta", points: 3, completed: false },
    { text: "un contragolpe con giro tip", points: 2, completed: false },
    { text: "dos contragolpes con giro tip", points: 3, completed: false },
    { text: "tres contragolpes con giro tip", points: 5, completed: false },
    { text: "un contragolpe con giro gancho", points: 2, completed: false },
    { text: "un contragolpe con giro gancho", points: 3, completed: false },
    { text: "dos contragolpes con giro gancho", points: 5, completed: false },
    { text: "tres contragolpes con giro gancho", points: 5, completed: false },
    { text: "2 puntos con patada descendente", points: 3, completed: false },
    { text: "4 puntos con patada descendente", points: 4, completed: false },
    { text: "3 puntos con una patada descendente", points: 4, completed: false },
    { text: "que el rival se detenga 3 veces por una yop", points: 2, completed: false },
    { text: "que el rival reciba 3 advertencias por salida", points: 3, completed: false },
    { text: "que el rival retroceda 3 veces por tus amagues", points: 2, completed: false },
    { text: "un punteo con yop y pegar gancho a la cabeza", points: 4, completed: false },
    { text: "un punteo con yop y pegar dolyo a la cabeza con la misma pierna", points: 4, completed: false },
    { text: "un doble punteo con yop y pegar dolyo con la otra pierna", points: 3, completed: false },
    { text: "un esquive por debajo de una yop", points: 3, completed: false },
    { text: "tres contragolpes a una yop del rival", points: 5, completed: false },
    { text: "tres contragolpes a un dollyo del rival", points: 5, completed: false },
    { text: "convertir un punteo en una descendente que puntue", points: 5, completed: false },
    { text: "terminar una pelea sin recibir un solo punto", points: 5, completed: false },
    { text: "terminar una pelea habiendo conseguido mas de 10 puntos", points: 5, completed: false },
    { text: "que el rival te haga 2 puntos al empezar el combate y luego ganar", points: 3, completed: false },
    { text: "que el rival te haga 1 punto al empezar el combate y luego ganar", points: 2, completed: false },
    { text: "que el rival te haga 3 puntos al empezar el combate y luego ganar", points: 4, completed: false },
    { text: "que el rival te haga 4 puntos al empezar el combate y luego ganar", points: 5, completed: false },
    { text: "que el rival te haga 5 puntos al empezar el combate y luego ganar", points: 6, completed: false },
    { text: "una mariposa que puntue", points: 3, completed: false },
    { text: "tres giros seguidos y que por lo menos uno conecte", points: 4, completed: false },
    { text: "puntos con yop, dollyos y puños en la misma pelea", points: 3, completed: false },
    { text: "un antcipo a un dolyo con blitz", points: 2, completed: false },
    { text: "dos anticipos a dolyos con blitz", points: 3, completed: false },
    { text: "tres anticipos a dolyos con blitz", points: 4, completed: false },
    { text: "una yop al cabezal", points: 2, completed: false },
    { text: "un golpe de nudillo descendente, con o sin salto", points: 2, completed: false },
    { text: "un esquive a un blitz saltando hacia atrás con golpe de nudillo", points: 4, completed: false },
    { text: "puntos solo con patadas a zona alta y ganar", points: 5, completed: false },
    { text: "puntos solo con puños y ganar", points: 5, completed: false },
];

let puntosElegido;
let challenges = [];
let cgs = "adasd";
let suma;

function sumaPuntos(puntos) {
    let puntosTotales = JSON.parse(localStorage.getItem("puntosTotales"));
    suma = parseInt(puntosTotales + puntos);
    if (suma < 0) {
        suma = 0;
    }
    localStorage.setItem("puntosTotales", JSON.stringify(suma));

	return suma;

    //let puntosView = document.getElementById("puntos");
    //puntosView.innerHTML = `Hasta ahora has conseguido ${suma} puntos.`
}

// ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
function elegirChallenge() {
    const listaDesafios = challenge;
    const listaPuntos = challenge;
    let desafioElegido;
    let random = 0;

    random = Math.floor(Math.random() * listaDesafios.length);
    desafioElegido = Object.keys(listaDesafios[random]);
    puntosElegido = Object.values(listaPuntos[random]);

    saveTask(desafioElegido, puntosElegido);
}

// function borrar() {
// 	const result = document.getElementById("result");
// 	result.innerText = "";
// }

function saveTask(desafio, puntos) {
    if (localStorage.getItem("puntos") === null) {
        let puntajes = [];
        puntajes.push(puntos);
        localStorage.setItem("puntos", JSON.stringify(puntajes));
    } else {
        let puntajes = JSON.parse(localStorage.getItem("puntos"));
        puntajes.push(puntos);
        localStorage.setItem("puntos", JSON.stringify(puntajes));
    }

    if (localStorage.getItem("desafios") === null) {
        let desafios = [];
        desafios.push(desafio);
        localStorage.setItem("desafios", JSON.stringify(desafios));
    } else {
        let desafios = JSON.parse(localStorage.getItem("desafios"));
        desafios.push(desafio);
        localStorage.setItem("desafios", JSON.stringify(desafios));
    }

    getTasks();
}

function getTasks() {
    if (localStorage.getItem("desafios") != null) {
        let desafios = JSON.parse(localStorage.getItem("desafios"));
        let puntos = JSON.parse(localStorage.getItem("puntos"));

        challenges = [];
        for (let i = 0; i < desafios.length; i++) {
            let desafio = desafios[i];
            let punto = puntos[i];

            challenges.push({ id: i, task: desafio, points: punto });
        }
        return challenges;
    }
}

function endTask(posicion, status) {
    let desafios = JSON.parse(localStorage.getItem("desafios"));
    let puntos = JSON.parse(localStorage.getItem("puntos"));

    if (status == "false") {
        desafios.splice(posicion, 1);
        puntos.splice(posicion, 1);
    } else {
        sumaPuntos(parseInt(puntos[posicion]));
        desafios.splice(posicion, 1);
        puntos.splice(posicion, 1);
    }

    localStorage.setItem("desafios", JSON.stringify(desafios));
    localStorage.setItem("puntos", JSON.stringify(puntos));
    getTasks();
	renderOnScreen()
}

const failed = () => {
    console.log("Failed to load challenges");
};

const achieved = () => {
    console.log("ASDadasdad to load challenges");
};

// Muestra los desafios actuales en pantalla

const renderOnScreen = () => {
    cgs = (
        <>
            {challenges.length !== 0 ? (
                challenges.map((challenge) => (
                    <div
                        className="card mb-4 text-center text-black"
                        style={{ borderRadius: "0.3rem" }}
                        key={challenge.id}
                    >
                        <div className="card-body">
                            <p>Tienes que hacer {challenge.task} .</p>
                            <p>
                                <b>RECOMPENSA: {challenge.points} puntos</b>
                            </p>
                            <a
                                onClick={() => hola()}
                                className="btn btn-danger"
                            >
                                Fallado
                            </a>
                            <a
                                onClick={() => endTask(challenge.id, "true")}
                                className="btn btn-primary"
                            >
                                Completado
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay desafíos</p>
            )}
        </>
    );
    return cgs;
};

getTasks();
sumaPuntos(0);

export default {
    elegirChallenge,
    saveTask,
    getTasks,
    endTask,
    puntosElegido,
    challenge,
    challenges,
    failed,
    renderOnScreen,
    cgs,
	suma,
};
