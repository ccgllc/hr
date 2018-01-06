@extends('layouts.app')

@section('title') User Groups @endsection

@section('content')
	<div class="columns is-gapless">
		<div class="options column is-1 has-text-centered">
			{{-- @include('partials.user.options') --}}
		</div>

		<div class="column is-10" id="roles">
			<h1 class="title hr-title">Roles</h1><hr>
			<roles></roles>	
		</div>
	</div>		
@endsection

@section('scripts')
	<script> 
		window.roles = {!! $roles->toJson() !!}
	</script>
	<script src="{{ mix('/js/manageRoles.js') }}"></script>
@endsection