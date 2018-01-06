@extends('layouts.app')

@section('title')
	Edit Role 
@endsection

@section('content')
	<div class="columns is-gapless">
		<div class="options column is-1 has-text-centered">
			{{-- @include('partials.user.options') --}}
		</div>
		<div class="column is-10">
			<h1 class="title hr-title">{{ucfirst($role->name)}}s</h1><hr>
				<table class="table is-full-width">
					<thead>
						<tr>
							{{-- <th>Select</th> --}}
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						@foreach($users as $user)
							<tr>
								{{-- <td><input type="checkbox" checked></td> --}}
								<td>{{ $user->name }}</td>
								<td><a href="/user/{{$user->id}}" class="button">Edit</a></td>
								{{-- <td>{{ $role->name }}</td> --}}
							</tr>
						@endforeach
					</tbody>
				</table>
			</div>
	</div>
@endsection