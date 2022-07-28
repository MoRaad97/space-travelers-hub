import React from 'react';
import TestRenderer from "react-test-renderer";
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Missions from '../Components/Missions';

it('Missions Component snapshot test', () => {
  const missionsRender = TestRenderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(missionsRender).toMatchSnapshot();
});