<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
     <!-- Api Token -->
    <meta name="api-token" content="{{ Auth::user()->api_token }}">

    <title>{{ config('app.name', 'Laravel') }} | @yield('title')</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
    
    <div id="app">
        {{-- <div class="columns is-gapless" style="margin-bottom: 0"> --}}
            {{-- <div class="column is-2">
                @include('partials.app-switcher')
            </div> --}}
            {{-- <div class="column"> --}}
                @include('partials.top-bar')
            {{-- </div> --}}
        {{-- </div> --}}
        <div class="columns is-gapless">
          {{--  <div class="column is-2">
                @include('partials.nav')
            </div> --}}
            <div class="column">
                @yield('content')
            </div> 
        </div>
    </div>


    <!-- Scripts -->
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    @yield('scripts')
</body>
</html>
