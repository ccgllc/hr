<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateDocument extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->userCanUploadFiles()){
            return true;
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'api_token' => 'required',
            'file' => 'mimetypes:application/pdf,application/msword,text/rtf,application/octet-stream,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
    }

    public function userCanUploadFiles()
    {
        return $this->userOwnsProfile() ||
               $this->userCanEditProfiles() 
               ? true 
               : false;
    }

    public function userCanEditProfiles()
    {
        return $this->user()->hasPermissionTo('edit-a-users-profile') ? true : false;
    }

    public function userOwnsProfile()
    {
        return $this->user()->api_token == $this->api_token ? true : false;
    }
}
