import React from 'react';
import ReactDOM from 'react-dom';
import Prueba from './components/Prueba'

const App = () => {
    return (
        <div>
            <Prueba/>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('app') )

