
<template>
  <div>
    <slot name="dropDown_label"></slot>
    <slot name="toggler">
    </slot>
    <slot></slot>
 </div>
</template>

<script>
  export default {
    name: 'AppDropdown',
    props: ['toggleTrigger'],
    provide () {
      return {
        sharedState: this.sharedState
      }
    },
    data () {
      return {
        sharedState: {
          active: false
        }
      }
    },
    watch: { 
      	toggleTrigger: function() { // watch it
            //if toggleTrigger(in this case the input, if it's null or length of 0 then the trigger is false)
            // going to have the input selection as well - once the user has clicked on the input this will also have to trigger false
            if(this.toggleTrigger === null || this.toggleTrigger === "") {
                this.sharedState.active = false
            } else {
                this.sharedState.active = true
            }
        }
    }
  }
</script>