import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/home";
import LoginForm from "./containers/login";
import Register from "./containers/register";
import Activate from "./containers/activate";
import ResetPassword from "./containers/resetPassword";
import ResetPasswordConfirmation from "./containers/resetPasswordConfirm";
import Layout from "./hocs/layout";
import NotFound from "./containers/notFound";

import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<ResetPassword />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirmation />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
