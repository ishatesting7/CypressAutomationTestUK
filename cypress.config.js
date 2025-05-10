const { defineConfig } = require("cypress");

const path = require('path');
const XLSX = require('xlsx');
const fs = require('fs');


module.exports = defineConfig({
  experimentalWebKitSupport:true,
  watchForFileChanges:false,
  // pageLoadTimeout:4000,
  // video:true,
  // screenshotOnRunFailure:true
  video:true,
  e2e: {
    baseUrl:'https://restful-booker.herokuapp.com',
    baseUrl1:"https://ecommerce-playground.lambdatest.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data;
        }
      });

      on('task', {
        writeToExcel({ data, filePath }) {
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
          XLSX.writeFile(workbook, path.resolve(__dirname, 'cypress/fixtures', filePath));
          return null;
        }
      });
    },
  },
});
