@extends('layouts.app')

@section('title')
	HR Dashboard
@endsection

@section('content')
	<div id="dashboard">
		<router-view></router-view>
	</div>
@endsection

@section('scripts')
	<script> window.dashboardData = {!! json_encode($data) !!} </script>
	<script src="{{ mix('js/dashboard.js') }}"></script>
@endsection