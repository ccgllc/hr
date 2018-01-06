<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdjusterLicense extends Model
{
	protected $guarded = ['id'];
    /** 
     * User relation
     */ 
    public function user()
    {
    	return $this->belongsTo(App\User::class);
    }
}
