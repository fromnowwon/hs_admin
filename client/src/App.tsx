import { Route, Routes } from 'react-router-dom';
import CustomBackdrop from 'components/cmn/CustomBackdrop';
import Login from 'pages/login';
import Main from 'pages/main';
import Notice from 'pages/notice';
import Company from 'pages/company';

function App(): JSX.Element {
  return (
    <>
      <CustomBackdrop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route path="notice" element={<Notice />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
