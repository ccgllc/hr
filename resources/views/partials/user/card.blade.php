<div class="card is-user">
	<div class="card-content">
	    <div class="content">
	    	<div class="columns">
		    	<div class="column is-3 has-text-centered">
		    		<div @mouseover="toggleAvatarButton" @mouseout="toggleAvatarButton">
		    			<span 
		    				class="tag is-light is-small has-text-centered" 
		    				v-show="showAvatarButton" 
		    				style="position: absolute; top: 225px; left: 12%; cursor: pointer;">Edit
		    			</span>
				    		<img 
				    			{{-- src="{{ isset($user->avatar->path) ? asset($user->avatar->path) : '' }}"  --}}
				    			v-if="user.avatar !== null"
				    			:src="user.avatar.path" 
				    			:alt="user.name"
				    			@click="addingAvatar = true"
				    			style="border-radius: 256px; border: 10px solid #ccc; cursor: pointer;"
			    			>
				    		<span class="icon is-extra-large" v-if="user.avatar == null" @click="addingAvatar = true">
				    			<i class="fa fa-12x fa-user-circle-o"></i>
				    		</span>
		    		</div>
		    		
		    		{{-- <br> --}}
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
	      <p class="modal-card-title">Add Your Profile Picture</p>
	      <button class="delete" aria-label="close" @click="addingAvatar=false"></button>
	    </header>
	    <section class="modal-card-body">
	    <div class="columns">
	    	<div class="column is-6 is-offset-3">
	    		 <avatar-cropper 
			     	class="has-text-centered"
			     	v-model="avatarCropper" 
			     	canvas-color="transparent"
			     	:width="256"
		         	:height="256"
		         	:quality="2"
		         	:prevent-white-space="true"
		         	:show-loading="true"
		         	:accept="'image/*'"
		         	v-on:loading-end="hasImage"
		         	v-on:image-remove="hasImage"
			    >
			   	 	<div class="spinner" v-if="avatarCropper && avatarCropper.loading"></div>
	     		</avatar-cropper>
	    	</div>
	    </div>
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success" @click="uploadImage" :disabled="!imgLoaded">Save Profile Image</button>
	      <button class="button" @click="addingAvatar = false">Cancel</button>
	    </footer>
	  </div>
	</div>
</div>	