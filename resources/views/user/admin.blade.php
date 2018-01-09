@extends('layouts.app')

@section('title') Manage Users @endsection

@section('content')
		<div class="columns is-gapless">
			<div class="column is-1">
				
			</div>
			<div class="column is-10" id="user" token="{{ Auth::user()->api_token }}">
				<h1 class="title hr-title">Manage Users</h1>
				<h2 class="subtitle">Update and make changes to system users</h2>
				{{-- <search></search> --}}
				{{-- <hr> --}}
					
					<br>	

				<table class="table is-striped is-fullwidth" style="background: transparent">
					<thead>
						<tr>
							<th>
								<input type="checkbox" id="selectAll" name="selectAll" class="is-checkbox is-circle is-small">
			 					<label for="selectAll">&nbsp;</label>
			 				</th>
							<th>Name</th>
							<th>Email</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in userData.users">
							<td>
								<input type="checkbox" :id="user.id" :name="user.id" class="is-checkbox is-circle is-small">
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
											    	<a href="" class="button is-danger is-fullwidth">
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
					{{ $users->links() }}
			</div>
		</div>
		<br><br>
@endsection

@section('scripts')
	<script>
		window.users = {!! $users->toJson() !!}
	</script>
	<script src="{{ mix('/js/user.js') }}"></script>
@endsection