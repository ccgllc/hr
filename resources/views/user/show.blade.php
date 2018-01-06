@extends('layouts.app')

@section('title') {{ $user->name }} @endsection

@section('content')

	<h1>{{ $user->name }}</h1>
	
@endsection

@section('scripts')
	{{-- <script src="{{ mix('js/profile.js') }}"></script> --}}
@endsection