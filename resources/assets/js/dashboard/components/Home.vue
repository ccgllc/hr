<template>
	<div class="columns is-gapless">
		<div class="column is-1">
			
		</div>
		<div class="column is-10">
			<h1 class="title hr-title">HR Dashboard</h1>

			<div class="tabs" style="margin-bottom: 5rem">
			  	<ul>
				    <li class="is-active"><a><span class="icon"><i class="fa fa-tachometer"></i></span>Overview</a></li>
				    <li><a><span class="icon"><i class="fa fa-user-circle-o"></i></span>Manage Users</a></li>
				    <li><a><span class="icon"><i class="fa fa-users"></i></span>Mange Roles</a></li>
				    <li><a><span class="icon"><i class="fa fa-envelope"></i></span>Engagement</a></li>
			  	</ul>
			</div>

			<div class="columns is-gapless">
				<div class="column is-4">
					<doughnut-chart></doughnut-chart>
				</div>
				<div class="column is-8">
					<bar-chart></bar-chart>
				</div>
			</div>
			<!-- <hr> -->
			<div class="columns" style="margin-top: 5rem;">	
				<div class="column">
					<div class="card">
						<header class="card-header is-info">
						    <p class="card-header-title">
						      <span class="tag is-dark">3</span> New Hires
						    </p>
					  	</header>
					  	<div class="card-content">
						    <div class="content">
						    	<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<span class="tag is-rounded is-success is-small is-pulled-right">Complete</span>
						    				<h3><a href="">Donald Longlastname</a></h3>
						    				<progress class="progress is-success is-small" value="100" max="100">15%</progress>		
						    			</div>
						    		</div>
						    		<footer class="card-footer">
									    <span class="card-footer-item"><i class="fa fa-clock-o"></i>  1 month ago</span>
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

						    	<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<span class="tag is-rounded is-info is-pulled-right">Onboarding</span>
						    				<h3><a href="">Joe Schmo</a></h3>
						    				<progress class="progress is-small" value="75" max="100">15%</progress>	
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 23 days ago</span>
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

						    	<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<span class="tag is-rounded is-pulled-right">Not started</span>
						    				<h3><a href="">Sherry Longestlastname</a></h3>
						    				<progress class="progress is-danger is-small" value="0" max="100">15%</progress>	
						    			</div>
						    		</div>
						    		<footer class="card-footer">
								    	<span class="card-footer-item"><i class="fa fa-clock-o"></i> 14 days ago  &nbsp;</span>
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
						    	</div><!-- end stacked card. -->

						  	</div><!-- end Main content -->
					    </div><!-- end Main card content -->
					</div><!--end Main Card -->	
				</div><!-- end first Column -->

				<div class="column">
					<div class="card">
						<header class="card-header is-dark">
						    <p class="card-header-title">
						      <span class="tag is-secondary">2</span> Candidates
						    </p>
					  	</header>
					  	<div class="card-content">
						    <div class="content">
						      <div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
					    					<span class="is-pulled-right is-tooltip-warning tooltip is-tooltip-left" data-tooltip="Remove from candidates"><a class="delete is-small"></a></span>
						    				<h3><a href="">Ben Steinburger</a></h3>
						    				<p><strong>10 years 3 months</strong> total experience, <strong>4,300</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 1 month ago</span>
									   	<a class="card-footer-item">Hire</a>
						    		</footer>
						    	</div>

								 <div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<span class="is-pulled-right is-tooltip-warning tooltip is-tooltip-left" data-tooltip="Remove from candidates"><a class="delete is-small"></a></span>
						    				<h3><a href="">Jessica Caldroy</a></h3>
						    				<p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 1 month ago</span>
									   	<a class="card-footer-item">Hire</a>
						    		</footer>
						    	</div>

					    	</div>
					    </div><!-- end card content -->
					</div><!--end Card -->	
				</div><!-- end second Column -->

				<div class="column">
					<div class="card">
						<header class="card-header">
						    <p class="card-header-title">
						      <span class="tag is-primary">4</span> Recent Applicants 
						    </p>
					  	</header>
					  	<div class="card-content">
						    <div class="content">

						    	<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<h3><a href="">Dustin Smith</a></h3>
						    				<p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 4 days ago</span>
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
										        Make candidate
										      </a>
										      <a class="dropdown-item">
										        View applicant details
										      </a>
										    </div>
										  </div>
										</div>
						    		</footer>
						    	</div><!-- end stacked card -->

						    	<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<h3><a href="">Mary Jones</a></h3>
						    				<p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 15 days ago</span>
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
										        Make candidate
										      </a>
										      <a class="dropdown-item">
										        View applicant details
										      </a>
										    </div>
										  </div>
										</div>
						    		</footer>
						    	</div><!-- end stacked card -->
							
								<div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<h3><a href="">James Abbotts</a></h3>
						    				<p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 15 days ago</span>
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
										        Make candidate
										      </a>
										      <a class="dropdown-item">
										        View applicant details
										      </a>
										    </div>
										  </div>
										</div>
						    		</footer>
						    	</div><!-- end stacked card -->


						      <div class="card is-stacked">
						    		<div class="card-content">
						    			<div class="content">
						    				<h3><a href="">Jessica Caldroy</a></h3>
						    				<p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p>
						    			</div>
						    		</div>
						    		<footer class="card-footer">
						    			<span class="card-footer-item"><i class="fa fa-clock-o"></i> 2 months ago</span>
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
										        Make candidate
										      </a>
										      <a class="dropdown-item">
										        View applicant details
										      </a>
										    </div>
										  </div>
										</div>
						    		</footer>
						    	</div><!-- end stacked card -->
						    </div>
					    </div><!-- end card content -->
					</div><!--end Card -->	
				</div><!-- end third Column -->

			</div><!-- end bottom columns -->
		</div><!-- end main column is-10 -->
	</div><!--end columns -->
</template>

<script>
	import barChart from '../BarChart.js';
	import doughnutChart from '../Doughnut.js'
	export default {
		name: 'Home',
		components: {
			barChart,
			doughnutChart
		},
		mounted() {
			// this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
		},
		data() {
			return {
				//		
			}
		},
		methods: {
			//
		}
	}
</script>