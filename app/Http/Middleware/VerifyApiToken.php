<?php

namespace App\Http\Middleware;

use Closure;

class VerifyApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        dd($request);
        if ($request->user()->api_token !== $request->api_token)
        {
             return response('Unauthorized', 401)
                  ->header('Content-Type', 'text/plain');
        }
       return $next($request);
    }
}
