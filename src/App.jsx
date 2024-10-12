import './App.css'
import { Route, Routes } from 'react-router-dom'

// import Overview from './container/Overview';
// import Analytics from './container/Analytics';
// import Crypto from './container/Crypto';
// import Ecommerce from './container/Ecommerce';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './container/Overview/Overview'
import Analytics from './container/Analytics/Analytics'
import Crypto from './container/Crypto/Crypto';
import Ecommerce from './container/Ecommerce/Ecommerce';
import Header from './components/Header/Header';

function App() {

  return (
    <Routes>
      <Route path='/' 
      element={
        <>
        <Sidebar/>
        <Header/>
        <Overview/>
        </>
        }>
      </Route>
      <Route path='/analytics' 
      element={
        <>
        <Sidebar/>
        <Header/>
        <Analytics/>
        </>
      }>
      </Route>
      <Route path='/ecommerce' 
      element={
        <>
        <Sidebar/>
        <Header/>
        <Ecommerce/>
        </>
      }>
      </Route>
      <Route path='/crypto' 
      element={
        <>
        <Sidebar/>
        <Header/>
        <Crypto/>
        </>
      }>
      </Route>
    </Routes>
  )
}

export default App
