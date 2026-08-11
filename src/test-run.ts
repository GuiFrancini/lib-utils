import { formatCpf } from "./formatCpf.js";
import { formatPhone } from "./formatPhone.js";

console.log(formatCpf("12345678901"));
console.log(formatPhone("11987654321"));
console.log(formatPhone("1123456789"));

// 123.456.789-01
// (11) 98765-4321
// (11) 2345-6789
