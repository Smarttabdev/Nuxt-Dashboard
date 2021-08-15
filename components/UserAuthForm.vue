<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
      v-if="hasName"
      outline
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
      outline
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
      outline
    />
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-btn
          large
          class="justify-center overline"
          rounded
          color="#827AF3"
          dark
          @click="submitForm(userInfo)"
          :disabled="!valid"
          >{{ buttonText }}</v-btn
        >
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import validations from "@/util/validations";
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {},
      ...validations,
    };
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>

<style lang="scss" scoped>
.layout.row.wrap.align-center {
  text-align: center;
}
@media screen and (max-width: 600px) {
  button {
    width: 95%;
  }
}
.text-xs-center button {
  width: 40%;
}

.v-btn {
  text-transform: none !important;
}
</style>