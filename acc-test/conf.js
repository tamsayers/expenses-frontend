exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec/add-expense-spec.js'
  ],
  onPrepare: function() {
    var testData = require('test-data.json');
    var dateCount = 0;

    testData.forEach(function(item) {
      item.date = (new Date().getDate() + dateCount).toISOString().slice(0,10);
      dateCount += 1;
    });
  }
};