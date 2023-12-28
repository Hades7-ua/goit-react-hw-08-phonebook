// import ContactForm from './Contacts/ContactForm';
// import Filter from './Filter/FilterContacts';
// import ContactList from './ContactsList/ContactList';
// import { AppHeader, AppContent, AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { useEffect, lazy } from 'react';
// import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
// import { HomePage } from '../pages/Home';
// import { LoginPage } from '../pages/Login';
// import { ContactsPage } from '../pages/Contacts';
// import { RegisterPage } from '../pages/Register';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      {/* <AppContainer>
        {loading && !error && (
          <b>The request is being processed, it will take a few seconds.....</b>
        )}
        <AppHeader>Phonebook</AppHeader>
        <AppContent>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </AppContent>
      </AppContainer> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
