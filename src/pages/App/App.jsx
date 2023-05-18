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
import Main from '../Main';

export default function App(){
    return (
        <div className='App'>
            <NavBar/>
            <main className='container'>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/characters' element={<CharactersPage/>}/>
                    <Route path='/villages' element={<VillagesPage/>}/>
                    <Route path='/tailedbeasts' element={<TailedBeastsPage/>}/>
                    <Route path='/clans' element={<ClansPage/>}/>
                    <Route path='/character/:id' element={<CharacterDetailPage/>}/>
                    <Route path='/clan/:id' element={<ClanDetailPage/>}/>
                    <Route path='/village/:id' element={<VillageDetailPage/>}/>
                </Routes>
            </main>
        </div>
    )
}