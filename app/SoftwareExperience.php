<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SoftwareExperience extends Model
{
    //

    protected $guarded = ['id'];

    /** 
     * set our user relationship
     */ 
    public function user()
    {
    	return $this->belongsTo(App\User::class);
    }
}
