import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Test for  App component', () => {
  it('App Component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
