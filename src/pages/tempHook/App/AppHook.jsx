import { Section } from '../Section/Section';
import { AuthProvider } from 'pages/tempHook/Auth/AuthProvider';
import { AuthBar } from 'pages/tempHook/Auth/AuthBar';
import { Timer } from 'pages/tempHook/Timer/Timer';
import { Collection } from 'pages/tempHook/Collection/Collection';
import { AppForm } from 'pages/tempHook/Form/AppForm';
import { AppModal } from 'pages/tempHook/Modal/AppModal';
import { AppRequest } from 'pages/tempHook/Request/AppRequest';

const AppHook = () => {
  return (
    <main>
      <Section mainTitle="React Hook Template" />
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

export default AppHook;
