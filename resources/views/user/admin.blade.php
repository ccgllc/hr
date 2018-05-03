@extends('layouts.app')

@section('title') Manage Users @endsection

@section('content')
		<div class="columns is-gapless">
			<div class="column is-1">
				
			</div>
			<div class="column is-10" id="user">
				<h1 class="title hr-title">{{ 'Manage ' . $status }}</h1>
				<h2 class="subtitle">Update and make changes to system users</h2>
				<label for="claim-location" class="label">Claim Location</label>
				<input type="text" id="claim-location" class="input" @focus="geolocate">

				<div id="map" style="width: 100%; height: 500px;"></div><br>

					<div class="dropdown is-hoverable" v-if="selected.length == 0">
					  <div class="dropdown-trigger">
					    <button class="button" aria-haspopup="true" aria-controls="states">
					      <span>Users By Location</span>
					      <span class="icon is-small">
					        <i class="fa fa-angle-down" aria-hidden="true"></i>
					      </span>
					    </button>
					  </div>
					  <div class="dropdown-menu" id="states" role="menu">
					    <div class="dropdown-content">
					      <a class="dropdown-item" v-for="state in states" :href="'/users/location/' + state.abbr">
					        @{{ state.name }}
					      </a>
					    </div>
					  </div>
					</div><br><br>
										 
					
					<div class="field is-grouped" v-show="selected.length > 0">
					<p class="control">
					    <a class="button" @click="selected = []; allSelected = false;">
					      Cancel
					    </a>
					  </p>
					  <p class="control">
					    <a class="button is-link" disabled>
					    	<span class="icon"><i class="fa fa-users"></i></span>
					      	&nbsp; Add To Candidates
					    </a>
					  </p>
					  <p class="control">
					    <a class="button is-danger" @click="deleteSelected">
					    	<span class="icon is-small"><i class="fa fa-trash"></i></span>
					      	&nbsp; Delete Selected
					    </a>
					  </p>
					</div>


				<table class="table is-striped is-fullwidth" style="background: transparent">
					<thead>
						<tr>
							<th>
								<input v-model="allSelected" type="checkbox" @change="selectAll" id="selectAll" name="selectAll" class="is-checkbox is-circle is-small">
			 					<label for="selectAll">&nbsp;</label>
			 				</th>
							<th>Name</th>
							<th>Email</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in userData.users" :key="user.id">
							<td>
								<input type="checkbox" v-model="selected" :value="user.id" :id="user.id" :name="user.id" class="is-checkbox is-circle is-small has-user">
			 					<label :for="user.id">&nbsp;</label>
			 				</td>
							<td><a :href="'/profile/' + user.id" v-text='user.name'></a></td>
							<td v-text='user.email'></td>
							<td v-text="user.status"></td>
							<td>
								<div class="dropdown" @click="toggleMenu(user.email)">
								  <div class="dropdown-trigger">
					       		    <button class="button is-small" aria-haspopup="true" aria-controls="dropdown-menu" >
							    		<span class="icon is-small">
									       	<i class="fa fa-th-list" aria-hidden="true"></i>
							     	  	</span>
									    <span class="icon is-small">
									      	<i class="fa fa-caret-down" aria-hidden="true"></i>
								     	</span>
								    </button>
								  </div>
								  <div class="dropdown-menu" :id="user.email" role="menu" style="display:none">
								  	<div class="dropdown-content" @pointerleave="toggleMenu(user.email)">
									    <a :href="'/users/'+ user.id + '/roles'" class="dropdown-item">Manage Roles</a>
									    <a href="#" class="dropdown-item">Suspend Account</a>								   
									    <a href="#" class="dropdown-item">Send Message</a>
									    <hr class="dropdown-divider">
									      	<div class="level">
										      	<div class="level-item">
											    	<a @click.prevent="deleteUser(user)" class="button is-danger is-fullwidth">
											    		<span>Delete</span>
														<span class="icon is-small">
															<i class="fa fa-trash"></i>
														</span>
													</a>
												</div>
										    </div>
										</div>
									</div><!--end dropdown -->
								</td>
							</tr>
						</tbody>
					</table>
					
					{{ method_exists($users, 'links') ? $users->links() : null }}

			</div>
		</div>
		<br><br>
@endsection

@section('scripts')
	<script>
		window.users = {!! $users->toJson() !!}
	</script>
	<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ2-Na1yIv_0zOlDuTbrizwya-5HcL1C0&libraries=places">
    </script>
	<script src="{{ mix('/js/user.js') }}"></script>
@endsection