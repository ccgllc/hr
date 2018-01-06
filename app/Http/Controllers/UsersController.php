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
        $this->middleware('auth', ['except' => ['verifyAccount']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::exclude('api_token')->paginate(15);
        $users->load('roles');
        
        return view('user.admin', compact('users'));
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
    public function show($id)
    {
    	$user = User::find($id);
    	$user->load([
    		'profile',
    		'workHistory',
    		'certifications',
    		'adjusterLicenses',
    		'softwareExperiences',
            'documents'
    	])->get();
    	
        return view('user.show', compact('user'));
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