<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            fade="true"
            background="#343a40"
            no-hover-pause="true"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/1.jpg"
                  alt="One Hour Service"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/2.jpg"
                  alt="Board Repair"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/3.jpg"
                  alt="Insurance Report"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/4.jpg"
                  alt="One Hour Repair"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/5.jpg"
                  alt="Insurance Report"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/6.jpg"
                  alt="120 Days Warranty"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/7.jpg"
                  alt="Motherboard Repair"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide class="text-center">
              <template v-slot:img>
                <img
                  class="img-fluid"
                  src="~assets/images/services/8.jpg"
                  alt="Data Recovery"
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="container services">
      <div class="row py-5">
        <div class="col-lg-12 pt-5">
          <h1 class="text-center">
            Our Repair Services
          </h1>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-lg-4 p-5 p-lg-3">
          <div class="pb-3 d-flex flex-row align-items-center justify-content-start">
            <font-awesome-icon icon="mobile" class="fa-4x mr-3"/>
            <h4>
              Smartphone, Tablet
            </h4>
          </div>
          <b-list-group flush="true">
            <b-list-group-item>Cracked iPhone</b-list-group-item>
            <b-list-group-item>iPad Screen Repair</b-list-group-item>
            <b-list-group-item>Cracked Android Screen Replacement</b-list-group-item>
            <b-list-group-item>Cracked LCD</b-list-group-item>
            <b-list-group-item>Lens Replacement</b-list-group-item>
            <b-list-group-item>Liquid Damage Repair</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-lg-4 p-5 p-lg-3">
          <div class="pb-3 d-flex flex-row align-items-center justify-content-start">
            <font-awesome-icon icon="laptop" class="fa-4x mr-3"/>
            <h4>
              Desktop, Laptop, Macbook
            </h4>
          </div>
          <b-list-group flush="true">
            <b-list-group-item>Virus Removal</b-list-group-item>
            <b-list-group-item>Trojan Removal</b-list-group-item>
            <b-list-group-item>Malware Removal</b-list-group-item>
            <b-list-group-item>Data Backup</b-list-group-item>
            <b-list-group-item>Data Recovery</b-list-group-item>
            <b-list-group-item>Power Charging Issue Repair</b-list-group-item>
            <b-list-group-item>WiFi Network Connection Issue Repair</b-list-group-item>
            <b-list-group-item>Login Password Unlocking</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-lg-4 p-5 p-lg-3">
          <div class="pb-3 d-flex flex-row align-items-center justify-content-start">
            <font-awesome-icon icon="wrench" class="fa-4x mr-3"/>
            <h4>
              We also cater for
            </h4>
          </div>
          <b-list-group flush="true">
            <b-list-group-item>Insurance Damage Claim Report</b-list-group-item>
            <b-list-group-item>120 Days Repair Warranty</b-list-group-item>
            <b-list-group-item>Free Loan Phone</b-list-group-item>
            <b-list-group-item>Free Repair Quotation</b-list-group-item>
            <b-list-group-item>Screen Replacement</b-list-group-item>
            <b-list-group-item>One Hour Repair</b-list-group-item>
            <b-list-group-item>Insurance Report</b-list-group-item>
            <b-list-group-item>Motherboard Repair</b-list-group-item>
            <b-list-group-item>Data Recovery</b-list-group-item>
            <b-list-group-item>Network Unlock</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .services {
    .svg-inline--fa {
      color: #3b5998;
    }
  }
</style>
