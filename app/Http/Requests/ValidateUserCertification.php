<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ValidateUserCertification extends FormRequest
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
            'type' => ['required',
                            Rule::unique('certifications')->where(function ($query) {
                                $query->where([
                                    ['type', '=', $this->type],
                                    ['user_id', '=', $this->user()->id]
                               ]);
                        })
                      ]
        ];
    }

    public function messages()
{
    return [
        // 'type.required' => 'A title is required',
        'type.unique'  => 'You already have this certification',
    ];
}

    public function createCertification($user)
    {
        return \App\Certification::create($this->all());
    }
}
