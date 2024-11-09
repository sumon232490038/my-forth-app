export default function Todo({ sure, isture }) {
  if (isture) {
    return <h1>Are you {sure} </h1>;
  }
  return <h1>I am Not {sure}</h1>;
}
