<template>
  <div class="about">
    <h1>This is an about page</h1>
	<h2>{{msg}}</h2>
	<h4>{{ahello}}</h4>
	<button @click="change()">切换</button>
  </div>
</template>

<script>
	import {ref,toRefs, reactive} from 'vue'
	export default {
		setup(){
			
			const ahello = ref('ahello');
			
			const state = reactive({ 
				msg:'hello'
			})
			const change = () => {
				state.msg = 'hi'
			}
			return {ahello,...toRefs(state),change}
		}
	}
</script>

<style scoped>

</style>
