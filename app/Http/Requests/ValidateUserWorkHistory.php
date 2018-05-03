<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUserWorkHistory extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
         return 'Bearer '.$this->user()->api_token == $this->header('Authorization') ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'required',
            'value' => 'required|numeric|max:65535'
        ];
    }

    public function updateWorkHistory($user)
    {
       return $user->workHistory()->update([
            $this->type => $this->value
        ]);
    }
}
