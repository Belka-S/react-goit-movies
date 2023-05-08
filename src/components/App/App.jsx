import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import AppHook from 'pages/tempHook/App/AppHook';
import AppClass from 'pages/tempClass/App/AppClass';
import AppImgFinder from 'pages/imgFinder/App/AppImgFinder';

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/tempClass" element={<AppClass />} />
      <Route path="/tempHook" element={<AppHook />} />
      <Route path="/imgFinder" element={<AppImgFinder />} />
      <Route path="*" element={<span>Not Found</span>} />
    </Route>
  </Routes>
);

// ---------------------------------------- //
// -----------App Class Template----------- //
// ---------------------------------------- //

// import { Component } from 'react';

// export class AppClass extends Component {
//   // ---------------State--------------- //
//   state = {};

//   // ---------LifeCycle Methods--------- //
//   componentDidMount() {}

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {}

//   // -----------Custom Methods---------- //

//   // -----------Render Method----------- //
//   render() {
//     return <Section title=""></Section>;
//   }
// }
