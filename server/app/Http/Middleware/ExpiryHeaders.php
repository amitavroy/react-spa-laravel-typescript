<?php

namespace App\Http\Middleware;

use Closure;

class ExpiryHeaders
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
        // setup the expiry time
        $minutes = config('app.get_url_expiry');
        $expiry = now()->addSeconds(10)->toRfc7231String();

        // get the response object and set header
        $response = $next($request);
        $response->header('Expires', $expiry);

        return $response;
    }
}
