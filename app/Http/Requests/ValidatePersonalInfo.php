<?php

namespace App\Http\Requests;

use App\AdjusterLicense;
use App\Profile;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ValidatePersonalInfo extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
         return  $this->user()->api_token == $this->api_token ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'street'           => 'required',
            'city'             => 'required',
            'state'            => 'required',
            'zip'              => 'required',
            'phone'            => 'required',
            // 'license_state'    => 'required',
            // 'license_number'   => 'required',
            // 'expiration_month' => 'required',
            // 'expiration_year'  => 'required',
            // 'xactnet_address'   => 'required',
            'user_id'          => ''
        ];
    }

    /** 
     * create our users profile from the request data.
     */ 
    public function createUserProfile()
    {
        return Profile::create(
            $this->only([
                'street', 
                'city',
                'state',
                'zip',
                'phone',
                'xactnet_address',
                'user_id'
            ])
       );
    }

    /** 
     * create our users profile from the request data.
     */ 
    public function updateUserProfile()
    {
        $profile = $this->user()->profile;
        return $profile->update(
            $this->only([
                'street', 
                'city',
                'state',
                'zip',
                'phone',
                'xactnet_address',
            ])
       );
    }

    /** 
     * create our new users license.
     */ 
    public function createAdjusterLicense()
    {
        if ($this->hasAllLicenseData()) {
            return AdjusterLicense::create(
                $this->only([
                    'license_state', 
                    'license_number', 
                    'expiration_year',
                    'expiration_month', 
                    'user_id'
                ])
            );
        }
    }

    protected function hasAllLicenseData() {
        if ($this->license_number && $this->license_state && $this->expiration_month && $this->expiration_year)
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }
}
