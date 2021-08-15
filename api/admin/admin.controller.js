const dayjs = require('dayjs');

const { getRequestsWithApi, getRequestsCount } = require("../../server/services/request.service");
const { getContracts } = require("../../server/services/contract.service");
const { getTransactions } = require("../../server/services/transaction.service");

module.exports = {
  getRequestsWithApi: (req, res) => {
    const { startDate, endDate } = req.body;
    getRequestsWithApi([req.user.id, startDate, endDate], (error, data) => {
      if (error) return res.status(400).json({ error });
      const allData = {};
      data.map((val) => {
        let key = val.api_name.replace('\ \g', '');
        if (allData[key]) {
         allData[key].push(val);
         } else {
          allData[key] = [];
          allData[key].push(val);
         }
      });
      const chartData = {};
      for (const key in allData) {
        if (Object.hasOwnProperty.call(allData, key)) {
          const subData = allData[key];
          if (!Object.hasOwnProperty.call(chartData, key)) {
            chartData[key] = [];
            for (var d = new Date(startDate + ' 00:00:00'); d <= new Date(endDate + " 00:00:00"); d.setDate(d.getDate() + 1)) {
              let sub = subData.filter(dat => dayjs(new Date(dat.date)).format("YYYY-MM-DD") == dayjs(d).format("YYYY-MM-DD"));
              if (sub.length > 0) {
                chartData[key].push(sub[0].points);
              } else {
                chartData[key].push(0);
              }
            }
          }
        }
      }
      res.json({
        success: true,
        data: chartData
      });
    });
  },
  getRequestsPercent: (req, res) => {
    getRequestsCount([req.user.id, req.body.date], (err, reqData) => {
      if (err) return res.status(400).json({ error: err });
      getContracts([req.user.id, req.body.date], (error, conData) => {
        if (error) return res.status(400).json({ error });
        res.json({
          success: true,
          req: reqData,
          con: conData
        });
      });
    });
  },
  getTransactions: (req, res) => {
    getTransactions([req.user.id, req.body.startDate, req.body.endDate], (error, data) => {
      if (error) return res.status(400).json({ error });
      res.json({
        success: true,
        data
      });
    });
  }
};