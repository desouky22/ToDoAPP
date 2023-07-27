const DEBUG_MODE = process.env.REACT_APP_DEBUG;
export default function log(param) {
  if (DEBUG_MODE) console.log(param);
}
