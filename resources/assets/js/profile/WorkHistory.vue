<template>
	<div id="workHistory">
		<h1 class="profile-title">My Work History</h1><br>
		<div class="columns is-multiline">
			<div class="column is-3" v-for="(value, key) in workHistory" v-if="value != 0">
				<div class="card">
					<header class="card-header" :class="{'is-dark': key.includes('claims'), 'is-info': key.includes('experience')}"> 
						<p class="card-header-title">{{ key | capitalize }}</p>
					</header>
					<div class="card-content">
						<div class="content">
							<p>{{ value }}</p>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="column is-3" v-for="category in categories">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							{{ category }}
						</p>
					</header>
					<div class="card-content">
						<div v-for="(item, key) in workHistory">
							{{ key.includes(category) ? item : null}}
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WorkHistory',
		mounted() {
			this.workHistory = this.setup(window.userData.work_history);
		},
		data() {
			return {
				workHistory: {},
			}
		},
		methods: {
			setup(data) {
				let workHistory = {};
				for (let prop in data)
				{
					let newProp = prop.replace(/(_)/g, " ");
					workHistory[newProp] = data[prop];
					if (newProp == 'id' || newProp == 'created at' || newProp ==  'updated at' || newProp == 'user id') {
						delete workHistory[newProp];
					}
					if(newProp.includes('experience') && workHistory[newProp] != 0){
						let value = workHistory[newProp];
						workHistory[newProp] = (Math.floor(+value/12)) + ' years ' + (value%12) + "  months";
					}
				}
				console.log(workHistory);
				return workHistory;
			}
		},
		filters: {
			capitalize(value) {
			    if (!value) return ''
			    value = value.toString()
			    return value.charAt(0).toUpperCase() + value.slice(1)
			},
			category(key, category, workHistory) {
				if (workHistory[key].includes(category)){
			  		return workHistory[key];
			  	}
			}
		}
	}
</script>