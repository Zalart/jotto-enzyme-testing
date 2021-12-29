import {shallow} from 'enzyme';
import Congrats from './Congrats';
import {findByTestAttr, checkProps} from "../test/testUtils";
const initialProps = {success: false}
const setup = (props={}) => {
    const setupProps = {...initialProps, ...props}
    return shallow(<Congrats {...setupProps} />);
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

test('Doesnt throw a warning with the expected props', ()=> {
    const expectedProps = { success: true};
    checkProps(Congrats, expectedProps);
})