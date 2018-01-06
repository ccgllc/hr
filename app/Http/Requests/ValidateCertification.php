<?php

namespace App\Http\Requests;

use App\Certification;
use App\Document;
use App\SoftwareExperience;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ValidateCertification extends FormRequest
{

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
            'certifications' => 'array',
            'software' => 'array',
            'resume' => 'required|mimetypes:application/pdf,application/msword,text/rtf,application/octet-stream,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
    }

    /**
     * set some custom validation messages.
     *
     * @return array
     */
    public function messages()
    {
        return [
            // 'certifications.' => 'Please select at least one certification option.',
            // 'software.required' => 'please select at least one software option.',
            'resume.mimetypes' => 'Sorry your resume is required! You may only upload a .pdf .doc .docx or .rtf file'
        ];
    }

    /** 
     * create our certifications
     * @ return App\Certification
     */ 
    public function createCertifications()
    {
        if($this->certifications)
        {
           foreach($this->certifications as $cert)
            {
                Certification::create(['type' => $cert, 'user_id' => $this->user_id]);
            } 
        }
    }
    /** 
     * create software experiences
      @return App\SoftwareExperience 
     */ 
    public function createSoftwareExperiences()
    {
        if ($this->software) {
            foreach($this->software as $s)
            {
                SoftwareExperience::create(['type' => $s, 'user_id' => $this->user_id]);
            }
        }
    }
    public function storeResume()
    {
        $ext = $this->file('resume')->clientExtension();
        $name = $this->user()->id;
        $filename = $name.'.'.$ext;
        // dd($this->file('resume'));
        $path = $this->file('resume')->storeAs('resumes', $filename, 'hr');
        $doc = new Document;
        $doc->name = $filename;
        $doc->type = 'resume';
        $doc->path = $path;
        $doc->user_id = $this->user()->id;
        return $doc->save();
    }
}
