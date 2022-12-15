export default function updateDataState(prevState, prop, value) {
  prevState["data"]["personalInfo"][prop] = value;

  return prevState;
}
