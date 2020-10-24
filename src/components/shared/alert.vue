<template>
    <v-alert error dismissible @input="onClose" 
    :value="true"
      dense
      type="error"
    >
     {{text}}<strong>type</strong> of info
    </v-alert>
</template>


<script>
export default {
    props:['text'],
    methods:{
    onClose(){
        this.$emit('dismissed')
    }
    }
}
</script>