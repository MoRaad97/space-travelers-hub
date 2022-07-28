import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Components/Navbar';

it('Navbar Component snapshot test', () => {
  const NavbarRender = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(NavbarRender).toMatchSnapshot();
});