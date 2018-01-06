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
                        <h1>Reset Your Password, and try not to forget it this time ;)</h1>
                    </div>

                    {{-- <password-reset-form></password-reset-form> --}}

                    <form method="post" action="/password/reset">

                        {{ csrf_field() }}
        
                    <input type="hidden" name="token" value="{{ $token }}">
                        
                    <div class="field is-signin">
                        <!-- <label class="label">Email</label> -->
                        <div class="control has-icons-left">
                            <input type="text" id="email" name="email" class="input is-medium" value="{{ $email or old('email') }}" placeholder="Email Address">
                            <span class="icon is-small is-left">
                              <i class="fa fa-envelope"></i>
                            </span>
                           @if ($errors->has('email'))
                                <span class="help is-danger">
                                    {{ $errors->first('email') }}
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="field is-signin">
                        <!-- <label class="label">Password</label> -->
                        <div class="control has-icons-left">
                            <input type="password" id="password" name="password" class="input is-medium" placeholder="Password">
                            <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                            @if ($errors->has('password'))
                                <span class="help is-danger">
                                   {{ $errors->first('password') }}
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="field is-signin">
                        <!-- <label class="label">Password</label> -->
                        <div class="control has-icons-left">
                            <input type="password" id="password_confirmation" name="password_confirmation" class="input is-medium" v-model="form.password_confirmation" placeholder="Confirm Password">
                            <span class="icon is-small is-left">
                              <i class="fa fa-lock"></i>
                            </span>
                           {{--  <span class="help is-danger" v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></span> --}}
                        </div>
                    </div>

                    <br />

                        <div class="control">
                            <button class="button is-medium is-ccg is-full-width">
                                <!-- <span>Go</span> -->
                                <span class="icon is-small">
                                    <i class="fa fa-check"></i>
                                </span>
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </section>
@endsection

@section('scripts')
     {{-- <script src="{{ mix('/js/resetPassword.js') }}"></script> --}}
@endsection
