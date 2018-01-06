<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="/apply">
      {{-- <img src="/images/icon-on-light.png" height="auto" width="auto" alt="Claim Consulant Group"> --}}
      <img src="/images/icon.png" height="auto" width="auto" alt="Claim Consulant Group">
    </a>

    <div class="navbar-burger burger" data-target="userMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="userMenu" class="navbar-menu">
    <div class="navbar-start">
      @if (Auth::user()->hasRole('administrator'))
      <div class="navbar-item">
        <div class="field has-addons">
          <div class="control">
              <input class="input is-search" type="text" placeholder="Search">
            </div>
          </div>
        </div>
        @endif
        
        {{-- <a href="" class="navbar-item">Link</a> --}}

      </div>

    <div class="navbar-end">
          @guest
            <a class="navbar-item" href="{{ route('login') }}">Login</a>
            <a class="navbar-item" href="{{ route('register') }}">Register</a>
          @else
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-active">
                {{ Auth::user()->name }}
              </a>
              <div class="navbar-dropdown is-right">
                @if(Auth::user()->applied)<a href="/profile" class="navbar-item">My Profile</a>@endif
                @if (Auth::user()->hasRole('administrator'))
                <a href="/dashboard" class="navbar-item">Dashboard</a>
                <a href="/users" class="navbar-item">Manage Users</a>
                <a href="/roles" class="navbar-item">Manage Roles</a>
                 @endif
                 <hr class="dropdown-divider">
                <a 
                  class="navbar-item" 
                  href="{{ route('logout') }}"
                  onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                >
                    signout
                     <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                      {{ csrf_field() }}
                    </form>
                </a>
              </div>
            </div>
          
          @endguest
         
      </div>

    </div>

  </div>
</nav>