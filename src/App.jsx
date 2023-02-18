import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainPage from './Pages/MainPage';

function App() {
    const [loading, setLoading] = useState(true);

    // const promise = () => {
    //     return new Promise( (resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve()
    //             }, 5000)
    //     })
    // }

    // useEffect(() => {
    //    promise().then(setLoading(false))
    // }, [loading])

    return (
        <div className="App">
            {/* {loading ? <LoadingScreen/> : <MainPage/>} */}
            <LoadingScreen/>
        </div>
    );
}

export default App;
