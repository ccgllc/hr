<div class="card is-user">
	<div class="card-content">
	    <div class="content">
	    	<div class="columns">
		    	<div class="column is-3 has-text-centered">
		    		<span class="icon is-extra-large">
		    			<i class="fa fa-12x fa-user-circle-o"></i>
		    		</span>
		    		<div class="current-status">
		    			<h4>Current Status</h4>
		    			<h2>Available</h2>
		    		</div>
		    	</div>
		    	<div class="column is-9">
			    	<h1>{{ $user->name }}</h1>
			    	<h3>{{ $user->role }}</h3>
			      	
			      	<div class="card-section">
			      		<h4><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;My Location</h4>
			      		<h3>{{ optional($user->profile)->city }} {{ optional($user->profile)->state }}</h3>
			      	</div>
					
					<div class="card-section">
						<h4><i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;Application Date</h4>
						<h3>{{ $user->profile->created_at->diffForHumans() }}</h3>
					</div>

		    	</div>
		    </div>
	    </div>
	</div>
</div>	