<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller {

	public function xactnetAddress(Request $request)
	{
		$valid = $request->validate([
        	'value' => 'required|max:255',
   		]);	
   		$this->update($request, $this->setData($valid, 'xactnet_address'));
   		return $valid['value'];
	}

	public function phone(Request $request)
	{
		$valid = $request->validate([
        	'value' => 'required|max:255',
   		]);	
   		$this->update($request, $this->setData($valid, 'phone'));
   		return $valid['value'];
	}

	public function email(Request $request)
	{
		$valid = $request->validate([
        	'value' => 'required|email|max:255',
   		]);	
   		$request->user()->update($this->setData($valid, 'email'));
   		return $valid['value'];
	}

	public function address(Request $request)
	{
		$valid = $request->validate([
        	'street' => 'required|max:255',
        	'city'  => 'required|max:255',
        	'state' => 'required',
        	'zip'  => 'required|max:5'
   		]);	
   		$request->user()->profile()->update($valid);
   		return $valid;
	}

	public function license(Request $request)
	{
		$valid = $request->validate([
			'license_state' => 'required|max:2',
			'license_number' => 'required',
			'expiration_month' => 'required|numeric',
			'expiration_year' => 'required|numeric'
		]);

		$license = $request->user()->AdjusterLicenses()->create($valid);

		return $license;

	}

	public function destroyLicense(Request $request, $id)
	{
		return \App\AdjusterLicense::destroy($id);
	}

	public function update($request, $data)
	{
		$request->user()->profile()->update($data);
	}
	public function setData($data, $name)
	{
		$data[$name] = $data['value'];
   		unset($data['value']);
   		return $data;
	}
}