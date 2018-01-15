<template>
	<div class="columns" style="margin: 3rem 0 3rem 0;">
		<div class="column">
			<div class="card">
				<div class="card-content has-text-centered">
					<span class="count is-total">59</span><br>
					<span class="type">Total</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-content has-text-centered">
					<span class="count is-applicants">10</span><br>
					<span class="type">Applicants</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-content has-text-centered">
					<span class="count is-active">22</span><br>
					<span class="type">Active</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-content has-text-centered">
					<span class="count is-inactive">13</span><br>
					<span class="type">In-Active</span>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="card">
				<div class="card-content has-text-centered">
					<span class="count is-no-hires">7</span><br>
					<span class="type">No Hire</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserCounts',
		data() {
			return {

			}
		}
	}
</script>