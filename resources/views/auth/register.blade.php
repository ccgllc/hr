@extends('layouts.auth')

@section('title')
    Register
@endsection

@section('content')
    <section id="register" class="hero is-fullheight">
        <div class="hero-body" style="margin-top: -10%">
            <div class="container">
                <div class="column is-4 is-offset-4">
                    <div class="icon-on-white"></div>

                   <registration-form></registration-form>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
     <script src="{{ mix('/js/register.js') }}"></script>
@endsection
