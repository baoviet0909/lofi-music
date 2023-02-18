import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainPage from './Pages/MainPage/MainPage';

function App() {
    const [loading, setLoading] = useState(true);

    const promise = () => {
        return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    setLoading(false)
                }, 500)
        })
    }

    useEffect(() => {
       promise()
    }, [])

    return (
        <div className="App">
            {loading ? <LoadingScreen/> : <MainPage/>}
        </div>
    );
}

export default App;
