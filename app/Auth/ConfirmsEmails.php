<?php 

namespace App\Auth;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\ValidationException;

trait ConfirmsEmails {

	public function verify($token)
	{
		$user = $this->findUserByToken($token);
		// dd($user);
		if(!$user->verified) {
			$user->update([
				//'verification_token' => '',
				'api_token'          => str_random(60),
				'verified'           => 1
			]);
		}
		$this->guard()->login($user);
		return $user;
	}

	public function emailIsNotConfirmed(Request $request)
	{
		return $this->user($request->email)->isConfirmed() ?  false : true;
	}

	public function sendUnconfirmedEmailResponse()
	{
		throw ValidationException::withMessages([
            $this->username() => [Lang::get('You need to confirm your account before you can login.')],
        ])->status(422);
	}

	protected function findUserByToken($token)
	{
		return User::whereVerificationToken($token)->firstOrFail();
	}

	protected function user($email)
	{
		return User::whereEmail($email)->firstOrFail();
	}

	/**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

}