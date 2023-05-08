import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';

const Home = () => {
  const [goBack, setGoBack] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  setTimeout(() => {
    setGoBack(true);
  }, 3000);

  return (
    <main>
      <Section mainTitle="React Template" />
      {goBack && <Navigate to={backLinkHref} replace />}
    </main>
  );
};

export default Home;
