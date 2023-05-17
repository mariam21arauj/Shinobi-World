import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import CharactersPage from '../CharactersPage/CharactersPage';
import Main from '../Main';

export default function App(){
    return (
        <div className='App'>
            <NavBar/>
            <main className='container'>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/characters' element={<CharactersPage/>}/>
                </Routes>
            </main>
        </div>
    )
}