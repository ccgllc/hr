<?php

namespace App\Http\Requests;

use App\WorkHistory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ValidateWorkHistory extends FormRequest
{
    
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
       return  'Bearer ' . $this->user()->api_token == $this->header('Authorization') ? true : false;
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
        return WorkHistory::create($this->all());
    }

    /** 
     * create work history model from request input.
     */ 
    public function updateWorkHistory()
    {
       $workHistory = $this->user()->workHistory;
       return $workHistory->update($this->all());
    }
}
