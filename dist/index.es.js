let o = 1;
const t = (e) => {
  o += e || 1;
}, n = (e) => {
  o -= e || 1;
}, c = () => o;
function r(e) {
  console.log(`hello ${e}`);
}
export {
  n as decrease,
  c as getCount,
  r as greet,
  t as increase
};
