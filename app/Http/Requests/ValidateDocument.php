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
        return false;
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
            'filename' => 'required',
            'file' => 'required|mimetypes:application/pdf,application/msword,text/rtf,application/octet-stream,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
    }

    public function createDocument($user)
    {
        $ext = $this->file('file')->clientExtension();  
        $name = $this->filename . $user->id;
        $filename = $name.'.'.$ext;
        $path = $this->file('file')->storeAs('resumes', $filename, 'hr');
        $doc = new \App\Document;
        $doc->name = $filename;
        $doc->type = $this->type;
        $doc->path = $path;
        $doc->user_id = $user->id;
        return $doc->save();
    }

    public function userCanUploadFiles()
    {
        return $this->userOwnsProfile() || $this->userCanEditProfiles() 
                   ? true 
                   : false;
    }

    /**
     * Determine if the user making the request is 
     * has permission to edit profile data.
     *
     * @return void
     */
    public function userCanEditProfiles()
    {
        return $this->user()->hasPermissionTo('edit-a-users-profile') ? true : false;
    }

    /**
     * Determine if the user making the request is 
     * the owner of the profile.
     *
     * @return void
     */
    public function userOwnsProfile()
    {
        return $this->user()->api_token == $this->header('Authorization') ? true : false;
    }
}
