import React from 'react'

const Prueba = (props) => {

	const pruebita = () => props.pruebita()
	return (
		<div>
			<button
            className="btn btn-danger btn-lg btn-block mt-3 mb-2 shadow-none"
            type="button"
            onClick={() => pruebita}
        >
            Hola
        </button>
		</div>
	)
}

export default Prueba
