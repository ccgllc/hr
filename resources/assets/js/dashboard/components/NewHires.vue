<template>
	<div class="column">
		<div class="card">
			<header class="card-header is-warning">
			    <p class="card-header-title">
			      <span class="tag is-dark">{{ newHireCount }}</span> New Hires
			    </p>
		  	</header>
		  	<div class="card-content">
			    <div class="content">
			    	<div class="card is-stacked" v-for="newHire in newHires">
			    		<div class="card-content">
			    			<div class="content">
			    				<span class="tag is-rounded is-small is-pulled-right">Incomplete</span>
			    				<h3><a :href="'/profile/' + newHire.id">{{ newHire.name }}</a></h3>
			    				<progress class="progress is-success is-small" value="0" max="100">0%</progress>		
			    			</div>
			    		</div>
			    		<footer class="card-footer">
						    <span class="card-footer-item"><i class="fa fa-clock-o"></i> {{ newHire.created_at }}</span>
						    <div class="card-footer-item dropdown is-hoverable">
							  <div class="dropdown-trigger">
							    <a aria-haspopup="true" aria-controls="dropdown-menu">
							      <span>Action</span>
							      <span class="icon is-small">
							        <i class="fa fa-angle-down" aria-hidden="true"></i>
							      </span>
							    </a>
							  </div>
							  <div class="dropdown-menu" id="dropdown-menu" role="menu">
							    <div class="dropdown-content">
							      <a href="#" class="dropdown-item">
							        Notify
							      </a>
							      <a class="dropdown-item">
							        Review
							      </a>
							      <a class="dropdown-item">
							        Revoke offer
							      </a>
							      <hr class="dropdown-divider">
							      <a href="#" class="dropdown-item">
							        Complete onboarding
							      </a>
							    </div>
							  </div>
							</div>
						</footer>
			    	</div>
			  	</div><!-- end Main content -->
			  	<a class="button">All New Hires</a>
		    </div><!-- end Main card content -->
		</div><!--end Main Card -->	
	</div><!-- end first Column -->
</template>

<script>
	export default {
		name: "NewHire",
		mounted() {
			this.newHireCount = window.dashboardData.newHireCount;
			this.newHires = window.dashboardData.newHires;
		},
		data() {
			return {
				newHireCount: 0,
				newHires: [],
			}
		}
	}
</script>