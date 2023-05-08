import { useContext } from 'react';
import authContext from './context';
import { useNavigate } from 'react-router-dom';
import { Section } from '../Section/Section';
import css from '../Button/Button.module.scss';

export const AuthBar = () => {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);
  console.log('createContext, useContext, useNavigate');

  return (
    <Section title="Auth">
      {isLoggedIn ? (
        <>
          <button className={css.Button} type="button" onClick={onLogOut}>
            {user.name}
          </button>
          <LogOutUseNavigate />
        </>
      ) : (
        <button className={css.Button} type="button" onClick={onLogIn}>
          Log In
        </button>
      )}
    </Section>
  );
};

function LogOutUseNavigate() {
  const navigate = useNavigate();

  const naviHome = e => {
    navigate('/', { replace: true });
  };

  return (
    <button
      className={css.Button}
      style={{ marginLeft: '20px' }}
      name="tempClass"
      type="button"
      onClick={naviHome}
    >
      useNavi
    </button>
  );
}

// export const AppBar = () => {
//   return (
//     <authContext.Consumer>
//       {({ user, isLoggedIn, onLogIn, onLogOut }) => (
//         <header>
//           <nav>
//             {isLoggedIn ? (
//               <div user={user} onLogOut={onLogOut}></div>
//             ) : (
//               <button type="button" onClick={onLogIn}>
//                 LogIn
//               </button>
//             )}
//           </nav>
//         </header>
//       )}
//     </authContext.Consumer>
//   );
// };
