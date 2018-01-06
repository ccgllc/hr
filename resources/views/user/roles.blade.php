@extends('layouts.app')

@section('title')
	Edit User Roles
@endsection

@section('content')
	<div class="columns is-gapless">
		<div class="column is-1">
			
		</div>
		<div class="column is-10" id="userRoles">
			<h1 class="title hr-title">{{$user->name}}'s Current Roles</h1>
			<user-roles></user-roles>
		</div>
	</div>
@endsection

@section('scripts')
	<script> 
		window.userRoles = {!! $user->roles->toJson() !!};
		window.userId = {!! $user->id !!};
		window.roles = {!! $roles->toJson() !!}
	</script>
	<script src="{{ mix('/js/manageUserRoles.js') }}"></script>
@endsection