import AnimForm from './components/AnimForm';

window.AF = {}

export const animFormChangeHandler = (e) => {
  // TODO This should store the data with redux, not in a global object.
  window.AF[e.target.name] = e.target.value;
}
