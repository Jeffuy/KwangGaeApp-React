const questionsWhite = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsYellowStripe = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsYellow = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsGreenStripe = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsGreen = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsBlueStripe = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsBlue = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsRedStripe = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsRed = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsBlackStripe = [
    {
        questionText: "¿En qué país se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "Japon", isCorrect: false },
            { answerText: "China", isCorrect: false },
            { answerText: "Corea", isCorrect: true },
            { answerText: "Uruguay", isCorrect: false },
        ],
    },
    {
        questionText: "¿En que año se creó el Taekwon-Do?",
        answerOptions: [
            { answerText: "1325", isCorrect: false },
            { answerText: "1955", isCorrect: true },
            { answerText: "1980", isCorrect: false },
            { answerText: "1936", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos movimientos tiene la cruz de ataque?",
        answerOptions: [
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: false },
            { answerText: "6", isCorrect: false },
        ],
    },
    {
        questionText: "¿Cuántos nudos lleva el cinto del dobok?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
            { answerText: "Todos los que pueda", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿Cómo se llama la posición en que se realizan los movimientos de la cruz de defensa?",
        answerOptions: [
            { answerText: "Jumbi", isCorrect: false },
            { answerText: "Posición de forma", isCorrect: false },
            { answerText: "Posición de ataque", isCorrect: false },
            { answerText: "Gunnun sogi", isCorrect: true },
        ],
    },
    {
        questionText: "¿Cúal de estos no es un principio del Taekwon-Do?",
        answerOptions: [
            { answerText: "Cortesía", isCorrect: false },
            { answerText: "Perseverancia", isCorrect: false },
            { answerText: "Paciencia", isCorrect: true },
            { answerText: "Espíritu indomable", isCorrect: false },
        ],
    },
    {
        questionText: "Una persona tiene integridad cuando...",
        answerOptions: [
            { answerText: "...sabe integrarse a un grupo", isCorrect: false },
            {
                answerText: "...sabe diferenciar lo correcto de lo incorrecto",
                isCorrect: true,
            },
            { answerText: "...miente muy seguido", isCorrect: false },
            { answerText: "...nunca se rinde", isCorrect: false },
        ],
    },
    {
        questionText:
            "¿A qué altura va la mano que defiende al realizar una defensa media?",
        answerOptions: [
            { answerText: "A la boca del estómago ", isCorrect: false },
            { answerText: "A la del hombro", isCorrect: true },
            { answerText: "A la de la nariz", isCorrect: false },
            { answerText: "A la del cinturón", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Quién es el creador del Taekwon-Do?",
        answerOptions: [
            { answerText: "Chang Yong Sae ", isCorrect: false },
            { answerText: "Dong Qui Kong", isCorrect: false },
            { answerText: "Choi Hong Hi", isCorrect: true },
            { answerText: "Juan Pedro Veiga", isCorrect: false },
        ],
    },
	{
        questionText:
            'Si el profesor me dice "Charyot"; ¿qué estoy por hacer?',
        answerOptions: [
            { answerText: "Saludar", isCorrect: true },
            { answerText: "Golpear", isCorrect: false },
            { answerText: "Practicar la forma", isCorrect: false },
            { answerText: "Comenzar un trabajo", isCorrect: false },
        ],
    },
	{
        questionText:
            "¿Qué debo hacer si una técnica no me sale?",
        answerOptions: [
            { answerText: "Buscar excusas para no tener que hacerla", isCorrect: false },
            { answerText: "Seguir practicándola exactamente igual", isCorrect: false },
            { answerText: "Pensar la razón por la que no me sale y corregir ese detalle", isCorrect: true },
            { answerText: "Intentar no tener que hacerla", isCorrect: false },
        ],
    },
	{
        questionText:
            "Cuál de estás opciones es falsa?",
        answerOptions: [
            { answerText: "La cruz de defensa tiene 8 movimientos", isCorrect: false },
            { answerText: "La yop chagi no debe usarse en lucha", isCorrect: false },
            { answerText: "Todas las formas empiezan y terminan en el mismo lugar", isCorrect: false },
            { answerText: "La insignia del dobok se usa del lado derecho", isCorrect: true },
        ],
    },
];

const questionsUmpire = [
    {
        questionText: "¿Cuál de las siguientes opciones no es una advertencia?",
        answerOptions: [
            { answerText: "Caerse", isCorrect: false },
            { answerText: "Saltar", isCorrect: true },
            { answerText: "Pegar abajo", isCorrect: false },
            { answerText: "Hablar", isCorrect: false },
            { answerText: "Salir del perímetro", isCorrect: false },
        ],
    },

    {
        questionText: "¿Cuántos puntos vale una patada con giro a la cabeza?",
        answerOptions: [
            { answerText: "5", isCorrect: false },
            { answerText: "3", isCorrect: true },
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "Advertencia por dar la espalda", isCorrect: false },
        ],
    },

    {
        questionText: "¿Cuál de estas protecciones no es obligatoria?",
        answerOptions: [
            { answerText: "Bucal", isCorrect: false },
            { answerText: "Protector de pie", isCorrect: false },
            { answerText: "Cabezal", isCorrect: false },
            { answerText: "Inguinal", isCorrect: false },
            { answerText: "Tibial", isCorrect: true },
        ],
    },

    {
        questionText: "¿Cuántos jueces de esquina debe haber en un combate?",
        answerOptions: [
            { answerText: "3", isCorrect: false },
            { answerText: "4", isCorrect: true },
            { answerText: "Depende de la categoría", isCorrect: false },
            { answerText: "2", isCorrect: false },
            {
                answerText: "Los necesarios para puntuar varios combates",
                isCorrect: false,
            },
        ],
    },

    {
        questionText:
            "¿Cuántas formas realiza un cinto negro en competencias oficiales?",
        answerOptions: [
            { answerText: "2", isCorrect: true },
            { answerText: "1", isCorrect: false },
            { answerText: "Todas las de su grado", isCorrect: false },
            { answerText: "Las que el decida", isCorrect: false },
            { answerText: "Todas las formas que conozca", isCorrect: false },
        ],
    },

    {
        questionText: "¿Con cuantas advertencias se descuenta un punto?",
        answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: false },
            { answerText: "3", isCorrect: true },
            { answerText: "4", isCorrect: false },
            { answerText: "5", isCorrect: false },
        ],
    },

    {
        questionText:
            "Si un competidor tiene más de 3 puntos en contra directos...",
        answerOptions: [
            {
                answerText: "...sigue peleando, pero seguramente perderá",
                isCorrect: false,
            },
            {
                answerText: "...se le advierte que se controle",
                isCorrect: false,
            },
            { answerText: "...muere", isCorrect: false },
            { answerText: "...es descalificado", isCorrect: true },
            {
                answerText:
                    "...se le sanciona y debe pedir permiso para competir nuevamente",
                isCorrect: false,
            },
        ],
    },

    {
        questionText: "En caso de empate: ",
        answerOptions: [
            {
                answerText:
                    "Se realiza un nuevo round pero se mantienen los puntos y advertencias",
                isCorrect: false,
            },
            {
                answerText: "Gana el competidor con menos advertencias",
                isCorrect: false,
            },
            {
                answerText:
                    "Se realiza un nuevo round, reiniciando puntos y advertencias",
                isCorrect: true,
            },
            {
                answerText: "Los jueces deciden entre todos un ganador",
                isCorrect: false,
            },
            {
                answerText:
                    "Se realiza un nuevo round, reiniciando los puntos pero manteniendo las advertencias",
                isCorrect: false,
            },
        ],
    },
];

export const questionList = [questionsWhite, questionsYellowStripe, questionsYellow, questionsGreenStripe, questionsGreen, questionsBlueStripe, questionsBlue, questionsRedStripe, questionsRed, questionsBlackStripe, questionsUmpire];


