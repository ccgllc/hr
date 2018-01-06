<?php

namespace App\Http\Controllers\Api\EmploymentApplication;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateCertification as Validate;
use Illuminate\Http\Request;

class CertificationsController extends Controller
{
    public function store(Validate $request)
    {
    	// dd($request->all());
    	$request->merge(['user_id' => $request->user()->id]);
    	$request->createCertifications();
    	$request->createSoftwareExperiences();
        if ($request->hasFile('resume')){
            $request->storeResume();
        }
        $request->user()->update(['applied' => 1]);
    	return response('Certifications Saved!', 200)
                  ->header('Content-Type', 'text/plain');
    }
}
