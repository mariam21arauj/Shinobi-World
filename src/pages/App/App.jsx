import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import CharactersPage from '../CharactersPage/CharactersPage';
import VillagesPage from '../VillagesPage/VillagesPage';
import TailedBeastsPage from '../TailedBeastsPage/TailedBeastsPage';
import ClansPage from '../ClansPage/ClansPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
import ClanDetailPage from '../ClanDetailPage/ClanDetailPage';
import VillageDetailPage from '../VillageDetailPage/VillageDetailPage';
import TailedBeastDetailPage from '../TailedBeastDetailPage/TailedBeastDetailPage';
import Main from '../Main';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';

export default function App(){
    const [user, setUser] = useState(null)
    return (
        <div className='App'>
            <main className='container'>
                {user ? (
                <> 
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/characters' element={<CharactersPage/>}/>
                    <Route path='/villages' element={<VillagesPage/>}/>
                    <Route path='/tailedbeasts' element={<TailedBeastsPage/>}/>
                    <Route path='/clans' element={<ClansPage/>}/>
                    <Route path='/character/:id' element={<CharacterDetailPage/>}/>
                    <Route path='/clan/:id' element={<ClanDetailPage/>}/>
                    <Route path='/village/:id' element={<VillageDetailPage/>}/>
                    <Route path='/tailed-beast/:id' element={<TailedBeastDetailPage/>}/>
                </Routes>
                </>
                ) : (
                    <AuthPage/>
                )} 
            </main>
        </div>
    );
}