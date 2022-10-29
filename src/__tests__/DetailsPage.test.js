import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DetailsPage from '../components/detailsPage/DetailsPage';

describe('Test for  App component', () => {
  it('App Component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
