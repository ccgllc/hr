<?php

namespace App\Http\Requests;

use App\WorkHistory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ValidateWorkHistory extends FormRequest
{

    // public $experienceRules = 'none', '0-1', '2-5', '6-9', '10-14', '20-24', '25-30', '30+'];
    // public $claimsRules = 'none', '1-50', '51-100', '101-200', '201-500', '501-1000', '1001-2500', '2501-5000', '5001-10000', '10000+'];
    
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth::user()) {
            return  Auth::user()->api_token == $this->api_token ? true : false;
        };
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'desk_experience'          => 'required|numeric|between:0,65535',
            'residential_experience'   => 'required|numeric|between:0,65535',
            'residential_claims'       => 'required|numeric|between:0,65535',
            'residential_cat_experience'   => 'required|numeric|between:0,65535',
            'residential_cat_claims'       => 'required|numeric|between:0,65535',
            'commercial_experience'    => 'required|numeric|between:0,65535',
            'commercial_claims'        => 'required|numeric|between:0,65535',
            'commercial_cat_experience'    => 'required|numeric|between:0,65535',
            'commercial_cat_claims'        => 'required|numeric|between:0,65535',
            'large_loss_experience'    => 'required|numeric|between:0,65535',
            'large_loss_claims'        => 'required|numeric|between:0,65535',
            'large_loss_cat_experience'    => 'required|numeric|between:0,65535',
            'large_loss_cat_claims'        => 'required|numeric|between:0,65535',
            'auto_experience'          => 'required|numeric|between:0,65535',
            'auto_claims'              => 'required|numeric|between:0,65535',
            'inland_marine_experience' => 'required|numeric|between:0,65535',
            'inland_marine_claims'     => 'required|numeric|between:0,65535',
            'casualty_experience'      => 'required|numeric|between:0,65535',
            'casualty_claims'          => 'required|numeric|between:0,65535',
            'environmental_experience' => 'required|numeric|between:0,65535',
            'environmental_claims'     => 'required|numeric|between:0,65535',
            'flood_experience'         => 'required|numeric|between:0,65535',
            'flood_claims'             => 'required|numeric|between:0,65535',
            'earthquake_experience'    => 'required|numeric|between:0,65535',
            'earthquake_claims'        => 'required|numeric|between:0,65535',
        ];
    }

    /** 
     * create work history model from request input.
     */ 
    public function createWorkHistory()
    {
        return WorkHistory::create($this->except('api_token'));
    }

    /** 
     * create work history model from request input.
     */ 
    public function updateWorkHistory()
    {
       $workHistory = $this->user()->workHistory;
       return $workHistory->update($this->except('api_token'));
    }
}
