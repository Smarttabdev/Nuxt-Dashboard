<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- chart view start -->
        <v-flex xs12>
          <v-card class="pa-3">
            <v-card-text class="flex">
              <v-layout row>
                <v-flex md9 sm-6>
                  <h3>Lorem Ipsum</h3>
                </v-flex>
                <v-flex md3 sm-6>
                  <v-select
                    :items="chartRegion"
                    item-value="value"
                    v-model="chartDate"
                    solo
                    @change="chartRegionChange"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text v-if="multipleLineChart.chartData.datasets.length > 0">
              <multi-chart
                class="mt30 height-300"
                ref="multiChart"
                chart-id="multi-line-chart"
                :chart-data="multipleLineChart.chartData"
                :extra-options="multipleLineChart.extraOptions"
              >
              </multi-chart>
            </v-card-text>
            <v-card-text v-else class="height-300">
              <h1>No data</h1>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- chart view end -->
        <v-flex
          lg4
          md4
          sm6
          xs12
          v-for="(item, index) in trending"
          :key="'c-trending' + index"
        >
          <v-card class="pa-3">
            <v-card-text>
              <h3>Operations</h3>
            </v-card-text>
            <vue-radial-progress
              class="ml-auto mr-auto mb-4"
              :diameter="200"
              :completed-steps="requests"
              :total-steps="100"
              innerStrokeColor="#EDECFE"
              startColor="#A3A1FB"
              stopColor="#A3A1FB"
            >
              <p>{{ requests }} %</p>
              <p>Requests</p>
            </vue-radial-progress>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card class="pa-3">
            <v-card-text class="flex">
              <v-layout row>
                <v-flex md9 sm-6>
                  <h3>Transaction details</h3>
                </v-flex>
                <v-flex md3 sm-6>
                  <v-select
                    :items="tableRegion"
                    item-value="value"
                    v-model="tableDate"
                    solo
                    @change="tableRegionChange"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-text>
              <plain-table
                class="box-shadow-none"
                :tableData="tableData"
              ></plain-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/api";
import PlainTable from "@/components/widgets/list/PlainTable";
import Material from "vuetify/es5/util/colors";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import MultiChart from "@/components/chart/MultiChart";
import config from "@/config/color.js";
import chartConfigs from "@/components/chart/config.js";
import dayjs from 'dayjs';

export default {
  layout: "dashboard",
  components: {
    CircleStatistic,
    PlainTable,
    MultiChart,
  },
  data: () => ({
    color: Material,
    requests: 0,
    trending: [
      {
        headline: "15+",
        linear: {
          value: 15,
          color: "info",
        },
      },
    ],
    today: dayjs(new Date()).format('YYYY-MM-DD'),
    tableData: [],
    chartDate: "30",
    chartRegion: [
      {
        text: "Last 30 Days",
        value: "30",
      },
      {
        text: "Last 10 Days",
        value: "10",
      },
    ],
    tableRegion: [
      {
        text: "Last Month",
        value: "30",
      },
      {
        text: "Last week",
        value: "7",
      },
    ],
    tableDate: "30",
    multipleLineChart: {
      allData: [],
      chartData: {
        datasets: [],
        labels: [],
      },
      extraOptions: chartConfigs.multiChartOptions,
      categories: [],
    },
  }),
  computed: {
    siteTrafficData() {
      return API.getMonthVisit;
    },
  },
  methods: {
    initMultiChart() {
      let chartData = {
        datasets: [
          {
            fill: false,
            borderColor: config.colors.multi[0],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[0],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[0],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[0],
          },
          {
            fill: false,
            borderColor: config.colors.multi[1],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[1],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[1],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[1],
          },
          {
            fill: false,
            borderColor: config.colors.multi[2],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[2],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[2],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[2],
          },
          {
            fill: false,
            borderColor: config.colors.multi[3],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[3],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[3],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[3],
          },
          {
            fill: false,
            borderColor: config.colors.multi[4],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[4],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[4],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[4],
          },
          {
            fill: false,
            borderColor: config.colors.multi[5],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[5],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[5],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[5],
          },
          {
            fill: false,
            borderColor: config.colors.multi[6],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[6],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[6],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[6],
          },
          {
            fill: false,
            borderColor: config.colors.multi[7],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.multi[7],
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.multi[7],
            pointBorderWidth: 8,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 10,
            pointRadius: 3,
            data: this.multipleLineChart.allData[7],
          },
        ],
        labels: ["", "", "", "", "", "", "", "", "", "", ""],
      };
      // this.$refs.multiChart.updateGradients(chartData);
      this.multipleLineChart.chartData = chartData;
    },
    async getChartData(startDate, endDate) {
      await this.$axios.post("admin/getRequestsWithApi", {startDate, endDate}).then(res => {
        console.log(res)
        // now.setDate(now.getDate() - 30);
        this.multipleLineChart.chartData.datasets = [];
        let index = 0;
        for (const key in res.data.data) {
          index++;
          if (Object.hasOwnProperty.call(res.data.data, key)) {
            const val = res.data.data[key];
            this.multipleLineChart.allData.push(val);
            this.multipleLineChart.chartData.datasets.push({
              fill: false,
              label: key,
              borderColor: config.colors.multi[index-1],
              borderWidth: 3,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[index-1],
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.multi[index-1],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[index-1],
            });
          }
        }
          for (var d = new Date(startDate + ' 00:00:00'); d <= new Date(endDate + " 00:00:00"); d.setDate(d.getDate() + 1)) {
            this.multipleLineChart.chartData.labels.push(dayjs(d).format('YYYY-MM-DD'))
          }
      });

    },
    async getOperation(date) {
      await this.$axios.post("admin/getRequestsPercent", {date}).then(res => {
        // console.log(res)
        if(res.data.req[0].sum && res.data.con[0].request_month) 
          this.requests = Number((res.data.req[0].sum/res.data.con[0].request_month*100).toFixed(2));
        else
          this.requests = 0;
      })
    },
    async getTransaction(startDate, endDate) {
      await this.$axios.post("admin/getTransactions", {startDate, endDate}).then(res => {
        // console.log(res, this.$auth.user)
        this.tableData = res.data.data.map((data, index) => ({
          ...data,
          paymentName: data.payment_provider_name,
          payment: {
            detail: "Credit Card",
            icon: `${data.payment_provider_name}`
          },
          cardNumber: "",
          customerName: this.$auth.user.name,
          customerNo: "",
          currentBalance: data.cost,
          status: ""
        }));  
      })
    },
    chartRegionChange(value){
      var now = new Date(); 
      now.setDate(now.getDate() - value);
      console.log(now, this.today, value)
      this.getChartData(now, this.today)
    },
    tableRegionChange(value){
       var now = new Date(); 
      now.setDate(now.getDate() - value);
      console.log(now, this.today, value)
      this.getTransaction(now, this.today)
    }
  },
  // computed: {

  // },
  mounted(){
    this.getChartData('2020-11-14', '2020-12-16')
    this.getOperation('2019-11-22')
    this.getTransaction('2020-01-19', '2021-01-21')
  }
};
</script>
