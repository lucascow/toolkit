/*
 * Non-ES6 syntax, no Babel needs
 */

var chineseToolkit = require ("./chineseToolkit.js");

/* Traditional Chinese(TC) to Simplified Chinese(SC) */
const demo1 = chineseToolkit.toSc("你好，我是陳大文，英文名字是Andrew，今年50歲。"); 
console.log(`TC to SC: ${demo1}`);

/* Simplified Chinese(SC) to Traditional Chinese(TC) */
const demo2 = chineseToolkit.toTc("你好，我是陈大文，英文名字是Andrew，今年50岁。");
console.log(`SC to TC: ${demo2}`);
