import checkPropTypes from "check-prop-types";
export const findByTestAttr = (wrapper, value) => {
   return wrapper.find(`[data-test='${value}']`);
}

export const checkProps = (component, expectedProps) => {
   const error = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
   expect(error).toBeUndefined();
}
