<template>
<div>
    <div class="container">
      <h1 class="title">{{ $t("message.validPublicKey") }}</h1>
      <div class="panel">(validPublicKey function description here.)</div>
    </div>
    <div class="container has-background-white second-container">
        <div class="subtitle is-fluid">
            <strong>READ</strong> IDHubDIDRegistry Contract: 0x1DbF8e4B47EA53a2b932850F7FEC8585C6A9c1d2
        </div>
        <div class="subtitle is-fluid">
            <strong> identity </strong>
            <small class="has-text-grey"> address </small>
            <div class="control">
                <input class="input" type="text" placeholder="0x3141592..." v-model="identity">
            </div>
        </div>
        <div class="subtitle is-fluid">
            <strong> publicKeyType </strong>
            <small class="has-text-grey"> bytes32 </small>
            <div class="control">
                <input class="input" type="text" placeholder="" v-model="publicKeyType">
            </div>
        </div>
        <div class="subtitle is-fluid">
            <strong class="is-size-5"> publicKey </strong>
            <small class="has-text-grey"> bytes32 </small>
            <div class="control">
                <input class="input" type="text" placeholder="" v-model="publicKey">
            </div>
        </div>
        <div class="subtitle is-fluid">
          <p>
            <strong> validity </strong>
            <small class="has-text-grey"> bool </small>
          </p>
          <p>↳
            <label> {{validity}} </label>
          </p>
        </div>
        <a class="subtitle button is-info is-rounded" name="button" @click="validPublicKey">
            {{ $t("message.validButton") }}
        </a>
    </div>
</div>
</template>

<script>
export default {
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  data () {
    return {
      identity: '',
      publicKeyType: '',
      publicKey: '',
      validity: null,
      changeEvent: '',
      pending: false,
      contractName: 'IDHubDIDRegistry',
      eventName: 'DIDPublicKeyChanged',
      events: []
    }
  },
  computed: {
    web3 () {
      return this.$store.state.web3
    }
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  },
  methods: {
    sayHi: function () {
      alert('Hi!')
    },
    validPublicKey () {
      console.log('ValidPublicKey Button has been clicked')
      console.log('identity is ' + this.identity)
      console.log('validity is ' + this.validity)
      this.validity = null
      this.$store.state.contractInstance().validPublicKey(this.identity, this.publicKeyType, this.publicKey, (err, result) => {
        this.validity = result
      })
    }
  }
}
</script>

<style>
.container {
  padding: 0rem 4rem 1rem 4rem;
}
.second-container {
  padding: 1rem 4rem 2rem 4rem;
}
.subtitle {
  line-height: 175%;
}
</style>
