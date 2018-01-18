<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller {

	public function status(Request $request, $id)
	{
		$user = $this->getUser($id);
		$user->status = $request->status;
		$user->save();
		return $user;
	}

	public function referral(Request $request, $id)
	{
		$user = $this->getUser($id);
		if ($user->profile()->update(['referral' => $request->referral]))
		{
			return response('success', 200);
		}
		return response('error', 500);
	}

	public function xactnetAddress(Request $request, $id)
	{
		$valid = $request->validate([
        	'xactnet_address' => 'required|max:255',
   		]);	
   		
   		$this->getUser($id)->profile()->update($valid);

   		return $valid['xactnet_address'];
	}

	public function phone(Request $request, $id)
	{
		$valid = $request->validate([
        	'phone' => 'required|max:255',
   		]);	
   		
   		$this->getUser($id)->profile()->update($valid);

   		return $valid['phone'];
	}

	public function email(Request $request, $id)
	{
		$valid = $request->validate([
        	'email' => 'required|email|max:255',
   		]);	
   		
		$this->getUser($id)->update($valid);

   		return $valid['email'];
	}

	public function address(Request $request, $id)
	{
		$valid = $request->validate([
        	'street' => 'required|max:255',
        	'city'  => 'required|max:255',
        	'state' => 'required',
        	'zip'  => 'required|max:5'
   		]);	

   		$this->getUser($id)->profile()->update($valid);

   		return $valid;
	}

	public function license(Request $request, $id)
	{
		$valid = $request->validate([
			'license_state' => 'required|max:2',
			'license_number' => 'required',
			'expiration_month' => 'required|numeric',
			'expiration_year' => 'required|numeric'
		]);

		$license = $this->getUser($id)->AdjusterLicenses()->create($valid);

		return $license;

	}

	public function destroyLicense(Request $request, $id, $licenseId)
	{
		return \App\AdjusterLicense::destroy($licenseId);
	}

	public function getUser($id)
	{
		return \App\User::findOrFail($id);
	}
}