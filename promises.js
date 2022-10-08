/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */
function num1() {
  return 1;
}
async function num2() {
  return 2;
}
console.log('num1', num1());
console.log('num2', num2());
num2().then(res => console.log(res));
// Your code here

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting() {
  const value = await num2();
  console.log('waiting', value);
}
waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
