//Mando la cantidad de advertencias para que determine los puntos en contra

function deductPoints(warnings) {
    let minusPoints = 0;

    for (let i = 0; i < warnings; i++) {
        if (i % 3 == 0) {
            minusPoints += 1;
        }
    }
	return minusPoints;
}

export default deductPoints
