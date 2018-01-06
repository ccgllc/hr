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
	<script> window.chartData = {!! json_encode($data) !!} </script>
	<script src="{{ mix('js/Dashboard.js') }}"></script>
@endsection