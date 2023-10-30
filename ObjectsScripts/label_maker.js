let customerInfo = {
  name: "Milly",
  address: "123 Sesame Street",
  cityStateAndZip: "Yeetington, Millyrock 80812",
};

function printInfo() {
  console.log(`
    ${customerInfo.name}
    ${customerInfo.address}
    ${customerInfo.cityStateAndZip}`);
}
printInfo(customerInfo)