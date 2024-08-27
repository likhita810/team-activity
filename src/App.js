import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import TicketsPage from './tickets/Admin/TicketsPage'
import SortedTickets from './tickets/Admin/SortedTickets'
import TicketForm from './tickets/User/TicketForm';
import DashBoard from './tickets/User/DashBoard';
import TicketDashboard from './tickets/User/TicketDashboard';
import MainFunc from './tickets/Main/MainFunc'
import LoginPg from './tickets/User/LoginPg';
import SignInFunc from './tickets/User/SignInFunc';
import AdminLoginPg from './tickets/Admin/AdminLoginPg';
import AdminSignInFunc from './tickets/Admin/AdminSignInFunc';
import TicketsDisplay from './tickets/Admin/TicketsDisplay';
import SmokeTextReveal from './tickets/Team/FinalPage'

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Link to='/'></Link>

          <Routes>
            <Route path='/' element={<MainFunc></MainFunc>}></Route>

            <Route path='/login' element={<LoginPg></LoginPg>}></Route>

            <Route path='/signin' element={<SignInFunc></SignInFunc>}></Route>
            <Route path='/dashboard' element={<DashBoard></DashBoard>}>
              <Route path='ticketform' element={<TicketForm></TicketForm>}></Route>
              <Route path='viewtickets' element={<TicketDashboard></TicketDashboard>}></Route>
            </Route>

            <Route path='/adminlogin' element={<AdminLoginPg></AdminLoginPg>}></Route>

            <Route path='/adminsignin' element={<AdminSignInFunc></AdminSignInFunc>}></Route>
            <Route path='/display' element={<TicketsDisplay></TicketsDisplay>}>
              <Route path='tickets' element={<TicketsPage></TicketsPage>}></Route>
              <Route path='sortedtickets' element={<SortedTickets></SortedTickets>}></Route>
              <Route path='team' element={<SmokeTextReveal></SmokeTextReveal>}></Route>           
            </Route>         
          </Routes>
          
        </BrowserRouter>

    </div>
  );
}

export default App;

