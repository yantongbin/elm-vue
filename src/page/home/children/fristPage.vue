<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Other></Other>
        <Banner02></Banner02>
        <Juli></Juli>

    </div>
</template>
<script>
import header from '../../../components/header'
import banner from '../../../components/banner'
import other from '../../../components/other'
import banner02 from '../../../components/banner02'
import juli from '../../../components/juli'
export default {
  props: {
    lists: {
      type: Array

    }

  },
  data () {
    return {
    }
  },
  components: {
    Header: header,
    Banner: banner,
    Other: other,
    Banner02: banner02,
    Juli: juli
  }
}
</script>
