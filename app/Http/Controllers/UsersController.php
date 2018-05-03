<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Auth\ConfirmsEmails;

class UsersController extends Controller
{
    use ConfirmsEmails;

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['verifyAccount']], 'dashboard');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('status')) {
            $users =  User::status($request->status)->orderBy('created_at', 'desc')->paginate(15);
            $status = ucwords($request->status).'s';
        }
        else {
            $users = User::orderBy('created_at', 'desc')->paginate(15);
            $status = 'Users';
            $users->load('roles', 'profile');
        }
        return view('user.admin', compact('users', 'status'));
    }

    public function location($location)
    {
        $profiles = \App\Profile::state($location)->get();
        $users = $profiles->map(function ($profile, $key){
            return $profile->user;
        });
        $status = ucwords($location. ' users');
        return view('user.admin', compact('users', 'status'));
    }

    /**
     * Verify account verification token.
     *
     * @param  int  $token
     * @return \Illuminate\Http\Response
     */
    public function verifyAccount($token)
    {
        $user = $this->verify($token);

        if ($user) {
            // return $user->applied ? redirect("/user/".$user->id) : redirect("/apply");
            return redirect("/apply");
        }

        throw ValidationException::withMessages([
            'error' => [Lang::get('We were unable to verify your account, contact support.')],
        ])->status(422);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($status)
    {
        $users =  User::status($status)->orderBy('created_at', 'desc')->paginate(15);
        $status = ucwords($status);
        return view('user.admin', compact('users', 'status'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
