const DEBUG_MODE = process.env.REACT_APP_DEBUG;
export default function log(param) {
  console.log(DEBUG_MODE);
  if (DEBUG_MODE) console.log(param);
}
