import { Section } from '../Section/Section';
import { AuthProvider } from 'pages/tempClass/Auth/AuthProvider';
import { AuthBar } from 'pages/tempClass/Auth/AuthBar';
import { Timer } from 'pages/tempClass/Timer/Timer';
import { Collection } from 'pages/tempClass/Collection/Collection';
import { AppModal } from 'pages/tempClass/Modal/AppModal';
import { AppForm } from 'pages/tempClass/Form/AppForm';
import { AppRequest } from 'pages/tempClass/Request/AppRequest';

const AppClass = () => {
  return (
    <main>
      <Section mainTitle="React Class Template" />
      <AuthProvider>
        <AuthBar />
      </AuthProvider>
      <Timer />
      <Collection />
      <AppForm />
      <AppModal />
      <AppRequest />
    </main>
  );
};

export default AppClass;
