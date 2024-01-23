var item = prompt ("masukan item pembelian ? \n (cth : baju, beras, sabun, permen");
switch (item) {
    case "baju":
    case "beras":
    case "sabun":
    alert ("item yang dibutuhkan");
    break;
    case "permen":
    alert ("item yang tidak dibutuhkan");
    break;
    default :
    alert ("item yang dimasukan salah");
    break;
}