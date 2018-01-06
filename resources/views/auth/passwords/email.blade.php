@extends('layouts.auth')

@section('title')
    Reset Your Password
@endsection

@section('content')
    <section id="reset" class="hero is-fullheight">
        <div class="hero-body" style="margin-top: -20%">
            <div class="container">
                <div class="column is-4 is-offset-4">
                    <div class="icon-on-white"></div>
                    
                    <div class="sign-in-title">
                        <h1>We will email you a password reset link</h1>
                    </div>

                    <request-password-reset-form></request-password-reset-form>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
    <script src="{{ asset('/js/requestPasswordReset.js') }}"></script>
@endsection
