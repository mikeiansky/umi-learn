export default function Hello(props) {
  const { hello } = props.match.params;

  console.log('course condition =========> render,,,,, ' + hello);

  return <div>this is course condition page</div>;
}
