import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import {findByTestAttr} from "../test/testUtils";
Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
    return shallow(<Congrats {...props} />);
}

test('renders without errors', ()=> {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text if success prop is false', ()=> {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
})

test('renders congrats message when success prop is true', ()=> {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
   // expect(message.text()).not.toBe('');
    expect(message.text().length).not.toBe(0);
})