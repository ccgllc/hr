@extends('layouts.auth')

@section('title') Login @endsection

@section('content')
    <section id="login" class="hero is-fullheight">
    	<div class="hero-body" style="margin-top: -20%">
			<div class="container">
				<div class="column is-4 is-offset-4">
					<div class="icon-on-white"></div>
					
					<div class="sign-in-title">
						<h1>Let's get you logged in</h1>
					</div>

					<login-form></login-form>
				</div>
			</div>
   		</div>
    </section>
@endsection

@section('scripts')
     <script src="{{ mix('/js/login.js') }}"></script>
@endsection
