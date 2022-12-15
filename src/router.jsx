
import Login from './Pages/Login';
import {  Route, Routes } from 'react-router-dom';
import Pagina1 from './Pages/Pagina1';

export default function RouterMain() {
  return (
    <Routes>
		<Route path="/">
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/Pagina1" element={<Pagina1 />} />
		</Route>

	</Routes>
  );
}


