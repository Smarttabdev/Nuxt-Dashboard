<template>
  <v-card>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="tableData"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-layout row>
                <v-flex md3 class="mt-auto mb-auto">
                 <img :src="getImgUrl(props.item.payment.icon)" class="width-40" alt="icon">

                </v-flex>
                <v-flex md7>
                  <p class="payment-name">{{ props.item.paymentName }}</p>
                  <p class="payment-detail">{{ props.item.payment.detail }}</p>
                </v-flex>
              </v-layout>
            </td>
            <td>{{ props.item.cardNumber }}</td>
            <td>
              <p class="payment-name">{{ props.item.customerName }}</p>
              <p class="payment-detail">
                {{props.item.customerNo ? 'Customer No ' : ''}} {{ props.item.customerNo }}
              </p>
            </td>
            <td>
              <v-layout row>
                <v-flex sm9 class="mt-auto mb-auto">
                  <p class="payment-name">{{ props.item.currentBalance }} $</p>
                  <p class="payment-detail">
                    {{
                      props.item.totalBalance
                        ? "Total: " + "$" + props.item.totalBalance
                        : ""
                    }}
                  </p>
                </v-flex>
                <v-flex sm3 class="mt-auto mb-auto">
                  <i
                    v-if="props.item.status === 'crease'"
                    class="status-crease-arrow fa fa-arrow-up"
                  />
                  <i v-else class="status-decrease-arrow fa fa-arrow-down" />
                </v-flex>
              </v-layout>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from "@/api/project";
export default {
  data() {
    return {
      headers: [
        {
          text: "Payment method",
          align: "center",
          value: "paymentName",
        },
        {
          text: "Card Number",
          align: "left",
          value: "cardNumber",
        },
        { text: "Customer Name/No", value: "customerName" },
        { text: "Current/Total Balance", value: "currentBalance" },
      ],
    };
  },
  props: ["tableData"],
  computed: {
    projects() {
      return Projects;
    },
  },
  methods: {
    getImgUrl(pet) {
    var images = require.context('../../../static/icon/', false, /\.svg$/)
    return images('./' + pet + ".svg")
  }
  }

};
</script>

<style lang="scss" scoped>
.payment-name {
  font-size: 14px;
  margin: 10px auto 0 10px;
  font-weight: 500;
}
.payment-detail {
  font-size: 12px;
  margin: 0 auto 10px 10px;
  color: rgb(109, 107, 107);
}
.status-crease-arrow {
  color: #8c78fb;
}
.status-decrease-arrow {
  color: #858588;
}
</style>
