@extends('layouts.app')

@section('title') Administrate Users @endsection

@section('content')
		<div class="columns is-gapless">
			<div class="column is-1">
				
			</div>
			<div class="column is-10" id="user" token="{{ Auth::user()->api_token }}">
				<h1 class="title hr-title">Manage Users!</h1>
				<h2 class="subtitle">Update and make changes to system users</h2>
				<search></search>
				<hr>
					
					<br>

					<table class="table is-striped is-fullwidth" style="background: transparent">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Primary Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in userData.users">
								<td v-text='user.name'></td>
								<td v-text='user.email'></td>
								<td v-text="user.roles[0]['name']"></td>
								<td>
									<div class="dropdown is-small" @click="toggleMenu(user.id)">
									  <div class="dropdown-trigger">
									    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" >
									     <span class="icon is-small">
									       	 <i class="fa fa-th-list" aria-hidden="true"></i>
								     	  </span>
									      <span class="icon is-small">
									       	 <i class="fa fa-caret-down" aria-hidden="true"></i>
								     	  </span>
									    </button>
									  </div>
									  <div class="dropdown-menu" :id="user.id" role="menu" style="display:none">
									    <div class="dropdown-content" @pointerleave="toggleMenu(user.id)">
									      <a :href="'/users/'+ user.id + '/roles'" class="dropdown-item">
									       Manage Roles
									      </a>
								
									      <a href="#" class="dropdown-item">
									        Suspend Account
									      </a>
									      <a href="#" class="dropdown-item">
									        Send Message
									      </a>
									      <hr class="dropdown-divider">
									      <div class="level">
									      	<div class="level-item">
										      <a href="" class="button is-danger">
										    		<span>Delete @{{ user.name }}</span>
														<span class="icon is-small">
															<i class="fa fa-trash"></i>
														</span>
													</span>
												</a>
											</div>
									    </div>
									  </div>
									</div>
								</div>
								</td>
							</tr>
						</tbody>
					</table>
					{{ $users->links() }}
			</div>
		</div>
@endsection

@section('scripts')
	<script>
		window.users = {!! $users->toJson() !!}
	</script>
	<script src="{{ mix('/js/user.js') }}"></script>
@endsection