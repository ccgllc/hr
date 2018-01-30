<div class="card is-user">
	<div class="card-content">
	    <div class="content">
	    	<div class="columns">
		    	<div class="column is-3 has-text-centered">
		    		<span class="icon is-extra-large" @click="addingAvatar = true" @mouseover="toggleAvatarButton" @mouseleave="toggleAvatarButton">
		    			<i class="fa fa-12x fa-user-circle-o"></i>
		    		</span>
		    		<br><span class="is-small" v-if="showAvatarButton">Add avatar</span>
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
	<div class="modal" v-bind:class="{ 'is-active': addingAvatar }">
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">Add Your Avatar</p>
	      <button class="delete" aria-label="close" @click="addingAvatar=false"></button>
	    </header>
	    <section class="modal-card-body">
	    <div class="columns">
	    	<div class="column is-6 is-offset-3">
	    		 <avatar-cropper 
			     	class="has-text-centered"
			     	v-model="avatarCropper" 
			     	canvas-color="transparent"
			     	:width="310"
		         	:height="310"
		         	:quality="8"
		         	:prevent-white-space="true"
		         	:show-loading="true"
			    >
			   	 	<div class="spinner" v-if="croppa && croppa.loading"></div>
	     		</avatar-cropper>
	    	</div>
	    </div>
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success">Save changes</button>
	      <button class="button" @click="addingAvatar = false">Cancel</button>
	    </footer>
	  </div>
	</div>
</div>	